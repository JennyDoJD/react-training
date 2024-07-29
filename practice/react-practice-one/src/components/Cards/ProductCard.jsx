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
      {type === CARD_TYPES.ADD && (
        <a
          href="javascript:void(0)"
          className="card card-add-product"
          onClick={onAddClick}
        >
          <AddIcon />
          <Text className="text-secondary text-title-sm">{text}</Text>
        </a>
      )}
      {type === CARD_TYPES.PRODUCT && (
        <div className="card card-product">
          <div className="card-header">
            <div className="delete-product-icon" onClick={onDeleteClick}>
              <DeleteIcon />
            </div>
          </div>
          <figure className="card-image">
            <img src={imageSrc} alt="food-image" className="card-item" />
          </figure>
          <div className="card-text">
            <Text className="card-name text-primary text-title-xs">
              {title}
            </Text>
            <div className="main-desc card-desc">
              <Text className="text-tertiary text-desc">
                {description.price}
              </Text>
              <span className="circle">&#8729;</span>
              <Text className="text-tertiary text-desc">
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
