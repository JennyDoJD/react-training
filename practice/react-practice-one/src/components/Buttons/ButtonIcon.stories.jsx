/* Import dependencies */
import { action } from '@storybook/addon-actions';

/* Import components */
import Button from './Button';
import EditIcon from '../Icons/EditIcon';

/* Import constants */
import { BUTTON_VARIANTS } from '../../constants';

const meta = {
  title: 'COMPONENTS/Common/ButtonIcons',
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Function will be called when the button is clicked',
    },
    variant: {
      description: 'This value specifies the variant of the Button',
    },
    label: {
      control: { type: 'text' },
      description: 'This value specifies the content of the Button',
    },
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
