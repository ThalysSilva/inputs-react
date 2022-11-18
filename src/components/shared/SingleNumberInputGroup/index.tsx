import React from 'react';
import {InputNumber} from '../CustomInputs/InputNumber';
import {useSingleNumberInputGroup} from './hook/useSingleNumberInputGroup';

type SIngleNumberInputGroupProps = {
    gapBetweenInputs?: number;
    showTextGreen?: boolean;
    numberOfInputs: number;
    showTextRed?: boolean;
    elementsName?: string;
    isRequired?: boolean;
    dataTestId?: string;
    className?: string;
};

export function SingleNumberInputGroup({
    elementsName = 'inputNumber-Group',
    gapBetweenInputs = 5,
    numberOfInputs,
    showTextGreen,
    showTextRed,
    isRequired,
    dataTestId,
    className
}: SIngleNumberInputGroupProps) {
    const inputGroup = [] as JSX.Element[];
    const {autoTab} = useSingleNumberInputGroup(elementsName);

    for (let count = 0; count < numberOfInputs; count++) {
        inputGroup.push(
            <InputNumber
                className={` 
                    w-9 h-10 rounded-xl
                    ${showTextGreen ? 'text-alerts-green' : showTextRed ? 'text-alerts-red' : 'text-primary-white'} text-center px-[13px] 
                    ${className ? className : ''}`}
                dataTestId={`${elementsName}-${count}`}
                key={`${elementsName}-${count}`}
                id={`${elementsName}-${count}`}
                isRequired={isRequired}
                hideMessageValidation
                highlightBorderError
                name={elementsName}
                hideValidationBar
                onKeyUp={autoTab}
                maxLength={1}
                min={0}
                max={9}
            />
        );
    }
    return (
        <div className={`flex flex-row gap-${gapBetweenInputs.toString()} w-full`} data-testid={dataTestId}>
            {inputGroup}
        </div>
    );
}
