import { RefObject, useState } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

interface ClosableContainerArgs {
  closeTimeout?: number;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
}

/**
 *
 * @param ref
 * @param options - The options object
 * @param options.closeTimeout - The time it takes for the modal to close. Default: `280`
 * @param options.closeOnClickOutside - Whether the modal should close when clicking outside. Default: `true`
 * @param options.closeOnEsc - Whether the modal should close when pressing the escape key. Default: `true`
 * @returns
 */

const DEFAULT_ARGS = {
  closeTimeout: 280,
  closeOnClickOutside: true,
  closeOnEsc: true,
};

const useClosableContainer = <T extends HTMLElement>(
  ref: RefObject<T>,
  onClose: () => void,
  args?: ClosableContainerArgs
) => {
  const [isClosing, setIsClosing] = useState(false);
  const { closeTimeout, closeOnClickOutside, closeOnEsc } = {
    ...DEFAULT_ARGS,
    ...args,
  };

  const handleClose = () => {
    if (!isClosing) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, closeTimeout);
    }
  };

  useEventListener("keydown", (event) => {
    if (closeOnEsc && event.key === "Escape") {
      handleClose();
    }
  });

  useOnClickOutside(ref, closeOnClickOutside ? handleClose : () => {});

  return { isClosing, handleClose };
};

export default useClosableContainer;
