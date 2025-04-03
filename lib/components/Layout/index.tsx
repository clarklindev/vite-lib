import React from 'react';

type FlexProps = {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

const Layout = ({ className, children, style }: FlexProps) => {
  return (
    <div data-component={Layout.displayName} style={style} className={['relative pb-8', className].join(' ')}>
      {children}
    </div>
  );
};

Layout.displayName = 'Layout';
export { Layout };
