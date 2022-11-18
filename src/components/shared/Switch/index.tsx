import React, {useEffect, useRef, useState} from 'react';
import {doNothing} from '../../../infraestructure/doNothing';
import {When} from '../When';

type SliderButtonProps = {
    isChecked?: boolean;
    isDisabled?: boolean;
    onChange?: () => void;
    dataTestId?: string;
    defaultValue?: string | number;
    value?: string | number;
    name?: string;
};

type SwitchProps = {
    label?: string;
    value?: string | number;
    onChange?: () => void;
    isChecked?: boolean;
    isDisabled?: boolean;
    dataTestId?: string;
    defaultValue?: string | number;
    inLine?: boolean;
    name?: string;
};

function SliderButton({isDisabled, dataTestId, defaultValue, onChange, value, name}: SliderButtonProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [checked, setChecked] = useState(false);

    function handleClick() {
        if (!inputRef.current) return;
        inputRef.current.checked = !inputRef.current.checked;
        if (onChange) onChange();
    }

    useEffect(() => {
        if (!inputRef.current) return;
        setChecked(inputRef.current.checked);
    }, [inputRef.current, inputRef.current?.checked]);
    return (
        <div
            data-testid={dataTestId}
            className={`${
                !isDisabled ? `cursor-pointer` : ` opacity-70 `
            } text-primary-white relative w-[60px] h-[30px] rounded-[100px] bg-primary-white ${
                checked ? ` bg-alerts-green ` : `bg-grayscale-700`
            } duration-200`}
            onClick={!isDisabled ? handleClick : doNothing}
        >
            <input
                type="checkbox"
                disabled={isDisabled}
                value={value}
                className="switch "
                name={name}
                defaultValue={defaultValue}
                ref={inputRef}
            />
            <span
                data-testid="switch-state-indicator"
                className={`select-none checkedLabel-off ${checked ? `checkedLabel-on` : ``}`}
            >
                {checked ? `On` : `Off`}
            </span>
            <span data-testid="slider" className={`slider ${checked ? `slider-checked` : ``}`}></span>
        </div>
    );
}

export function Switch({
    isChecked,
    isDisabled,
    label,
    onChange,
    value,
    dataTestId,
    defaultValue,
    inLine,
    name
}: SwitchProps) {
    return (
        <>
            <When value={label}>
                <div
                    id="switch-container"
                    data-testid="switch-container"
                    className={`text-primary-white flex gap-2 items-center select-none ${
                        isDisabled ? `opacity-70` : ``
                    } ${inLine ? `flex-row` : `flex-col`}`}
                >
                    <When value={!inLine}>
                        <label className="text-lg text-justify">{label}</label>
                    </When>
                    <SliderButton
                        isChecked={isChecked}
                        isDisabled={isDisabled}
                        dataTestId={dataTestId}
                        defaultValue={defaultValue}
                        value={value}
                        onChange={onChange}
                        name={name}
                    />
                    <When value={inLine}>
                        <label data-testid="label-switch" className="text-lg text-justify">
                            {label}
                        </label>
                    </When>
                </div>
            </When>
            <When value={!label}>
                <SliderButton
                    isChecked={isChecked}
                    isDisabled={isDisabled}
                    dataTestId={dataTestId}
                    defaultValue={defaultValue}
                    value={value}
                    name={name}
                    onChange={onChange}
                />
            </When>
        </>
    );
}
