import React from 'react';

interface WithTitleProps {
  title: string;
}

export const WithTitle: React.FC<WithTitleProps> = ({ title, children }) => {
  return <div title={title}>{children}</div>;
};
