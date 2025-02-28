import clsx from "clsx";
import Button from "../Button";
import Modal from "../Modal";

export type ActionModalType = "success" | "warning" | "info" | "error";

export interface ActionModalProps {
  title: string;
  description: string;
  type: ActionModalType;
  onConfirm: () => void;
  modalTitle?: string;
  showClose?: boolean;
  closeModal?: () => void;
  confirmButtonText?: string;
  showCancelButton?: boolean;
  cancelButtonText?: string;
  isPending?: boolean;
  onCancel?: () => void;
}

/**
 * @param title - The title of the modal
 * @param description - The description of the modal
 * @param type - The type of the modal
 * @param onConfirm - The function to be called when the confirm button is clicked
 * @param modalTitle - The title of the modal
 * @param showClose - Whether to show the close button
 * @param closeModal - The function to be called when the close button is clicked
 * @param confirmButtonText - The text of the confirm button
 * @param showCancelButton - Whether to show the cancel button
 * @param cancelButtonText - The text of the cancel button
 * @param isPending - Whether the action is pending
 * @param onCancel - The function to be called when the cancel button is clicked
 * @returns The ActionModal component
 */

const ActionModal = ({
  title,
  description,
  type,
  onConfirm,
  modalTitle,
  showClose,
  closeModal = () => {},
  confirmButtonText = "Confirm",
  showCancelButton = true,
  cancelButtonText = "Cancel",
  isPending = false,
  onCancel,
}: ActionModalProps) => (
  <Modal title={modalTitle} onClose={closeModal} showCloseButton={showClose}>
    <div className="ui-w-full ui-flex ui-flex-col ui-gap-4">
      <span
        className={clsx("ui-text-lg ui-font-bold ui-text-center ui-mt-4", {
          "ui-text-warning": type === "warning",
          "ui-text-success": type === "success",
          "ui-text-error": type === "error",
        })}
      >
        {title}
      </span>
      <span className="ui-text-center ui-mb-4">{description}</span>
      <div className="ui-grid ui-grid-cols-2 ui-items-center ui-w-full ui-gap-4">
        <Button
          onClick={onConfirm}
          className="ui-w-full"
          variant={type}
          isLoading={isPending}
        >
          {confirmButtonText}
        </Button>
        {showCancelButton ? (
          <Button
            onClick={onCancel ?? closeModal}
            className="ui-w-full"
            disabled={isPending}
          >
            {cancelButtonText}
          </Button>
        ) : null}
      </div>
    </div>
  </Modal>
);

export default ActionModal;
