/* Import dependencies */
import PropTypes from 'prop-types';

/* Import components */
import Button from '../Buttons/Button';

/* Import CSS */
import './pagination.css';

const Pagination = ({ currentPage, totalRecords, pageLimit, onPageChange }) => {
  const totalPages = Math.ceil(totalRecords / pageLimit);

  const handleClick = (page) => {
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];

    for (let page = 1; page <= totalPages; page++) {
      pages.push(page);
    }

    return pages;
  };

  const renderButtons = () => {
    const pages = getPageNumbers();

    return pages.map((page) => (
      <Button
        key={`page-${page}`}
        label={page.toString()}
        variant={page === currentPage ? 'secondary' : 'primary'}
        onClick={() => handleClick(page)}
      />
    ));
  };

  return <div className="pagination-overlay">{renderButtons()}</div>;
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
