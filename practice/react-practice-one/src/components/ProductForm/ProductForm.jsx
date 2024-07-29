/* Import dependencies */
import PropTypes from 'prop-types';

/* Import components */
import Text from '../Text/Text';
import Button from '../Buttons/Button';
import TextField from '../TextFields/TextField';

/* Import CSS */
import './productForm.css';
import '../Text/text.css';

const ProductForm = ({
  onConfirm,
  onClose,
  onChange,
  formData,
  errors,
  headingPage,
}) => {
  return (
    <div className="form-overlay">
      <div className="form-container">
        <Text variant="title" className="text-title-default form-heading ">
          {headingPage}
        </Text>

        <form className="form-control">
          <div className="form-group">
            <Text variant="title" className="text-title-sm">
              Name
            </Text>
            <TextField
              id="name"
              type="text"
              value={formData.name}
              onChange={onChange}
              errorMessage={errors.name}
            />
          </div>

          <div className="form-group">
            <Text variant="title" className="text-title-sm">
              Price
            </Text>
            <TextField
              id="price"
              type="number"
              value={formData.price}
              onChange={onChange}
              errorMessage={errors.price}
            />
          </div>

          <div className="form-group">
            <Text variant="title" className="text-title-sm">
              Image URL
            </Text>
            <TextField
              id="image-url"
              type="text"
              value={formData.imageUrl}
              onChange={onChange}
              errorMessage={errors.imageUrl}
            />
          </div>

          <div className="form-group form-field-quantity">
            <Text variant="title" className="text-title-sm">
              Quantity
            </Text>
            <TextField
              id="quantity"
              type="number"
              value={formData.quantity}
              onChange={onChange}
              errorMessage={errors.quantity}
            />
          </div>

          <div className="form-button">
            <Button
              variant="primary"
              label="Cancel"
              onClick={onClose}
              className="btn-confirm"
            />
            <Button
              variant="secondary"
              label="Save"
              onClick={onConfirm}
              className="btn-confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

ProductForm.propTypes = {
  headingPage: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    imageUrl: PropTypes.string,
    quantity: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    imageUrl: PropTypes.string,
    quantity: PropTypes.string,
  }),
};

export default ProductForm;
