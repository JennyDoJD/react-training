import Button from './Button';
import { BUTTON_VARIANTS } from '../../constants';
import { action } from '@storybook/addon-actions';

const meta = {
  title: 'COMPONENTS/Common/Buttons',
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
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
