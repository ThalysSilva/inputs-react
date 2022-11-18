import { ChangeEvent, useEffect, useState } from 'react';
import { Option } from '../../../../../utils/types';

type ListItem = {
  value: string;
  label: string;
};

type Props = {
  list: ListItem[];
  id: string;
  dispatchActionOnSelect?: (option: Option) => void;
  labelString?: string;
};

const optionEmpty = { value: '', label: '' };

export function useInputAutocomplete({
  dispatchActionOnSelect,
  labelString = '',
  list,
  id,
}: Props) {
  const [listFiltered, setListFiltered] = useState<ListItem[]>([]);
  const [positionTop, setPositionTop] = useState('0px');
  const [selectedItem, setSelectedItem] = useState<ListItem>(optionEmpty);

  useEffect(() => {
    const autocompleteInput = document.getElementById(id + '-label');
    if (!autocompleteInput) return;
    const height = autocompleteInput.scrollHeight;
    setPositionTop((height + (labelString ? 49 : 24)).toString() + 'px');
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const targetValue = e.target.value;
    if (!list) return;

    if (!targetValue && !selectedItem.value) {
      setSelectedItem(optionEmpty);
      setListFiltered([]);
      return;
    }

    const listTemp = list.filter((item) => {
      if (!list[0].label) {
        return false;
      }
      return item.label.toLocaleLowerCase().includes(targetValue.toLocaleLowerCase());
    });

    setSelectedItem({ value: targetValue, label: targetValue });
    setListFiltered(listTemp);
  }

  function onSelectItem(item: ListItem) {
    setSelectedItem(item);
    setListFiltered([]);
    if (dispatchActionOnSelect) dispatchActionOnSelect(item);
  }

  return { handleChange, selectedItem, listFiltered, positionTop, onSelectItem };
}
