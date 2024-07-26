/* Import dependencies */
import { useState } from 'react';

/* Import constants */
import { MODAL_TITLES } from '../../constants';

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
  title: MODAL_TITLES.DELETE,
  isOpen: true,
};
