/* Import dependencies */
import { useState } from 'react';

/* Import components */
import ConfirmModal from './ConfirmModal';

const meta = {
  title: 'COMPONENTS/Common/ConfirmModal',
  argTypes: {
    title: { control: 'text' },
    isOpen: {
      control: 'boolean',
      description: 'Determine whether the modal is open or not',
    },
    onConfirm: {
      description: 'Function to submit the form',
    },
    onClose: {
      description: 'Function to close the modal',
    },
  },
};

export default meta;

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleConfirm = () => {
    setIsOpen(true);
    args.onConfirm();
  };

  const handleCancel = () => {
    setIsOpen(false);
    args.onClose();
  };

  return (
    <>
      <ConfirmModal
        {...args}
        isOpen={isOpen}
        onConfirm={handleConfirm}
        onClose={handleCancel}
      />
    </>
  );
};

export const Default = (args) => <Template {...args} />;
Default.args = {
  title: 'Are you sure you want to delete this food?',
  isOpen: true,
};
