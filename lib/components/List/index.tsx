import React from 'react';

const List = ({ children }: { children: React.ReactNode }) => {
  return <ul>{children}</ul>;
};

const ListItem = ({ children, className, ...rest }: { className: string; children: React.ReactNode }) => {
  return (
    <li className={className} {...rest}>
      {children}
    </li>
  );
};

List.ListItem = ListItem;
ListItem.displayName = 'List.ListItem';

export { List };
