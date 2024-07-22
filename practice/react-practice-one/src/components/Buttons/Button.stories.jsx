import Button from './Button';
import { BUTTON_VARIANTS } from '../../constants';

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
