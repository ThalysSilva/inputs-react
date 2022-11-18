import React from 'react';
import { ValidatorFunction } from '../../../validators/types';
import { Text1 } from '../Texts';
import { useItemValidator } from './hooks/useItemValidator';

type Props = {
  validateFunctions: ValidatorFunction[];
  label: string;
  idValidator: string;
  value: string;
};

export function ItemValidator({ value, idValidator, validateFunctions, label }: Props) {
  const { inputRef, validatorColor } = useItemValidator({ value, validateFunctions });
  return (
    <div>
      <div data-testid={idValidator} className={'flex flex-row gap-2 items-center h-max'}>
        <input
          name={'validatorItem'}
          defaultChecked={true}
          className={'hidden'}
          type={'checkbox'}
          id={idValidator}
          ref={inputRef}
        />
        <div className={`flex h-2 w-2 rounded-full ${validatorColor}`} />
        <Text1>{label}</Text1>
      </div>
    </div>
  );
}
