export function useButton() {
  const getAnimation = (isDisabled: boolean | undefined) => {
    if (isDisabled) return ' opacity-70 ';
    return 'hover:opacity-70 duration-200';
  };

  return { getAnimation };
}
