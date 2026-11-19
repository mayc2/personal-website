import type { PropsWithChildren } from 'react';

interface WithTitleProps {
  title: string;
}

export const WithTitle = ({
  title,
  children,
}: PropsWithChildren<WithTitleProps>) => {
  return <div title={title}>{children}</div>;
};
