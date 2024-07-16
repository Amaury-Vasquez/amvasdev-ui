import clsx, { ClassValue } from "clsx";
import { ReactNode, useCallback, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import IconButton from "../IconButton";

export interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  className?: ClassValue;
  closeTimeout?: number;
  closeOnClickOutside?: boolean;
  closeOnEsc?: boolean;
  showCloseButton?: boolean;
  title?: ReactNode;
}

const Modal = ({
  onClose,
  className,
  children,
  closeTimeout = 280,
  closeOnClickOutside = true,
  closeOnEsc = true,
  showCloseButton = true,
  title,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    if (!isClosing) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, closeTimeout);
    }
  }, []);

  useEventListener("keydown", (event) => {
    if (event.key === "Escape" && closeOnEsc) {
      handleClose();
    }
  });
  useOnClickOutside(ref, closeOnClickOutside ? handleClose : () => {});

  const showHeader = title || showCloseButton;

  return (
    <dialog
      className={clsx(
        "ui-modal ui-animate-fade-in ui-bg-black ui-bg-opacity-20 dark:ui-bg-white",
        {
          "ui-animate-fade-out": isClosing,
        }
      )}
      open
      autoFocus
    >
      <div
        className={clsx("ui-modal-box ui-flex ui-flex-col", className)}
        ref={ref}
      >
        {showHeader ? (
          <div
            className={clsx("ui-flex ui-w-full ui-items-center", {
              "ui-justify-between": title && showCloseButton,
              "ui-justify-end": !title && showCloseButton,
              "ui-justify-start": title && !showCloseButton,
            })}
          >
            {title &&
              (typeof title === "string" ? (
                <span className="ui-text-xl ui-font-semibold ui-w-full ui-text-center">
                  {title}
                </span>
              ) : (
                title
              ))}
            {showCloseButton ? (
              <IconButton
                icon={<AiOutlineClose className="ui-text-xl" />}
                onClick={handleClose}
                variant="primary"
              />
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </dialog>
  );
};

export default Modal;
