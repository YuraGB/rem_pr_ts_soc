import { useCallback, useRef } from "react";

export const useInoutMessage = (onSend: (arg: string) => void) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onClick: () => void = useCallback(() => {
    if (inputRef?.current && inputRef.current.value.trim().length) {
      onSend(inputRef.current.value);
      inputRef.current.value = "";
    }
  }, [onSend, inputRef]);

  // @ts-ignore
  const onEnter: (ev: KeyboardEventHandler<HTMLInputElement>) => void = (
    ev
  ) => {
    if (ev.code === "Enter" || ev.code === "NumpadEnter") {
      onClick();
    }
  };

  return {
    onClick,
    onEnter,
    inputRef,
  };
};
