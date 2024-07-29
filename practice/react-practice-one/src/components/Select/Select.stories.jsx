/* Import components */
import Select from './Select';

import SelectIcon from '../Icons/SelectIcon';

const meta = {
  title: 'COMPONENTS/Common/Select',
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'This value specifies the content of the Select',
    },
  },
};

export default meta;

const options = [
  {
    label: 'Name',
    items: [
      {
        value: 'name-asc',
        label: 'A to Z',
        sortBy: 'name',
        order: 'asc',
        key: 'name-asc',
      },
      {
        value: 'name-desc',
        label: 'Z to A',
        sortBy: 'name',
        order: 'desc',
        key: 'name-desc',
      },
    ],
  },
  {
    label: 'Price',
    items: [
      {
        value: 'price-asc',
        label: 'Low to high',
        sortBy: 'price',
        order: 'asc',
        key: 'price-asc',
      },
      {
        value: 'price-desc',
        label: 'High to low',
        sortBy: 'price',
        order: 'desc',
        key: 'price-desc',
      },
    ],
  },
];

export const Default = (args) => <Select {...args} />;
Default.args = {
  icon: <SelectIcon />,
  options: options,
  text: 'Sort by',
};
