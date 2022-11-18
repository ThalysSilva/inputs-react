export function isOverflowing(element: HTMLElement) {
  return element.scrollHeight > element.offsetHeight;
}
