/* Import dependencies */
import { action } from '@storybook/addon-actions';

/* Import constants */
import { CARD_TYPES } from '../../constants';

/* Import components */
import Card from './Card';

/* Import CSS */
import './card.css';
import '../Text/text.css';

const meta = {
  title: 'COMPONENTS/Common/Card',
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
  },
};

export default meta;

export const CardProduct = (args) => <Card {...args} />;
CardProduct.args = {
  type: CARD_TYPES.PRODUCT,
  imageSrc:
    'https://img.lovepik.com/free-png/20211210/lovepik-hot-noodles-with-sesame-paste-png-image_401479832_wh1200.png',
  title: 'Noodles',
  description: {
    price: '$ 79',
    quantity: '20 Bowls',
  },
  onEditClick: action('edit-clicked'),
};
