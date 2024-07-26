/* Import constants */
import Card from './Card';

const meta = {
  title: 'COMPONENTS/Common/Card',
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select', options: ['card-add', 'card-product'] },
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
    onAddClick: {
      action: 'add-clicked',
      description: 'Callback function for add button click',
    },
  },
};

export default meta;

export const CardAdd = (args) => <Card {...args} />;
CardAdd.args = {
  type: 'card-add',
};

export const CardProduct = (args) => <Card {...args} />;
CardProduct.args = {
  type: 'card-product',
  imageSrc: 'food.jpg',
  title: 'Noodles',
  description: {
    price: '$79',
    quantity: '20 Bowls',
  },
};
