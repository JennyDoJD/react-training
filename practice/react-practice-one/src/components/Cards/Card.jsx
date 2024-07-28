/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './card.css';

/* Import components */
import AddIcon from '../Icons/AddIcon';
import DeleteIcon from '../Icons/DeleteIcon';
import EditIcon from '../Icons/DeleteIcon';

const Card = ({
  type,
  imageSrc,
  title,
  description,
  onEditClick,
  onAddClick,
}) => {
  return (
    <div className={`card ${type}`}>
      {type === 'card-add' && (
        <a href="/" className="card-add-product" onClick={onAddClick}>
          <AddIcon />
          Add new dish
        </a>
      )}
      {type === 'card-product' && (
        <>
          <div className="card-header">
            <div className="delete-product-icon">
              <DeleteIcon />
            </div>
          </div>
          <figure className="card-image">
            <img src={imageSrc} alt="food-image" className="card-item" />
          </figure>
          <div className="card-text">
            <p className="tertiary-title card-name">{title}</p>
            <div className="main-desc card-desc">
              <span>{description.price}</span>
              <span className="circle">&#8729;</span>
              <span>{description.quantity}</span>
            </div>
          </div>
          <div>
            <a href="/" className="btn btn-edit" onClick={onEditClick}>
              <EditIcon />
              Edit dish
            </a>
          </div>
        </>
      )}
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(['card-add', 'card-product']).isRequired,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.shape({
    price: PropTypes.string,
    quantity: PropTypes.string,
  }),
  onEditClick: PropTypes.func,
  onAddClick: PropTypes.func,
};

export default Card;
