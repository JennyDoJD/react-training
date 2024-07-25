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

  const renderButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <Button
          key={i}
          label={i.toString()}
          variant={i === currentPage ? 'secondary' : 'primary'}
          onClick={() => handleClick(i)}
        />
      );
    }

    return buttons;
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
