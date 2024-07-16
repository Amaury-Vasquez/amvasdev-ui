import type { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";
import Modal, { ModalProps } from ".";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      {isOpen ? (
        <Modal {...args} onClose={() => setIsOpen(false)}>
          Hello, World!
        </Modal>
      ) : null}
    </>
  );
};

export const Default: Story = {
  render: (args) => <ModalStory {...args} />,
};
