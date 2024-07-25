/* Import components */
import Text from './Text';

/* Import constants */
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
      description: 'This value specifies the variant of the Text',
    },
    size: {
      control: {
        type: 'select',
      },
      options: Object.values(COMPONENT_SIZES),
      description: 'This value specifies the size of the Text',
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
