import { ChangeEvent } from 'react';

export function useInputNumber(
  maxLength: number | undefined,
  min: number | undefined,
  max: number | undefined,
) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const targetValue = e.target.value;
    const element = document.getElementById(e.target.id) as HTMLInputElement;

    if (maxLength) {
      if (element.value.length > maxLength) {
        element.value = targetValue.slice(0, maxLength);
      } else {
        if (max && parseInt(element.value) > max) {
          element.value = max.toString();
        }
        if (min && parseInt(element.value) < min) {
          element.value = min.toString();
        }
      }
    } else {
      element.value = targetValue;
    }
    return;
  }

  return { handleChange };
}
