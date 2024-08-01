/* Import dependencies */
import PropTypes from 'prop-types';

/* Import components */
import Button from '../Buttons/Button';

/* Import CSS */
import './pagination.css';

const Pagination = ({ currentPage, totalRecords, pageLimit, onPageChange }) => {
  const totalPages = Math.ceil(totalRecords / pageLimit);

  const handleClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const ellipsis = '...';

    if (totalPages <= 5) {
      for (let page = 1; page <= totalPages; page++) {
        pages.push(page);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, ellipsis, totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(
          1,
          ellipsis,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          ellipsis,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          ellipsis,
          totalPages
        );
      }
    }

    return pages;
  };

  const renderButtons = () => {
    const pages = getPageNumbers();

    return pages.map((page, index) => (
      <Button
        key={`page-${page}-${index}`}
        label={page.toString()}
        variant={page === currentPage ? 'secondary' : 'primary'}
        onClick={() => handleClick(page)}
        disabled={page === '...'}
      />
    ));
  };

  return (
    <div className="pagination-overlay">
      {currentPage > 1 && (
        <Button
          label="Previous"
          variant="primary"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        />
      )}
      {renderButtons()}
      {currentPage < totalPages && (
        <Button
          label="Next"
          variant="primary"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      )}
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
