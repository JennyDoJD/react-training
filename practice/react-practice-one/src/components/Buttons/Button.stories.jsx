/* Import dependencies */
import { action } from '@storybook/addon-actions';

/* Import components */
import Button from './Button';

/* Import constants */
import { BUTTON_VARIANTS } from '../../constants';

const meta = {
  title: 'COMPONENTS/Common/Buttons',
  tags: ['autodocs'],
  argTypes: {
    onClick: {
      action: 'clicked',
      description: 'Function will be called when the button is clicked',
    },
    variant: {
      control: { type: 'select' },
      options: [BUTTON_VARIANTS.PRIMARY, BUTTON_VARIANTS.SECONDARY],
      description: 'This value specifies the variant of the Button',
    },
    label: {
      control: { type: 'text' },
      description: 'This value specifies the content of the Button',
    },
  },
};

export default meta;

export const PrimaryButton = (args) => <Button {...args} />;
PrimaryButton.args = {
  variant: BUTTON_VARIANTS.PRIMARY,
  label: 'Cancel',
  onClick: action('primary-button-clicked'),
};

export const SecondaryButton = (args) => <Button {...args} />;
SecondaryButton.args = {
  variant: BUTTON_VARIANTS.SECONDARY,
  label: 'Save',
  onClick: action('secondary-button-clicked'),
};
