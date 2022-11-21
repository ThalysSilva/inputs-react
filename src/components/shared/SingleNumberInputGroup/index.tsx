import React from 'react';

import {useSingleNumberInputGroup} from './hook/useSingleNumberInputGroup';
import {InputNumber} from '../CustomInputs/InputNumber';
import { Text5 } from '../Texts';
import { When } from '../When';

type SIngleNumberInputGroupProps = {
    gapBetweenInputs?: number;
    showTextGreen?: boolean;
    numberOfInputs: number;
    showTextRed?: boolean;
    elementsName?: string;
    isRequired?: boolean;
    dataTestId?: string;
    className?: string;
    label?: string;
};

export function SingleNumberInputGroup({
    elementsName = 'inputNumber-Group',
    gapBetweenInputs = 5,
    numberOfInputs,
    showTextGreen,
    showTextRed,
    isRequired,
    dataTestId,
    className,
    label,
}: SIngleNumberInputGroupProps) {
    const inputGroup = [] as JSX.Element[];
    const {autoTab} = useSingleNumberInputGroup(elementsName);

    for (let count = 0; count < numberOfInputs; count++) {
        inputGroup.push(
            <InputNumber
                className={` 
                    w-9 h-10 rounded-xl
                    ${showTextGreen ? 'text-alerts-green' : showTextRed ? 'text-alerts-red' : 'text-primary-white'} text-center px-[12px] 
                    ${className ? className : ''}`}
                dataTestId={`${elementsName}-${count}`}
                key={`${elementsName}-${count}`}
                id={`${elementsName}-${count}`}
                isRequired={isRequired}
                hideMessageValidation
                highlightBorderError
                name={elementsName}
                onKeyUp={autoTab}
                maxLength={1}
                min={0}
                max={9}
            />
        );
    }
    return (
        <div className={'flex flex-col h-full justify-start '}>
      <When value={label}>
        <Text5 className={"mb-2 font-semibold"}>{label}</Text5>
      </When>
        <div className={`flex flex-row gap-${gapBetweenInputs.toString()} w-full`} data-testid={dataTestId}>
            {inputGroup}
        </div>
        </div>
    );
}
