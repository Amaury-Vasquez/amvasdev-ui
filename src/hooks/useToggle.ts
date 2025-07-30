import { useCallback, useState } from 'react';

export interface UseToggleReturn {
  0: boolean;
  1: () => void;
  2: (value?: boolean) => void;
}

export function useToggle(defaultValue?: boolean): [boolean, () => void] {
  const [value, setValue] = useState(!!defaultValue);

  const toggle = useCallback(() => setValue(x => !x), []);

  return [value, toggle];
}

export default useToggle;