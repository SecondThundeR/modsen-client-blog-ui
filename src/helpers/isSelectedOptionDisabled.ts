export function isSelectedOptionDisabled<
  T extends { isDisabled?: boolean; value?: string },
>(options: T[], value: string) {
  const disabledValues = options
    .filter((option) => option.isDisabled)
    .map((option) => option.value);
  return disabledValues.includes(value);
}
