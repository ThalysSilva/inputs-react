import React, { ReactNode } from 'react';

type Props = {
  dataTestId?: string;
  children: ReactNode;
  className?: string;
};

export function Text1({ children, className, dataTestId }: Props) {
  return (
    <h1
      data-testid={dataTestId}
      className={`text-xl xl:text-2xl font-bold ${className ? className : ''}`}
    >
      {children}
    </h1>
  );
}

export function Text2({ children, className, dataTestId }: Props) {
  return (
    <h2
      data-testid={dataTestId}
      className={`text-lg xl:text-xl ${className ? className : ''}`}
    >
      {children}
    </h2>
  );
}

export function Text3({ children, className, dataTestId }: Props) {
  return (
    <h3 data-testid={dataTestId} className={`text-base xl:text-lg ${className ? className : ''}`}>
      {children}
    </h3>
  );
}

export function Text4({ children, className, dataTestId }: Props) {
  return (
    <p data-testid={dataTestId} className={`text-sm xl:text-base ${className ? className : ''}`}>
      {children}
    </p>
  );
}

export function Text5({ children, className, dataTestId }: Props) {
  return (
    <p data-testid={dataTestId} className={`text-xs xl:text-sm ${className ? className : ''}`}>
      {children}
    </p>
  );
}
