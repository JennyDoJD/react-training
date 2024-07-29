/* Import dependencies */
import { useState } from 'react';
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

const Template = (args) => {
  const [formData, setFormData] = useState(args.formData);
  const [errors, setErrors] = useState(args.errors);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    args.onChange(e);
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: 'This field is required.',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: '',
      }));
    }
  };

  return (
    <ProductForm
      {...args}
      formData={formData}
      errors={errors}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export const Default = (args) => <Template {...args} />;
Default.args = {
  headingPage: 'Create a new product',
  onConfirm: action('save-clicked'),
  onClose: action('cancel-clicked'),
  onChange: action('change'),
  formData: {
    name: 'Pizza',
    price: '23',
    imageUrl:
      'https://th.bing.com/th/id/OIP.XzUnt5Afjbz_9Bmkng2IMQHaEK?rs=1&pid=ImgDetMain.png',
    quantity: '22',
  },
  errors: {
    name: '',
    price: '',
    imageUrl: '',
    quantity: '',
  },
};
