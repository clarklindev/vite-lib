import React, { useRef } from 'react';

import styles from './Navbar.module.css';

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
        styles.Navbar,
        // 'fixed',
        // 'top-0',
        // 'z-10',
        // 'border-b',
        'border-[var(--border-color)]',
        'bg-[var(--clr-background)]',
        'min-h-[50px]',
        'flex',
        'items-center',
        'px-2',
        'w-full',
        'bg-red-500',
        className,
      ].join(' ')}>
      {children}
    </header>
  );
};

const Group = ({ children, className }: { children?: React.ReactNode; className?: string }) => {
  return <div className={className}>{children}</div>;
};

Navbar.Group = Group;
export { Navbar };
