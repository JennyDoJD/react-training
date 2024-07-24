import React, { useState } from 'react';
import { MODAL_TITLES } from '../../../constants';
import ConfirmModal from './ConfirmModal';

const meta = {
  title: 'COMPONENTS/Common/ConfirmModal',
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    isVisible: { control: 'boolean' },
  },
};

export default meta;

const Template = (args) => {
  const [isVisible, setIsVisible] = useState(args.isVisible);

  const handleConfirm = () => {
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  return (
    <div>
      <button onClick={() => setIsVisible(true)}>Show Modal</button>
      <ConfirmModal
        {...args}
        isVisible={isVisible}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
};

export const Default = (args) => <ConfirmModal {...args} />;
Default.args = {
  text: MODAL_TITLES.delete,
  isVisible: true,
};
