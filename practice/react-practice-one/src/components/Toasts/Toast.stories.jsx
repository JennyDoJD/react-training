/* Import components */
import Toast from './Toast';

/* Import constants */
import { MESSAGES, TOAST_TYPES } from '../../constants';

const meta = {
  title: 'COMPONENTS/Common/Toasts',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: Object.values(TOAST_TYPES),
      description: 'This value specifies the type of the Toast',
    },
    message: {
      control: { type: 'text' },
      description: 'This value specifies the message of the Toast',
    },
  },
};

export default meta;

export const SuccessToast = (args) => <Toast {...args} />;
SuccessToast.args = {
  type: TOAST_TYPES.SUCCESS,
  message: MESSAGES.ADD_PRODUCT_SUCCESS_MESSAGE,
};

export const ErrorToast = (args) => <Toast {...args} />;
ErrorToast.args = {
  type: TOAST_TYPES.ERROR,
  message: MESSAGES.ADD_PRODUCT_FAILED_MESSAGE,
};
