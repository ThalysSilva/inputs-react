import React from 'react';

import { useInputAutocomplete } from './hooks/useInputAutocomplete';
import { Option, OptionList } from '../../../../utils/types';
import { Input } from '../../Input';
import { Text4 } from '../../Texts';


type Props = {
  dispatchActionOnSelect?: (option: Option) => void;
  countOfDisplayedItems?: number;
  placeholder?: string;
  labelString?: string;
  disabled?: boolean;
  list: OptionList;
  id?: string;
  width?: number | 'full' | 'fit-content';
  zIndex?: number;
};

export function InputAutocomplete({
  countOfDisplayedItems = 5,
  dispatchActionOnSelect,
  id = 'autocomplete',
  disabled = false,
  placeholder = '',
  zIndex = 17,
  labelString,
  width,
  list,
}: Props) {
  const { handleChange, listFiltered, onSelectItem, positionTop,selectedItem } = useInputAutocomplete({
    dispatchActionOnSelect,
    labelString,
    list,
    id,
  });

  return (
    <div className="relative flex flex-col text-start w-full">
      <input id={id + '-value'} type={'hidden'} value={selectedItem.value ?? ''}/>
      <Input
        value={selectedItem.label ?? ''}
        placeholder={placeholder}
        labelString={labelString}
        onChange={handleChange}
        autoComplete={'off'}
        disabled={disabled}
        width={width}
        id={id + '-label'}
      />
      <div
        className={`absolute flex  flex-col bg-white  overflow-y-scroll border-l border-r border-b bg-white-full border-borderColor rounded-b-xl py-2  w-full ${
          listFiltered.length ? '' : 'hidden'
        }`}
        style={{ top: positionTop, maxHeight: (countOfDisplayedItems * 25 + 8).toString() + 'px', zIndex: zIndex }}
      >
        {listFiltered.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelectItem(item)}
            className={'w-full flex h-[25px] cursor-pointer px-4 hover:bg-backgroundCart-primary'}
          >
            <Text4>{item.label}</Text4>
          </div>
        ))}
      </div>
    </div>
  );
}
