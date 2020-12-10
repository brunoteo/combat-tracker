import { ChangeEvent, useState } from "react";

export type UseInputType = {
  inputValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
};

export const useInput = (initialValue: string): UseInputType => {
  const [value, setValue] = useState<string>(initialValue);
  return {
    inputValue: value,
    onChange: (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
    reset: () => setValue(initialValue),
  };
};
