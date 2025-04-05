import React, { useRef } from 'react';

import { cn } from 'lib/utils/cn';

const Navbar = ({
  children,
  className,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const navbarRef = useRef<HTMLDivElement | null>(null);

  return (
    <header
      ref={navbarRef}
      data-component="navbar"
      className={[
        // 'fixed',
        // 'top-0',
        // 'z-10',
        // 'border-b',
        'border-[var(--border-color)]',
        'bg-[var(--clr-background)]',
        'min-h-[50px]',
        'flex',
        'items-center',
        'justify-between',
        'px-2',
        'px-0',
        'w-full',
        'bg-red-500',
        className,
      ].join(' ')}>
      {children}
    </header>
  );
};

Navbar.GroupLeft = ({ children, className }: { children?: React.ReactNode; className?: string })=>{
    return <div className={cn(``, className)}>{children}</div>
}

Navbar.GroupRight = ({ children, className }: { children?: React.ReactNode; className?: string })=>{
    return <div className={cn(``, className)}>{children}</div>
}

export { Navbar };
