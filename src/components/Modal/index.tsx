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

/**
 * Modal component
 * @param {onClose} onClose - The function to call when the modal is closed.
 * @param {className} className - The className to apply to the modal.
 * @param {children} children - The content to display in the modal.
 * @param {closeTimeout} closeTimeout - The time it takes for the modal to close. Default: `280`
 * @param {closeOnClickOutside} closeOnClickOutside - Whether the modal should close when clicking outside. Default: `true`
 * @param {closeOnEsc} closeOnEsc - Whether the modal should close when pressing the escape key. Default: `true`
 * @param {showCloseButton} showCloseButton - Whether to show the close button. Default: `true`
 * @param {title} title - The title to display in the modal.
 */
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
        "ui-modal ui-pt-12 md:ui-pt-0 ui-bg-black ui-bg-opacity-20 ui-h-svh ui-max-h-svh dark:ui-bg-white",
        {
          "ui-animate-fade-out": isClosing,
          "ui-animate-fade-in": !isClosing,
        }
      )}
      open
      autoFocus
    >
      <div
        className={clsx(
          "ui-modal-box ui-flex ui-flex-col ui-max-h-full ui-rounded-b-none md:ui-rounded-b-2xl ui-w-full ui-h-full md:ui-h-fit",
          {
            "ui-animate-to-bottom md:ui-animate-fade-out": isClosing,
            "ui-animate-to-top md:ui-animate-fade-in": !isClosing,
          },

          className
        )}
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
