import {useEffect, useRef} from "react";

export function useOutsideClick(handler: () => void, listenCapturing: boolean) {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const modalArea = ref.current;
      if (modalArea && !modalArea.contains(e.target as Node)) {
        // Do something
        handler();
      }
    }
    document.addEventListener("click", handleClick, listenCapturing);

    return () => document.removeEventListener("click", handleClick);
  },[ref,listenCapturing])


  return ref
}