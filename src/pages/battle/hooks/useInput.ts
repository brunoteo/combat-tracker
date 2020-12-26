import { ChangeEvent, useState } from "react";



export type UseInputType<T> = {
  inputValue: T;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

export const useInput = <T extends string | number> (initialValue: T): UseInputType<T> => {

  const convert = (value: string) => typeof(initialValue) === "number" ? Number(value) : value

  const [value, setValue] = useState<T>(initialValue);
  return {
    inputValue: value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(convert(e.target.value) as T),
    reset: () => setValue(initialValue),
  };
};
