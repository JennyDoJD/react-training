import Toast from './Toast';
import { MESSAGES } from '../constants/message';

const meta = {
  title: 'COMPONENTS/Common/Toasts',
  tags: ['autodocs'],
};

export default meta;

export const SuccessToast = (args) => <Toast {...args} />;
SuccessToast.args = {
  name: 'success',
  message: MESSAGES.ADD_PRODUCT_SUCCESS_MESSAGE,
};

export const ErrorToast = (args) => <Toast {...args} />;
ErrorToast.args = {
  name: 'error',
  message: MESSAGES.ADD_PRODUCT_FAILED_MESSAGE,
};
