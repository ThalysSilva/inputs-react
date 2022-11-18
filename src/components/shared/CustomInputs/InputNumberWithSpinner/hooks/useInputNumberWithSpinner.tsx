import { ChangeEvent, FocusEvent, useState } from 'react';
import { addLeadingZeros } from '../../../../../utils/functions/string';

type Props = {
  maxLength?: number;
  max?: number;
  min?: number;
};

export default function useInputNumberWithSpinner({ maxLength, max, min }: Props) {
  const validMaxLength = maxLength ? maxLength : 0;
  const initialState = addLeadingZeros(min ? min.toString() : '', validMaxLength);
  const [total, setTotal] = useState(initialState);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const targetValue = e.target.value;
    let normalizedValue = targetValue;
    if (maxLength && targetValue.length > maxLength)
      normalizedValue = targetValue.slice(0, maxLength);
    setTotal(normalizedValue);
  }

  function handleBlur(e: FocusEvent<HTMLInputElement, Element>) {
    const targetValue = e.target.value;
    let normalizedValue = targetValue;
    if (max && parseInt(targetValue) > max) normalizedValue = max.toString();
    if (min && parseInt(targetValue) < min) normalizedValue = min.toString();
    if (maxLength) normalizedValue = addLeadingZeros(normalizedValue, maxLength);
    setTotal(normalizedValue);
  }

  function incrementTotal() {
    const currentIp = parseInt(total) || 0;
    let normalizedNewTotal = '';
    let newTotal = 0;
    if (max) {
      newTotal = currentIp < max ? currentIp + 1 : max;
    } else {
      newTotal = currentIp.toString().length ? currentIp + 1 : 1;
    }
    normalizedNewTotal = addLeadingZeros(newTotal.toString(), validMaxLength);
    setTotal(normalizedNewTotal);
  }

  function decrementTotal() {
    const currentIp = parseInt(total) || 0;
    let normalizedNewTota = '';
    let newTotal = 0;
    if (min) {
      newTotal = currentIp > min ? currentIp - 1 : min;
    } else {
      newTotal = currentIp.toString().length ? currentIp - 1 : 0;
    }
    normalizedNewTota = addLeadingZeros(newTotal.toString(), validMaxLength);
    setTotal(normalizedNewTota);
  }
  return { handleChange, decrementTotal, incrementTotal, handleBlur, total };
}
