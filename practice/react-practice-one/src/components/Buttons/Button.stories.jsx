import Button from './Button';
import { BUTTON_VARIANTS } from '../../constants';
import EditIcon from '../Icons/EditIcon';
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
  variant: BUTTON_VARIANTS.primary,
  label: 'Cancel',
  onClick: action('primary-button-clicked'),
};

export const SecondaryButton = (args) => <Button {...args} />;
SecondaryButton.args = {
  variant: BUTTON_VARIANTS.secondary,
  label: 'Save',
  onClick: action('secondary-button-clicked'),
};

export const ContainedButton = (args) => <Button {...args} />;
ContainedButton.args = {
  variant: BUTTON_VARIANTS.contained,
  icon: <EditIcon />,
  label: 'Edit',
  onClick: action('contained-button-clicked'),
};
