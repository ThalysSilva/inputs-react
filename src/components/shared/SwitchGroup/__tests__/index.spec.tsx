import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {SwitchGroup, SwitchGroupProps} from '..';
import {switchObjectsMock} from '../../../../utils/tests/mocks/switchObjectsMock';
import {getInputsByName} from '../../../../utils/functions/getters';
import config from '../../../../config';

describe(SwitchGroup.name, () => {
    const elementsName = 'mockGroup';

    type PropsMock = Omit<SwitchGroupProps, 'switchObjects'>;

    const setup = ({isRequiredMessage, maxSelected, minSelected, isRequired, maxMessage, minMessage}: PropsMock) =>
        render(
            <SwitchGroup
                isRequiredMessage={isRequiredMessage}
                switchObjects={switchObjectsMock}
                dataTestId={'testIdSwitchGroup'}
                elementsName={elementsName}
                maxSelected={maxSelected}
                minSelected={minSelected}
                maxMessage={maxMessage}
                isRequired={isRequired}
                minMessage={minMessage}
            />
        );
    it('Should be displayed all switches ', () => {
        setup({});

        const arraySwitches = getInputsByName(elementsName);
        expect(arraySwitches.length).toEqual(Object.entries(switchObjectsMock).length);
    });

    it('Should click in one switch and turn it on', async () => {
        setup({});

        const arraySwitches = getInputsByName(elementsName);
        const divToClick = screen.getByTestId('testIdSwitchGroup-0');

        await userEvent.click(divToClick);
        const checkedValueArray = arraySwitches.filter((item) => item.checked) ?? [];

        await waitFor(() => expect(checkedValueArray.length).toEqual(1));
    });

    it('Should display default required validation message if isRequired is true and there are no switches turned on', async () => {
        const {isRequired} = config.messages.validations;
        setup({isRequired: true});

        const divToClick = screen.getByTestId('testIdSwitchGroup-0');

        await userEvent.click(divToClick);
        await userEvent.click(divToClick);

        await waitFor(() => expect(screen.getByText(isRequired)).toBeInTheDocument());
    });

    it('Should display max selected validation message if maxSelected is set and there are more switches turned on then allowed', async () => {
        setup({maxSelected: 3});

        const quantityOfSwitchesSelected = 4;

        for (let i = 0; i < quantityOfSwitchesSelected; i++) {
            const divToClick = screen.getByTestId('testIdSwitchGroup-' + i);
            await userEvent.click(divToClick);
        }
        await waitFor(() => expect(screen.getByText('Você deve selecionar no máximo 3 itens!')).toBeInTheDocument());
    });

    it('Should display min selected validation message if minSelected is set and there are less switches turned on then expected', async () => {
        setup({minSelected: 3});

        const quantityOfSwitchesSelected = 2;

        for (let i = 0; i < quantityOfSwitchesSelected; i++) {
            const divToClick = screen.getByTestId('testIdSwitchGroup-' + i);
            await userEvent.click(divToClick);
        }
        await waitFor(() => expect(screen.getByText('Você deve selecionar no mínimo 3 itens!')).toBeInTheDocument());
    });

    it('Should display custom required validation message if isRequired is true and there are no switches turned on', async () => {
        setup({isRequired: true, isRequiredMessage: 'mock123'});

        const divToClick = screen.getByTestId('testIdSwitchGroup-0');

        await userEvent.click(divToClick);
        await userEvent.click(divToClick);

        await waitFor(() => expect(screen.getByText('mock123')).toBeInTheDocument());
    });


    it('Should display custom min selected validation message if minSelected is set and there are less switches turned on then expected', async () => {
        setup({minSelected: 3, minMessage: 'mock123'});

        const quantityOfSwitchesSelected = 2;

        for (let i = 0; i < quantityOfSwitchesSelected; i++) {
            const divToClick = screen.getByTestId('testIdSwitchGroup-' + i);
            await userEvent.click(divToClick);
        }
        await waitFor(() => expect(screen.getByText('mock123')).toBeInTheDocument());
    });

    it('Should display custom max selected validation message if maxSelected is set and there are more switches turned on then allowed', async () => {
        setup({maxSelected: 3, maxMessage: 'mock123'});

        const quantityOfSwitchesSelected = 4;

        for (let i = 0; i < quantityOfSwitchesSelected; i++) {
            const divToClick = screen.getByTestId('testIdSwitchGroup-' + i);
            await userEvent.click(divToClick);
        }
        await waitFor(() => expect(screen.getByText('mock123')).toBeInTheDocument());
    });
});
