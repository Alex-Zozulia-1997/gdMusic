import { useEffect, useRef } from 'react';
import { useInputStore } from '../stores/useInoutStore';

export const useInput = () => {
  const setIsInputFocused = useInputStore(
    (state) => state.actions.setFoucsedInput
  );
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const inputElement = inputRef.current;
    if (!inputElement) return;

    const handleFocus = () => {
      setIsInputFocused(true);
    };

    const handleBlur = () => {
      setIsInputFocused(false);
    };

    inputElement.addEventListener('focus', handleFocus);
    inputElement.addEventListener('blur', handleBlur);

    return () => {
      inputElement.removeEventListener('focus', handleFocus);
      inputElement.removeEventListener('blur', handleBlur);
    };
  }, [inputRef, setIsInputFocused]);
  return { inputRef };
};
