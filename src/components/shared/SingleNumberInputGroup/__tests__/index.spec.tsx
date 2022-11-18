import React from 'react';
import {render, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {SingleNumberInputGroup} from '..';

describe(SingleNumberInputGroup.name, () => {
    const elementsName = 'mockGroup';

    const setup = () =>
        render(<SingleNumberInputGroup numberOfInputs={6} elementsName={elementsName} />);
    it('Should typing in all input numbers', async () => {
        setup();

        const elements = document.getElementsByName(elementsName);
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        await userEvent.click(elementsArray[0]);
        await userEvent.keyboard('012345');

        await waitFor(() => expect(elementsArray[5] === document.activeElement).toBe(true));
        await waitFor(() => expect(elementsArray[5].value).toEqual('5'));
    });

    it('Should typing Backspace button and should erase the actual input value and moving focus to left (previous child)', async () => {
        setup();

        const elements = document.getElementsByName(elementsName);
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        await userEvent.click(elementsArray[0]);
        await userEvent.keyboard('012345');
        await userEvent.keyboard('[Backspace]');

        await waitFor(() => expect(elementsArray[5].value).toEqual(''));

        await waitFor(() => expect(elementsArray[4] === document.activeElement).toBe(true));
        await waitFor(() => expect(elementsArray[4].value).toEqual('4'));
    });

    it('Should typing ArrowLeft button and should moving focus to left (previous child)', async () => {
        setup();

        const elements = document.getElementsByName(elementsName);
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        await userEvent.click(elementsArray[0]);
        await userEvent.keyboard('012345');
        await userEvent.keyboard('[ArrowLeft]');

        await waitFor(() => expect(elementsArray[5].value).toEqual('5'));

        await waitFor(() => expect(elementsArray[4] === document.activeElement).toBe(true));
        await waitFor(() => expect(elementsArray[4].value).toEqual('4'));
    });

    it('Should typing ArrowRight button and should moving focus to right (subsequent child)', async () => {
        setup();

        const elements = document.getElementsByName(elementsName);
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        await userEvent.click(elementsArray[0]);
        await userEvent.keyboard('012345');
        await userEvent.keyboard('[ArrowLeft]');

        await waitFor(() => expect(elementsArray[5].value).toEqual('5'));
        await waitFor(() => expect(elementsArray[4] === document.activeElement).toBe(true));

        await userEvent.keyboard('[ArrowRight]');

        await waitFor(() => expect(elementsArray[5] === document.activeElement).toBe(true));
        await waitFor(() => expect(elementsArray[4].value).toEqual('4'));
    });

    it('Should typing Delete button and should erase the actual input value and moving focus to right (subsequent child)', async () => {
        setup();

        const elements = document.getElementsByName(elementsName);
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        await userEvent.click(elementsArray[0]);
        await userEvent.keyboard('012345');
        await userEvent.keyboard('[ArrowLeft][ArrowLeft]');
        await userEvent.keyboard('[Delete]');

        await waitFor(() => expect(elementsArray[4] === document.activeElement).toBe(true));
        await waitFor(() => expect(elementsArray[3].value).toEqual(''));
        await waitFor(() => expect(elementsArray[5].value).toEqual('5'));
        await waitFor(() => expect(elementsArray[4].value).toEqual('4'));
    });

    it('Should after typing Delete button and should erase the actual input value, moving focus to input erased and typing a new value', async () => {
        setup();

        const elements = document.getElementsByName(elementsName);
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];

        await userEvent.click(elementsArray[0]);
        await userEvent.keyboard('012345');
        await userEvent.keyboard('[ArrowLeft][ArrowLeft]');
        await userEvent.keyboard('[Delete]');

        await waitFor(() => expect(elementsArray[4] === document.activeElement).toBe(true));

        await userEvent.keyboard('[ArrowLeft]');

        await waitFor(() => expect(elementsArray[3].value).toEqual(''));
        await waitFor(() => expect(elementsArray[3] === document.activeElement).toBe(true));

        await userEvent.keyboard('8');

        await waitFor(() => expect(elementsArray[3].value).toEqual('8'));
    });
});
