import { useState, useEffect, useRef } from 'react';

type UseIntersectOptions = {
  root?: HTMLElement | null;
  rootMargin?: string;
  threshold?: number | number[];
};

type UseIntersectResult = [(node: HTMLElement | null) => void, IntersectionObserverEntry | undefined];

export const useIntersect = (options: UseIntersectOptions = {}): UseIntersectResult => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | undefined>(undefined);
  const [node, setNode] = useState<HTMLElement | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(([entry]) => setEntry(entry), {
      root: options.root,
      rootMargin: options.rootMargin,
      threshold: options.threshold,
    });

    const { current: currentObserver } = observer;

    if (node && currentObserver) {
      currentObserver.observe(node);
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [node, options.root, options.rootMargin, options.threshold]);

  return [setNode, entry];
};
