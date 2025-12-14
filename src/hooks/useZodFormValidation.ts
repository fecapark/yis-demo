import { mapValues } from 'es-toolkit';
import { get, isObjectLike, set } from 'es-toolkit/compat';
import { useState } from 'react';
import { z } from 'zod/v4';

import type { NonGenericDeep } from '@/utils/type';

import { getZodErrorMessage } from '@/utils/zod';

type StringOptionalDeep<T> = NonGenericDeep<T, string | undefined>;

export const useZodFormValidation = <
  TValue extends Record<string, any>,
  TScheme extends z.ZodObject,
>(
  value: TValue,
  schema: TScheme,
) => {
  const getInitialInvalidTexts = () => {
    return mapValues(value, () => undefined) as StringOptionalDeep<TValue>;
  };

  const [invalidMessage, setInvalidMessage] = useState<string | undefined>(undefined);
  const [invalidTexts, setInvalidTexts] =
    useState<StringOptionalDeep<TValue>>(getInitialInvalidTexts());

  const getInvalidTexts = (error: z.ZodError<z.output<TScheme>>) => {
    const res = getInitialInvalidTexts();
    error.issues.forEach((issue) => {
      const path = issue.path.join('.');
      const target = get(res, path);
      if (!isObjectLike(target)) {
        set(res, path, issue.message);
      }
    });
    return res;
  };

  const reset = () => {
    setInvalidTexts(() => getInitialInvalidTexts());
    setInvalidMessage(undefined);
  };

  const validate = () => {
    const { error } = schema.safeParse(value);

    if (error) {
      setInvalidTexts(() => getInvalidTexts(error));
      setInvalidMessage(getZodErrorMessage(error));
      return {
        success: false,
        error,
      } as const;
    }

    reset();
    return {
      success: true,
    } as const;
  };

  const onChangeWithReset = <TAmbiguous>(fn: (v: TAmbiguous) => void) => {
    return (v: TAmbiguous) => {
      reset();
      fn(v);
    };
  };

  return {
    invalidTexts,
    invalidMessage,
    setInvalidTexts,
    setInvalidMessage,
    reset,
    validate,
    onChangeWithReset,
  };
};
