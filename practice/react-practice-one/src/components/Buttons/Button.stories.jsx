import Button from './Button';
import { BUTTON_VARIANTS } from '../../constants';
import EditIcon from '../Icons/EditIcon';

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
};

export const SecondaryButton = (args) => <Button {...args} />;
SecondaryButton.args = {
  variant: BUTTON_VARIANTS.secondary,
  label: 'Save',
};

export const ContainedButton = (args) => <Button {...args} />;
ContainedButton.args = {
  variant: BUTTON_VARIANTS.contained,
  icon: <EditIcon />,
  label: 'Edit',
};
