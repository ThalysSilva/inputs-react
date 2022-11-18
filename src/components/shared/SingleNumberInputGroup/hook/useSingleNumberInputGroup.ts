import {KeyboardEvent} from 'react';

export function useSingleNumberInputGroup(elementsName: string) {
    function autoTab(e: KeyboardEvent<HTMLInputElement>) {
        const elements = document.getElementsByName(elementsName);
        const elementsArray = Array.prototype.slice.call(elements) as HTMLInputElement[];
        const indexOfSelectedElement = elementsArray.indexOf(e.currentTarget);
        const currentElement = elementsArray[indexOfSelectedElement];

        currentElement.type = 'text';
        currentElement.setSelectionRange(1, 1, 'backward');
        currentElement.type = 'number';

        if (e.key === 'Tab') {
            return;
        }

        if (e.key === 'Backspace') {
            if (indexOfSelectedElement > 0) elements[indexOfSelectedElement - 1].focus();

            return;
        }
        if (e.key === 'Delete') {
            currentElement.value = '';

            if (!(indexOfSelectedElement == elementsArray.length - 1)) {
                elements[indexOfSelectedElement + 1].focus();
            }

            return;
        }

        if (e.key === 'ArrowRight') {
            if (indexOfSelectedElement < elementsArray.length - 1)
                elements[indexOfSelectedElement + 1].focus();

            return;
        }

        if (e.key === 'ArrowLeft') {
            if (indexOfSelectedElement > 0) elements[indexOfSelectedElement - 1].focus();

            return;
        }

        if (indexOfSelectedElement < elementsArray.length) {
            if (parseInt(e.key) >= 0 && parseInt(e.key) <= 9) {
                if (currentElement.value && e.key) {
                    currentElement.value = e.key;
                    if (!(indexOfSelectedElement == elementsArray.length - 1)) {
                        elements[indexOfSelectedElement + 1].focus();
                    }
                }
            }

            return;
        }
    }

    return {autoTab};
}
