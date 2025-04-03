import { useState } from 'react';

export const useFocus = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onFocus = (): void => {
    setIsFocused(true);
  };

  const onBlur = (): void => {
    setIsFocused(false);
  };

  //your component receives helper methods from useFocus: onFocus() onBlur()
  //and state: hovering
  return { isFocused, onFocus, onBlur };
};
