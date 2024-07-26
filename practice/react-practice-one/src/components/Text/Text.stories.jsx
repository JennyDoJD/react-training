/* Import components */
import Text from './Text';

/* Import constants */
import {
  COMPONENT_SIZES,
  COMPONENT_TEXTS,
  TEXT_VARIANTS,
} from '../../constants';

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
      options: Object.values(['sm', 'md', 'lg', 'xl']),
      description: 'This value specifies the size of the Text',
    },
    type: {
      control: {
        type: 'select',
      },
      options: Object.values(COMPONENT_TEXTS),
      description: 'This value specifies the type of the Text',
    },
    children: { control: 'text' },
  },
};

export default meta;

export const Default = (args) => <Text {...args} />;
Default.args = {
  children: 'Foods Management',
  variant: TEXT_VARIANTS.SECONDARY,
  size: COMPONENT_SIZES.SMALL,
  type: COMPONENT_TEXTS.TITLE,
};
