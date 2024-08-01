/* Import dependencies */
import PropTypes from 'prop-types';

/* Import components */
import Button from '../Buttons/Button';

/* Import CSS */
import './pagination.css';

const Pagination = ({
  currentPage = 1,
  totalRecords = 0,
  pageLimit = 10,
  onPageChange,
}) => {
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

    return [
      currentPage > 1 && (
        <Button
          key="previous"
          label="Previous"
          variant="primary"
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        />
      ),
      ...pages.map((page, index) =>
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="pagination-ellipsis">
            {page}
          </span>
        ) : (
          <Button
            key={`page-${page}`}
            label={page.toString()}
            variant={page === currentPage ? 'secondary' : 'primary'}
            onClick={() => handleClick(page)}
            disabled={page === '...'}
          />
        )
      ),
      currentPage < totalPages && (
        <Button
          key="next"
          label="Next"
          variant="primary"
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      ),
    ];
  };

  if (totalPages <= 1) {
    return null;
  }

  return <div className="pagination-overlay">{renderButtons()}</div>;
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
