import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import LoadingSpinnerIcon from '../../../assets/icon/LoadingSpinner';
import { useButton } from './hook/useButton';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (ev?: React.MouseEvent<HTMLElement>) => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  dataTestId?: string;
  className?: string;
  isDisabled?: boolean;
  isOutlined?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
};

export function Button({
  onClick,
  type,
  dataTestId,
  className,
  isDisabled,
  isOutlined,
  isLoading,
  children,
  ...rest
}: ButtonProps) {
  const { getAnimation } = useButton();

  return (
    <button
      {...rest}
      disabled={isDisabled || isLoading}
      onClick={onClick}
      data-testid={dataTestId}
      type={type}
      className={
        isOutlined
          ? `flex items-center gap-5 px-3 h-10 border border-brand-primary bg-transparent text-brand-primary rounded-full text-lg font-normal ${getAnimation(
              isDisabled,
            )} ${className} `
          : `flex items-center gap-5 px-3 h-10 bg-brand-primary  text-brand-primary rounded-full text-lg font-normal ${getAnimation(
              isDisabled,
            )} ${className} `
      }
    >
      {isLoading ? (
        <>
          <span className="font-normal text-lg text-primary-white leading-6">{`Carregando`}</span>
          <LoadingSpinnerIcon />
        </>
      ) : (
        children
      )}
    </button>
  );
}
