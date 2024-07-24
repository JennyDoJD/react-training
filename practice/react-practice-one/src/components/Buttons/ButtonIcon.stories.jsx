import { action } from '@storybook/addon-actions';
import Button from './Button';
import { BUTTON_VARIANTS } from '../../constants';
import EditIcon from '../Icons/EditIcon';

const meta = {
  title: 'COMPONENTS/Common/ButtonIcons',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

export const ContainedButton = (args) => <Button {...args} />;
ContainedButton.args = {
  variant: BUTTON_VARIANTS.CONTAINED,
  icon: <EditIcon />,
  label: 'Edit',
  onClick: action('contained-button-clicked'),
};
