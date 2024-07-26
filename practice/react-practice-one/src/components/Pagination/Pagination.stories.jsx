/* Import dependencies */
import { action } from '@storybook/addon-actions';
import { useState } from 'react';

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

const Template = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);

    action('page-changed')(page);
  };

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export const Default = (args) => <Template {...args} />;
Default.args = {
  totalRecords: 30,
  pageLimit: 10,
  currentPage: 1,
};

export const MultiplePages = (args) => <Template {...args} />;
MultiplePages.args = {
  totalRecords: 100,
  pageLimit: 10,
  currentPage: 1,
};

export const LastPage = (args) => <Template {...args} />;
LastPage.args = {
  totalRecords: 100,
  pageLimit: 10,
  currentPage: 10,
};
