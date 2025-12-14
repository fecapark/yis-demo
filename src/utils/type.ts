export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Mutable<T> =
  T extends ReadonlyArray<infer U>
    ? Array<Mutable<U>>
    : T extends Record<number | string | symbol, unknown>
      ? { -readonly [K in keyof T]: Mutable<T[K]> }
      : T;

export type Merge<T, U> = Omit<T, keyof U> & U;

export type If<TValue, TCondition> = TValue extends TCondition ? true : false;

const emptyObjectSymbol: unique symbol = Symbol('emptyObjectSymbol');
export type EmptyObjectType = { [emptyObjectSymbol]?: never };

export type MergeIf<TCondition, TObject, TTrue, TFalse = EmptyObjectType> = Prettify<
  TCondition extends true ? Merge<TObject, TTrue> : Merge<TObject, TFalse>
>;

export type ValueOf<T> = T[keyof T];

export type NonGenericDeep<
  Value,
  MapValue,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
> = Value extends Date | Function | RegExp
  ? Value
  : Value extends readonly unknown[]
    ? Value extends readonly [infer First, ...infer Rest]
      ? [NonGenericDeep<First, MapValue>, ...NonGenericDeep<Rest, MapValue>]
      : Value extends readonly []
        ? []
        : NonGenericDeep<Value[number], MapValue>[]
    : Value extends Set<infer U>
      ? Set<NonGenericDeep<U, MapValue>>
      : Value extends object
        ? {
            [K in keyof Value]: NonGenericDeep<Value[K], MapValue>;
          }
        : MapValue;
