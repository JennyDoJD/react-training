/* Import components */
import Toast from './Toast';

/* Import constants */
import { MESSAGES, STATUS } from '../../constants';

const meta = {
  title: 'COMPONENTS/Common/Toasts',
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select' },
      options: Object.values(STATUS),
      description: 'This value specifies the status of the Toast',
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
  name: STATUS.SUCCESS,
  message: MESSAGES.ADD_PRODUCT_SUCCESS_MESSAGE,
};

export const ErrorToast = (args) => <Toast {...args} />;
ErrorToast.args = {
  name: STATUS.ERROR,
  message: MESSAGES.ADD_PRODUCT_FAILED_MESSAGE,
};
