import React from 'react';
import {act, render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {InputNumberWithSpinner, InputNumberWithSpinnerProps} from '..';
import LockIcon from '../../../../../assets/icon/Lock';
import {addLeadingZeros} from '../../../../../utils/functions/string';

describe(InputNumberWithSpinner.name, () => {
    type Props = Omit<InputNumberWithSpinnerProps, 'onRight' | 'id'>;

    const setup = ({...rest}: Props) => render(<InputNumberWithSpinner onRight={<LockIcon />} {...rest} />);
    it('Should display the component', () => {
        setup({});

        const input = screen.getByTestId('numberWithSpinnerTestId');

        expect(input).toBeInTheDocument();
    });

    it('Should display the component with maxLength 3', async () => {
        const maxLength = 3;
        setup({maxLength});

        const input = screen.getByTestId('numberWithSpinnerTestId') as HTMLInputElement;

        expect(input.value).toEqual('000');

        await userEvent.click(input);

        input.select();
        await userEvent.keyboard('12345');

        await waitFor(() => expect(input.value).toEqual('123'));
    });

    it('Should display the component with prop max with 31', async () => {
        const max = 31;
        setup({max});

        const input = screen.getByTestId('numberWithSpinnerTestId') as HTMLInputElement;

        expect(input.value).toEqual('');
        await userEvent.click(input);
        await act(async () => {
            input.focus();
            await userEvent.keyboard('1');
            input.blur();
        });

        await waitFor(() => expect(input.value).toEqual('1'));

        await act(async () => {
            input.focus();
            await userEvent.keyboard('2');
            input.blur();
        });
        await waitFor(() => expect(input.value).toEqual('12'));

        await act(async () => {
            input.focus();
            await userEvent.keyboard('3');
            input.blur();
        });
        await waitFor(() => expect(input.value).toEqual(max.toString()));
    });

    it('Should display the component with prop min with 31', async () => {
        const min = 31;
        setup({min});

        const input = screen.getByTestId('numberWithSpinnerTestId') as HTMLInputElement;

        expect(input.value).toEqual(min.toString());

        await act(async () => {
            input.focus();
            input.value = '';
            await userEvent.keyboard('1');
            input.blur();
        });
        await waitFor(() => expect(input.value).toEqual(min.toString()));

        await act(async () => {
            input.focus();
            input.value = '';
            await userEvent.keyboard('12');
            input.blur();
        });

        await waitFor(() => expect(input.value).toEqual(min.toString()));

        await act(async () => {
            input.focus();
            input.value = '';
            await userEvent.keyboard('123');
            input.blur();
        });
        await waitFor(() => expect(input.value).toEqual('123'));
    });

    it('Should increment input value after clicking in arrow Up Spinner', async () => {
        setup({});

        const input = screen.getByTestId('numberWithSpinnerTestId') as HTMLInputElement;
        const arrowUpButton = screen.getByTestId('buttonArrowUp');

        await userEvent.click(arrowUpButton);

        await waitFor(() => expect(input.value).toEqual('1'));
    });

    it('Should increment input value after clicking in arrow down Spinner', async () => {
        setup({});

        const input = screen.getByTestId('numberWithSpinnerTestId') as HTMLInputElement;
        const arrowDownButton = screen.getByTestId('buttonArrowDown');

        await userEvent.click(arrowDownButton);

        await waitFor(() => expect(input.value).toEqual('-1'));
    });

    it('Should increment and decrement input value after clicking in arrows Spinner', async () => {
        setup({});

        const input = screen.getByTestId('numberWithSpinnerTestId') as HTMLInputElement;
        const arrowUpButton = screen.getByTestId('buttonArrowUp');
        const arrowDownButton = screen.getByTestId('buttonArrowDown');

        await userEvent.click(arrowUpButton);
        await waitFor(() => expect(input.value).toEqual('1'));

        await userEvent.click(arrowDownButton);
        await waitFor(() => expect(input.value).toEqual('0'));
    });

    it('Should increment 2x input value after clicking in arrow down Spinner, but displayed 1 because the props are setted with max = 1', async () => {
        const max = 1;
        setup({max});

        const input = screen.getByTestId('numberWithSpinnerTestId') as HTMLInputElement;
        const arrowUpButton = screen.getByTestId('buttonArrowUp');

        await userEvent.click(arrowUpButton);
        await userEvent.click(arrowUpButton);

        await waitFor(() => expect(input.value).toEqual(max.toString()));
    });

    it('Should decrement input value after clicking in arrow down Spinner, but displayed 1 because the props are setted with min = 1', async () => {
        const min = 1;
        setup({min});

        const input = screen.getByTestId('numberWithSpinnerTestId') as HTMLInputElement;
        const arrowDownButton = screen.getByTestId('buttonArrowDown');

        await userEvent.click(arrowDownButton);

        await waitFor(() => expect(input.value).toEqual(min.toString()));
    });

    it('Should display by default, when set min prop, the value of min.', async () => {
        const min = 1;
        setup({min});

        const input = screen.getByTestId('numberWithSpinnerTestId') as HTMLInputElement;

        await waitFor(() => expect(input.value).toEqual(min.toString()));
    });

    it('Should display by default, when set min prop and maxLength, the value of min with leading zeros.', async () => {
        const min = 1;
        const maxLength = 3;
        setup({min, maxLength});

        const input = screen.getByTestId('numberWithSpinnerTestId') as HTMLInputElement;

        await waitFor(() => expect(input.value).toEqual(addLeadingZeros(min.toString(), maxLength)));
    });
});
