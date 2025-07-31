import type { Meta, StoryObj } from "@storybook/react-vite";
import { useToggle } from "../../hooks";
import Button from "../Button";
import Modal, { ModalProps } from ".";

const meta: Meta = {
  title: "Components/Modal",
  component: Modal,
  args: {
    title: "Modal title",
    showCloseButton: true,
    closeOnClickOutside: true,
    closeOnEsc: true,
    closeTimeout: 280,
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

const ModalStory = (args: ModalProps) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  return (
    <>
      <Button onClick={() => toggleIsOpen()}>Open Modal</Button>
      {isOpen ? (
        <Modal {...args} onClose={() => toggleIsOpen()}>
          <div className="ui:w-full ui:py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aliquid iste odio neque dignissimos. Id corporis dicta laborum, modi
            eligendi voluptates, distinctio autem ullam ut est asperiores
            voluptatem suscipit odio?
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalStory {...args} />,
};

const ModalWithButtonsStory = (args: ModalProps) => {
  const [isOpen, toggleIsOpen] = useToggle(false);
  return (
    <>
      <Button onClick={() => toggleIsOpen()}>Open Modal</Button>
      {isOpen ? (
        <Modal
          {...args}
          onClose={() => toggleIsOpen()}
          cancelButton={{
            children: "Cancel",
            variant: "neutral",
            onClick: () => console.log("Cancel"),
          }}
          confirmButton={{
            children: "Confirm",
            variant: "primary",
            onClick: () => console.log("Confirm"),
          }}
        >
          <div className="ui:w-full ui:py-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            aliquid iste odio neque dignissimos. Id corporis dicta laborum, modi
            eligendi voluptates, distinctio autem ullam ut est asperiores
            voluptatem suscipit odio?
          </div>
        </Modal>
      ) : null}
    </>
  );
};
export const WithButtons: Story = {
  render: (args) => <ModalWithButtonsStory {...args} />,
  args: {
    closeOnCancel: true,
    closeOnConfirm: true,
  },
};
