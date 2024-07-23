import { MODAL_TITLES } from '../../../constants';
import ConfirmModal from './ConfirmModal';

const meta = {
  title: 'COMPONENTS/Common/ConfirmModal',
  tags: ['autodocs'],
};

export default meta;

export const Default = (args) => <ConfirmModal {...args} />;
Default.args = {
  text: MODAL_TITLES.delete,
};
