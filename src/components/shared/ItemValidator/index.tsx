import React from 'react';
import { ValidatorFunction } from '../../../validators/types';
import { Text1, Text4 } from '../Texts';
import { useItemValidator } from './hooks/useItemValidator';

type Props = {
  validateFunctions: ValidatorFunction[];
  idValidator: string;
  label: string;
  value: string;
};

export function ItemValidator({ value, idValidator, validateFunctions, label }: Props) {
  const { inputRef, validatorColor } = useItemValidator({ value, validateFunctions });
  return (
    <div>
      <div data-testid={idValidator} className={'flex flex-row gap-2 items-center h-max '}>
        <input
          name={'validatorItem'}
          defaultChecked={true}
          className={'hidden'}
          type={'checkbox'}
          id={idValidator}
          ref={inputRef}
        />
        <div className={`flex min-w-[8px] min-h-[8px] w-2 h-2 rounded-full ${validatorColor}`} />
        <Text4>{label}</Text4>
      </div>
    </div>
  );
}
