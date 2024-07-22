import Toast from './Toast';

const meta = {
  title: 'COMPONENTS/Common/Toasts',
  tags: ['autodocs'],
  args: {
    message: '',
  },
};

export default meta;

export const SuccessToast = () => <Toast type="success" />;

export const ErrorToast = () => <Toast type="error" />;
