import Toast from './Toast';

const meta = {
  title: 'COMPONENTS/Common/Toasts',
  tags: ['autodocs'],
};

export default meta;

export const SuccessToast = (args) => <Toast {...args} />;
SuccessToast.args = {
  type: 'success',
  message: 'Succeed to add the product!',
};

export const ErrorToast = (args) => <Toast {...args} />;
ErrorToast.args = {
  type: 'error',
  message: 'Failed to add the product!',
};
