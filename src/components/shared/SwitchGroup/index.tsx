import React from 'react';

import WarningIcon from '../../../assets/icon/Warning';
import useSwitchGroup from './hooks/useSwitchGroup';
import {SwitchObject} from './types';
import {Switch} from '../Switch';
import {When} from '../When';
import {H5} from '../Texts';
import { doNothing } from '../../../infraestructure/doNothing';

export type SwitchGroupProps = {
    switchObjects: SwitchObject[];
    gapBetweenSwitches?: string;
    isRequiredMessage?: string;
    elementsName?: string;
    isRequired?: boolean;
    maxSelected?: number;
    minSelected?: number;
    dataTestId?: string;
    maxMessage?: string;
    minMessage?: string;
};

export function SwitchGroup({
    elementsName = 'Switch-Group',
    gapBetweenSwitches = '5',
    isRequiredMessage,
    switchObjects,
    maxSelected,
    minSelected,
    dataTestId,
    isRequired,
    minMessage,
    maxMessage
}: SwitchGroupProps) {
    const {validate, validationResponse, inputValidatorRef, isValid} = useSwitchGroup({
        isRequiredMessage,
        elementsName,
        maxSelected,
        minSelected,
        isRequired,
        maxMessage,
        minMessage
    });


    const switchGroup = [] as JSX.Element[];
    switchObjects.forEach((switchObject, index) => {
        const label = switchObject.label;
        switchGroup.push(
            <div className={'flex flex-row gap-2'} key={index}>
                <Switch
                    dataTestId={dataTestId + '-' + index}
                    value={switchObject.value}
                    name={elementsName}
                    onChange={validate}
                />
                <When value={label}>
                    <H5 className="text-center flex justify-center items-center">{label}</H5>
                </When>
            </div>
        );
    });

    return (
        <div className="flex flex-col w-full mb-5">
            <div className={`grid grid-cols-3 gap-${gapBetweenSwitches} w-full`} data-testid={dataTestId}>
                {switchGroup}
            </div>
            <input
                ref={inputValidatorRef}
                name={'validatorItem'}
                required={isRequired}
                onChange={doNothing}
                className={'hidden'}
                checked={isValid}
                type={'checkbox'}
            />
            <When value={!validationResponse.isValid}>
                <div data-testid={'messageValidation'} className={'flex flex-row gap-2 items-center pl-4 h-max mt-2'}>
                    <WarningIcon />
                    <label className={'text-alerts-red font-light text-xs leading-4'}>
                        {validationResponse.reason}
                    </label>
                </div>
            </When>
        </div>
    );
}
