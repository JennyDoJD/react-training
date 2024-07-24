import Text from './Text';
import { COMPONENT_SIZES, TEXT_VARIANTS } from '../../constants';

const meta = {
  title: 'COMPONENTS/Common/Text',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: Object.values(TEXT_VARIANTS),
    },
    size: {
      control: {
        type: 'select',
      },
      options: Object.values(COMPONENT_SIZES),
    },
    children: { control: 'text' },
  },
};

export default meta;

export const Default = (args) => <Text {...args} />;
Default.args = {
  children: '',
  variant: TEXT_VARIANTS.DEFAULT,
  size: COMPONENT_SIZES.DEFAULT,
};
