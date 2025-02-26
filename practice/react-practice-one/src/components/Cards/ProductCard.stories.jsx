/* Import dependencies */
import { action } from '@storybook/addon-actions';

/* Import constants */
import { CARD_TYPES } from '../../constants';

/* Import components */
import ProductCard from './ProductCard';

/* Import CSS */
import './productCard.css';
import '../Text/text.css';

const meta = {
  title: 'COMPONENTS/Common/Cards',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'text' },
      description: 'Type of the card to render',
    },
    imageSrc: {
      control: { type: 'text' },
      description: 'Image source URL for card-product',
    },
    title: {
      control: { type: 'text' },
      description: 'Title text for card-product',
    },
    description: {
      control: { type: 'object' },
      description: 'Description object for card-product',
    },
    onEditClick: {
      action: 'edit-clicked',
      description: 'Callback function for edit button click',
    },
    onDeleteClick: {
      action: 'delete-clicked',
      description: 'Callback function for delete icon click',
    },
  },
};

export default meta;

export const ProductCards = (args) => <ProductCard {...args} />;
ProductCards.args = {
  type: CARD_TYPES.PRODUCT,
  imageSrc:
    'https://img.lovepik.com/free-png/20211210/lovepik-hot-noodles-with-sesame-paste-png-image_401479832_wh1200.png',
  title: 'Noodles',
  description: {
    price: '$ 79',
    quantity: '20 Bowls',
  },
  onEditClick: action('edit-clicked'),
  onDeleteClick: action('delete-clicked'),
};
