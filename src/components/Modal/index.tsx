import clsx, { ClassValue } from "clsx";
import { ReactNode, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useClosableContainer } from "../../hooks";
import Button, { ButtonProps } from "../Button";
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
  btnContainerClass?: ClassValue;
  cancelButton?: ButtonProps;
  confirmButton?: ButtonProps;
  closeOnCancel?: boolean;
  closeOnConfirm?: boolean;
}

const handleButtonClick = async (onClose: () => void, onClick = () => {}) => {
  onClick();
  onClose();
};

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
  btnContainerClass,
  cancelButton,
  confirmButton,
  closeOnCancel = true,
  closeOnConfirm = true,
}: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isClosing, handleClose } = useClosableContainer(ref, onClose, {
    closeTimeout,
    closeOnEsc,
    closeOnClickOutside,
  });
  const showHeader = title || showCloseButton;
  const showFooter = cancelButton || confirmButton;

  return (
    <dialog
      className={clsx(
        "ui:modal ui:pt-12 ui:md:pt-0 ui:bg-black ui-bg-opacity-20 ui:h-svh ui:max-h-svh ui:dark:bg-white",
        {
          "ui:animate-fade-out": isClosing,
          "ui:animate-fade-in": !isClosing,
        }
      )}
      open
      autoFocus
    >
      <div
        className={clsx(
          "ui:modal-box ui:flex ui:flex-col ui:max-h-full ui:rounded-b-none ui:md:rounded-b-2xl ui:w-full ui:h-full ui:overflow-y-scroll ui:md:overflow-y-visible ui:md:h-fit",
          {
            "ui:animate-to-bottom ui:md:animate-fade-out": isClosing,
            "ui:animate-to-top ui:md:animate-fade-in": !isClosing,
          },

          className
        )}
        ref={ref}
      >
        {showHeader ? (
          <div
            className={clsx("ui:flex ui:w-full ui:items-center", {
              "ui:justify-between": title && showCloseButton,
              "ui:justify-end": !title && showCloseButton,
              "ui:justify-start": title && !showCloseButton,
            })}
          >
            {title &&
              (typeof title === "string" ? (
                <span className="ui-text-xl ui:font-semibold ui:w-full ui:text-center">
                  {title}
                </span>
              ) : (
                title
              ))}
            {showCloseButton ? (
              <IconButton
                icon={<AiOutlineClose className="ui-text-xl" />}
                onClick={handleClose}
              />
            ) : null}
          </div>
        ) : null}
        <div className="ui-h-full">{children}</div>
        {showFooter ? (
          <div
            className={clsx(
              "ui:w-full ui:grid",
              {
                "ui:grid ui:sm:grid-cols-2 ui:grid-cols-1 ui:gap-4":
                  cancelButton && confirmButton,
              },
              btnContainerClass
            )}
          >
            {cancelButton && (
              <Button
                {...cancelButton}
                className={clsx("ui:w-full", cancelButton.className)}
                onClick={(e) => {
                  if (cancelButton.onClick) {
                    if (closeOnCancel) {
                      handleButtonClick(handleClose, () =>
                        // @ts-ignore
                        cancelButton.onClick(e)
                      );
                    } else cancelButton.onClick(e);
                  }
                }}
              />
            )}
            {confirmButton && (
              <Button
                {...confirmButton}
                className={clsx("ui:w-full", confirmButton.className)}
                onClick={(e) => {
                  if (confirmButton.onClick) {
                    if (closeOnConfirm) {
                      handleButtonClick(handleClose, () =>
                        // @ts-ignore
                        confirmButton.onClick(e)
                      );
                    } else confirmButton.onClick(e);
                  }
                }}
              />
            )}
          </div>
        ) : null}
      </div>
    </dialog>
  );
};

export default Modal;
