import React from 'react';
import {render} from '@testing-library/react';

import {PasswordValidation} from '..';
import config from '../../../../config';

describe(PasswordValidation.name, () => {
    const {passwordValidation, string} = config.messages.validations;

    const setup = (value: string) => render(<PasswordValidation passwordValue={value} />);
    it('Should, when typing JOnny&D33p, make all elements valid', () => {
        setup('JOnny&D33p');

        const elements = document.querySelectorAll(':invalid');
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        expect(elementsArray.length).toEqual(0);
    });

    it('Should have one element invalid because it does not have symbols', () => {
        setup('JOnnyeD33p');

        const elements = document.querySelectorAll(':invalid');
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        expect(elementsArray[0].validationMessage).toEqual(passwordValidation.minimumOneSymbol);
    });

    it('Should have one element invalid because the string have tree sequential digits', () => {
        setup('JOnny&D333p');

        const elements = document.querySelectorAll(':invalid');
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        expect(elementsArray[0].validationMessage).toEqual(passwordValidation.lessThanTreeSequentialDigits);
    });

    it('Should have one element invalid because the string have tree sequential lower case character', () => {
        setup('JOnnny&D33p');

        const elements = document.querySelectorAll(':invalid');
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        expect(elementsArray[0].validationMessage).toEqual(passwordValidation.lessThanTreeSequentialCharacterLowerCase);
    });

    it('Should have one element invalid because the string have tree sequential upper case character', () => {
        setup('JJJOnny&D33p');

        const elements = document.querySelectorAll(':invalid');
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        expect(elementsArray[0].validationMessage).toEqual(passwordValidation.lessThanTreeSequentialCharacterUpperCase);
    });

    it('Should have one element invalid because the string does not have more than 8 character', () => {
        setup('JOnny&3');

        const elements = document.querySelectorAll(':invalid');
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        expect(elementsArray[0].validationMessage).toEqual(string.isMinThanExpectedLength);
    });

    it('Should have one element invalid because the string does not have minimum of one digit', () => {
        setup('JOnny&DEEp');

        const elements = document.querySelectorAll(':invalid');
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        expect(elementsArray[0].validationMessage).toEqual(passwordValidation.minimumOneDigit);
    });

    it('Should have one element invalid because the string does not minimum of one lower case letter', () => {
        setup('JONNY&D33P');

        const elements = document.querySelectorAll(':invalid');
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        expect(elementsArray[0].validationMessage).toEqual(passwordValidation.minimumOneLetterLowerCase);
    });

    it('Should have one element invalid because the string does not minimum of one upper case letter', () => {
        setup('jonny&d33p');

        const elements = document.querySelectorAll(':invalid');
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        expect(elementsArray[0].validationMessage).toEqual(passwordValidation.minimumOneLetterUpperCase);
    });

    it('Should have two invalid elements because the string does not have at least one upper case letter and the string has tree sequential lower case character', () => {
        setup('jonnny&d33p');

        const elements = document.querySelectorAll(':invalid');
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        expect(elementsArray.length).toEqual(2);

        expect(
            elementsArray.some((element) => element.validationMessage == passwordValidation.minimumOneLetterUpperCase)
        ).toEqual(true);

        expect(
            elementsArray.some(
                (element) => element.validationMessage == passwordValidation.lessThanTreeSequentialCharacterLowerCase
            )
        ).toEqual(true);
    });
});
