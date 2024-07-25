/* Import dependencies */
import { action } from '@storybook/addon-actions';

/* Import components */
import Pagination from './Pagination';

const meta = {
  title: 'COMPONENTS/Common/Pagination',
  tags: ['autodocs'],
  argTypes: {
    onPageChange: { action: 'page-changed' },
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'The current page',
    },
    totalRecords: {
      control: {
        type: 'number',
        min: 1,
      },
      description: 'The total number of records',
    },
    pageLimit: {
      control: {
        type: 'number',
        min: 1,
      },
      description: 'The number of records per page',
    },
  },
};

export default meta;

export const Default = (args) => <Pagination {...args} />;
Default.args = {
  currentPage: 2,
  totalRecords: 30,
  pageLimit: 10,
  onPageChange: action('page-changed'),
};
