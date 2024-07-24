/* Import dependencies */
import { useState } from 'react';

/* Import constants */
import { MODAL_TITLES } from '../../constants';

/* Import components */
import ConfirmModal from './ConfirmModal';

const meta = {
  title: 'COMPONENTS/Common/ConfirmModal',
  tags: ['autodocs'],
  argTypes: {
    id: { control: 'text' },
    title: { control: 'text' },
    isMutating: {
      control: 'boolean',
      description: 'Determine whether the form is mutating or not',
    },
    isOpen: {
      control: 'boolean',
      description: 'Determine whether the modal is open or not',
    },
    onSubmit: {
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
    args.onSubmit();
  };

  const handleCancel = () => {
    setIsOpen(false);
    args.onClose();
  };

  return (
    <>
      <ConfirmModal
        {...args}
        onSubmit={handleConfirm}
        onClose={handleCancel}
        isOpen={isOpen}
      />
    </>
  );
};

export const Default = (args) => <Template {...args} />;
Default.args = {
  id: '1',
  title: MODAL_TITLES.delete,
  isOpen: true,
  isMutating: false,
};
