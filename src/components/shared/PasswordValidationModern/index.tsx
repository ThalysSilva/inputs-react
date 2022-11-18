import React from 'react';
import {ItemValidator} from '../ItemValidator';
import {H6} from '../Texts';
import {usePasswordValidationModern} from './hooks/usePasswordValidationModern';

export type Props = {
    passwordValue: string;
};
export function PasswordValidationModern({passwordValue}: Props) {
    const validations = usePasswordValidationModern();
    return (
        <div data-testid={'passwordValidation'} className={'flex flex-row bg-grayscale-800 rounded-xl p-3 h-fit w-full gap-8'}>
            <div className={'flex flex-col justify-start gap-2 w-fit'}>
                <H6 className={'font-normal'}>{'Critérios mínimos:'}</H6>
                <ItemValidator
                    idValidator={'moreThanEight'}
                    label={'8 caracteres'}
                    value={passwordValue}
                    validateFunctions={[validations.moreThanEightFunctionValidation]}
                />
                <ItemValidator
                    idValidator={'minimumOneSymbol'}
                    label={'1 símbolo'}
                    value={passwordValue}
                    validateFunctions={[validations.minimumOneSymbolFunctionValidation]}
                />
                <ItemValidator
                    idValidator={'minimumOneNumber'}
                    label={'1 número'}
                    value={passwordValue}
                    validateFunctions={[validations.minimumOneNumberFunctionValidation]}
                />
                <ItemValidator
                    idValidator={'minimumOneLetterLowerCase'}
                    label={'1 letra minúscula'}
                    value={passwordValue}
                    validateFunctions={[validations.minimumOneLetterLowerCaseFunctionValidation]}
                />
            </div>
            <div className={'flex flex-col justify-start gap-2 w-fit'}>
                <H6 className={'text-grayscale-400 font-normal'}>{'Exemplo de senha: JOnny&D33p'}</H6>
                <ItemValidator
                    idValidator={'minimumOneLetterUpperCase'}
                    label={'1 letra maiúscula'}
                    value={passwordValue}
                    validateFunctions={[validations.minimumOneLetterUpperCaseFunctionValidation]}
                />
                <ItemValidator
                    idValidator={'lessThanTreeSequentialDigits'}
                    label={'max. 2 digitos sequênciais'}
                    value={passwordValue}
                    validateFunctions={[validations.lessThanTreeSequentialDigitsFunctionValidation]}
                />
                <ItemValidator
                    idValidator={'lessThanTreeSequentialCharacter'}
                    label={'max. 2 caracteres sequênciais'}
                    value={passwordValue}
                    validateFunctions={[validations.lessThanTreeSequentialCharacterFunctionValidation]}
                />
            </div>
        </div>
    );
}
