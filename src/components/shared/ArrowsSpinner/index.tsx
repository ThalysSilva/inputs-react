import React from 'react';

import SpinnerArrowDownIcon from '../../../assets/icon/SpinnerArrowDown';
import SpinnerArrowUpIcon from '../../../assets/icon/SpinnerArrowUp';

type Props = {
  onArrowDownClick: () => void;
  onArrowUpClick: () => void;
};

export function ArrowsSpinner({ onArrowDownClick, onArrowUpClick }: Props) {
  return (
    <div className={'flex flex-col'}>
      <button type={'button'} onClick={onArrowUpClick} data-testid={'buttonArrowUp'}>
        <SpinnerArrowUpIcon />
      </button>
      <button type={'button'} onClick={onArrowDownClick} data-testid={'buttonArrowDown'}>
        <SpinnerArrowDownIcon />
      </button>
    </div>
  );
}
