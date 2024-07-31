/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './productCard.css';
import '../Text/text.css';

/* Import components */
import AddIcon from '../Icons/AddIcon';
import DeleteIcon from '../Icons/DeleteIcon';
import Text from '../Text/Text';
import Button from '../Buttons/Button';
import EditIcon from '../Icons/EditIcon';

/* Import constants */
import { CARD_TYPES } from '../../constants';

const ProductCard = ({
  type,
  imageSrc,
  title,
  description = {},
  onEditClick,
  onAddClick,
  onDeleteClick,
  text,
}) => {
  return (
    <div className={`${type}`}>
      {type === CARD_TYPES.PRODUCT && (
        <div className="card primary-card">
          <div className="card-header">
            <div onClick={onDeleteClick}>
              <DeleteIcon />
            </div>
          </div>
          <figure className="card-image">
            <img src={imageSrc} alt="food-image" className="card-item" />
          </figure>
          <div className="card-text">
            <Text variant="primary" className="card-name  text-title-xs">
              {title}
            </Text>
            <div className="main-desc card-desc">
              <Text variant="tertiary" className="text-desc">
                {description.price}
              </Text>
              <span className="circle">&#8729;</span>
              <Text variant="tertiary" className="text-tertiary text-desc">
                {description.quantity}
              </Text>
            </div>
          </div>
          <div>
            <Button
              label="Edit"
              onClick={onEditClick}
              variant="contained"
              icon={<EditIcon />}
            />
          </div>
        </div>
      )}
      {type === CARD_TYPES.ADD && (
        <a className="card secondary-card" onClick={onAddClick}>
          <AddIcon />
          <Text variant="secondary" className="text-title-sm">
            {text}
          </Text>
        </a>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  type: PropTypes.oneOf(Object.values(CARD_TYPES)).isRequired,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.shape({
    price: PropTypes.string,
    quantity: PropTypes.string,
  }),
  onEditClick: PropTypes.func,
  onAddClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default ProductCard;
