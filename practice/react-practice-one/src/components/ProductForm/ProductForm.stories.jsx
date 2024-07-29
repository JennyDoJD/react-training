/* Import dependencies */
import { action } from '@storybook/addon-actions';

/* Import components */
import ProductForm from './ProductForm';

const meta = {
  title: 'COMPONENTS/Common/ProductForm',
  tags: ['autodocs'],
  argTypes: {
    onConfirm: {
      action: 'save-clicked',
      description: 'Function will be called when the save button is clicked',
    },
    onClose: {
      action: 'cancel-clicked',
      description: 'Function will be called when the cancel button is clicked',
    },
    onChange: {
      action: 'change',
      description: 'Function will be called when the form input value changes',
    },
    formData: {
      control: 'object',
      description: 'This value specifies the form data',
    },
    errors: {
      control: 'object',
      description: 'This value specifies the form errors',
    },
    headingPage: {
      type: 'text',
    },
  },
};

export default meta;

export const Default = (args) => <ProductForm {...args} />;
Default.args = {
  headingPage: 'Create a new product',
  onConfirm: action('save-clicked'),
  onClose: action('cancel-clicked'),
  onChange: action('change'),
  formData: {
    name: '',
    price: '',
    imageUrl: '',
    quantity: '',
  },
  errors: {
    name: '',
    price: '',
    imageUrl: '',
    quantity: '',
  },
};

export const FormWithErrors = (args) => <ProductForm {...args} />;
FormWithErrors.args = {
  headingPage: 'Create a new product',
  onConfirm: action('save-clicked'),
  onClose: action('cancel-clicked'),
  onChange: action('change'),
  formData: {
    name: '',
    price: '',
    imageUrl: '',
    quantity: '',
  },
  errors: {
    name: 'Name is required',
    price: 'Price must be a number',
    imageUrl: 'Image URL is required',
    quantity: 'Quantity must be a number',
  },
};
