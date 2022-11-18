import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {Switch} from '..';
import userEvent from '@testing-library/user-event';

describe(Switch.name, () => {
    test('Testando interface inicial com label.', async () => {
        render(<Switch
            dataTestId='switch'
            inLine
            label='Teste'
        />);

        expect(screen.getByTestId('label-switch')).toBeInTheDocument();
        expect(screen.getByTestId('switch')).toBeInTheDocument();
        expect(screen.getByTestId('switch-state-indicator')).toBeInTheDocument();
        expect(screen.getByTestId('slider')).toBeInTheDocument();
    });

    test('Testando interface inicial sem label.', async () => {
        render(<Switch
            dataTestId='switch'
        />);
        try {
            expect(screen.getByTestId('label-switch')).toBeInTheDocument();
            expect(1).toBe(2);
        } catch (e) {            
            expect(screen.getByTestId('switch')).toBeInTheDocument();
            expect(screen.getByTestId('switch-state-indicator')).toBeInTheDocument();
            expect(screen.getByTestId('slider')).toBeInTheDocument();
        }
    });

    test('Testando onChange function', async () => {
        let checked = false;
        const mockedClick = jest.fn(() => {
            checked = true;
        });
        render(<Switch
            dataTestId='switch'
            isChecked={true}
            isDisabled={false}
            onChange={mockedClick}
        />);

        const mockedSwitch = screen.getByTestId('switch');
        await userEvent.click(mockedSwitch);

        await waitFor(() => {
            expect(mockedClick).toHaveBeenCalled();
            expect(checked).toBe(true);
        });
    });

    test('Testando caso de uso isDisabled', async () => {
        let checked = false;
        const mockedClick = jest.fn(() => {
            checked = true;
        });

        render(<Switch
            dataTestId='switch'
            isChecked={true}
            isDisabled={true}
            onChange={mockedClick}
        />);

        const mockedSwitch = screen.getByTestId('switch');
        await userEvent.click(mockedSwitch);

        await waitFor(() => {
            expect(checked).toBe(false);
        });
    });

    test('Testando caso de uso inLine', async () => {
        render(<Switch
            dataTestId='switch'
            isChecked={true}
            isDisabled={true}
            label="teste"
            inLine
        />);

        const mockedSwitch = screen.getByTestId('switch-container') as HTMLElement;

        expect(mockedSwitch.className.includes('flex-row')).toBe(true);
    });

    test('Testando caso de uso NOT inLine', async () => {
        render(<Switch
            dataTestId='switch'
            isChecked={true}
            isDisabled={true}
            label="teste"
        />);

        const mockedSwitch = screen.getByTestId('switch-container') as HTMLElement;

        expect(mockedSwitch.className.includes('flex-col')).toBe(true);
    });
});