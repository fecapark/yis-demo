import { clamp } from 'es-toolkit';

import type { Merge } from '@/utils/type';

import { TextInput, type TextInputProps } from '@/components/TextInput/TextInput';

type NumberInputProps = Merge<
  TextInputProps,
  { max?: number; min?: number; onChange?: (value?: number) => void; value?: number }
>;

const integerParser = (value: string): '' | number =>
  value === '' ? '' : Number(value.replace(/((\.|,)*)/g, ''));

export const NumberInput = ({
  value,
  min = -Number.MAX_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER,
  onChange,
  ...props
}: NumberInputProps) => {
  const stringifiedValue = value !== undefined ? String(clamp(value, min, max)) : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = integerParser(e.target.value);
    if (parsedValue === '' || !isNaN(parsedValue)) {
      onChange?.(parsedValue === '' ? undefined : clamp(parsedValue, min, max));
    }
  };

  return (
    <TextInput {...props} inputMode="numeric" onChange={handleChange} value={stringifiedValue} />
  );
};
