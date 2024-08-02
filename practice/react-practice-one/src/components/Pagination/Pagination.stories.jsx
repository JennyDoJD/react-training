/* Import dependencies */
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
    args.onPageChange(page);
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
  totalRecords: 100,
  pageLimit: 10,
  currentPage: 1,
};
