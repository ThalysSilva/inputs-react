import config from '../../../../config';
import useValidator from '../../../../validators/hooks/useValidator';
import {ValidatorFunction} from '../../../../validators/types';

export function usePasswordValidationModern() {
    const {passwordValidation} = config.messages.validations;
    const {
        sequencialSameLetterUppercaseRegex,
        sequencialSameLetterLowercaseRegex,
        validateNotContainRegex,
        validateStringMinLength,
        sequencialNumbersRegex,
        lowercaseRegex,
        uppercaseRegex,
        validateRegex,
        symbolRegex,
        numberRegex,
        multipleValidate
    } = useValidator();

    const moreThanEightFunctionValidation = (string: string) => validateStringMinLength(8, string);

    const minimumOneSymbolFunctionValidation = (string: string) =>
        validateRegex(string, symbolRegex, passwordValidation.minimumOneSymbol);

    const minimumOneNumberFunctionValidation = (string: string) =>
        validateRegex(string, numberRegex, passwordValidation.minimumOneDigit);

    const minimumOneLetterLowerCaseFunctionValidation = (string: string) =>
        validateRegex(string, lowercaseRegex, passwordValidation.minimumOneLetterLowerCase);

    const minimumOneLetterUpperCaseFunctionValidation = (string: string) =>
        validateRegex(string, uppercaseRegex, passwordValidation.minimumOneLetterUpperCase);

    const lessThanTreeSequentialDigitsFunctionValidation = (string: string) =>
        validateNotContainRegex(string, sequencialNumbersRegex, passwordValidation.lessThanTreeSequentialDigits);

    const lessThanTreeSequentialCharacterUpperCaseFunctionValidation = (string: string) =>
        validateNotContainRegex(
            string,
            sequencialSameLetterUppercaseRegex,
            passwordValidation.lessThanTreeSequentialCharacterUpperCase
        );

    const lessThanTreeSequentialCharacterLowerCaseFunctionValidation = (string: string) =>
        validateNotContainRegex(
            string,
            sequencialSameLetterLowercaseRegex,
            passwordValidation.lessThanTreeSequentialCharacterLowerCase
        );

    const lessThanTreeSequentialCharacterFunctionValidationArray = [] as ValidatorFunction[];

    lessThanTreeSequentialCharacterFunctionValidationArray.push(
        lessThanTreeSequentialCharacterUpperCaseFunctionValidation,
        lessThanTreeSequentialCharacterLowerCaseFunctionValidation
    );

    const lessThanTreeSequentialCharacterFunctionValidation = (string: string) =>
        multipleValidate(string, lessThanTreeSequentialCharacterFunctionValidationArray);

    return {
        moreThanEightFunctionValidation,
        minimumOneSymbolFunctionValidation,
        minimumOneNumberFunctionValidation,
        minimumOneLetterLowerCaseFunctionValidation,
        minimumOneLetterUpperCaseFunctionValidation,
        lessThanTreeSequentialDigitsFunctionValidation,
        lessThanTreeSequentialCharacterFunctionValidation
    };
}
