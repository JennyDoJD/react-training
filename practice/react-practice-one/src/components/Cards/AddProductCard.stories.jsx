/* Import dependencies */
import { action } from '@storybook/addon-actions';

/* Import constants */
import { CARD_TYPES } from '../../constants';

/* Import components */
import ProductCard from './ProductCard';

const meta = {
  title: 'COMPONENTS/Common/Cards',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'text' },
      description: 'Type of the card to render',
    },
    onAddClick: {
      action: 'add-clicked',
      description: 'Callback function for add button click',
    },
  },
};

export default meta;

export const CardAddProduct = (args) => <ProductCard {...args} />;
CardAddProduct.args = {
  type: CARD_TYPES.ADD,
  text: 'Add New Dish',
  onAddClick: action('add-clicked'),
};
