import {useEffect, useRef, useState} from 'react';
import config from '../../../../config';
import {doNothing} from '../../../../infraestructure/doNothing';
import {unsubscribe} from '../../../../utils/functions/events';
import {getInputsByName} from '../../../../utils/functions/getters';
import useValidator from '../../../../validators/hooks/useValidator';
import {ValidationResponse, ValidatorFunction} from '../../../../validators/types';

type Props = {
    isRequiredMessage?: string;
    elementsName: string;
    minSelected?: number;
    maxSelected?: number;
    isRequired?: boolean;
    maxMessage?: string;
    minMessage?: string;
};

export default function useSwitchGroup({
    isRequiredMessage,
    elementsName,
    maxSelected,
    minSelected,
    isRequired,
    maxMessage,
    minMessage
}: Props) {
    const [validationResponse, setValidationResponse] = useState<ValidationResponse>({isValid: true});
    const {multipleValidate, validateArrayMinLength, validateArrayMaxLength} = useValidator();
    const {isRequired: requiredMessageDefault} = config.messages.validations;
    const [isValid, setIsValid] = useState(false);
    const inputValidatorRef = useRef<HTMLInputElement>(null);

    const maxMessageDefault = `Você deve selecionar no máximo ${
        maxSelected && maxSelected > 1 ? maxSelected + ' itens' : '1 item'
    }!`;
    
    const minMessageDefault = `Você deve selecionar no mínimo ${
        minSelected && minSelected > 1 ? minSelected + ' itens' : '1 item'
    }!`;

    const isRequiredSwitch = (array: boolean[]) =>
        validateArrayMinLength(0, array, isRequiredMessage ?? requiredMessageDefault);

    const minSwitchesSelected = (array: boolean[], minSelected: number) =>
        validateArrayMinLength(minSelected, array, minMessage ?? minMessageDefault);

    const maxSwitchesSelected = (array: boolean[], maxSelected: number) =>
        validateArrayMaxLength(maxSelected, array, maxMessage ?? maxMessageDefault);

    const validateFunctions = [] as ValidatorFunction[];

    if (isRequired) validateFunctions.push(isRequiredSwitch);
    if (minSelected)
        validateFunctions.push((switchesSelected: boolean[]) => minSwitchesSelected(switchesSelected, minSelected));
    if (maxSelected)
        validateFunctions.push((switchesSelected: boolean[]) => maxSwitchesSelected(switchesSelected, maxSelected));

    function validate() {
        const elementsArray = getInputsByName(elementsName);
        const checkedValueArray = [] as boolean[];
        elementsArray.map((element) => element.checked && checkedValueArray.push(element.checked));

        const response = multipleValidate(checkedValueArray, validateFunctions);
        if (inputValidatorRef.current) {
            if (response.reason) {
                inputValidatorRef.current.setCustomValidity(response.reason);
            } else {
                inputValidatorRef.current.setCustomValidity('');
            }
        }
        setIsValid(response.isValid && !!checkedValueArray.length);
        setValidationResponse(response);
    }

    useEffect(() => {
        inputValidatorRef.current?.addEventListener('invalid', function (event) {
            event.preventDefault();

            validate();
        });
        document.addEventListener('restoreCreateServer', function () {
            setValidationResponse({isValid: true});
            setIsValid(false);
        });

        return () => {
            unsubscribe('restoreCreateServer', doNothing);
        };
    }, []);


    return {isValid, validate, validationResponse, inputValidatorRef};
}
