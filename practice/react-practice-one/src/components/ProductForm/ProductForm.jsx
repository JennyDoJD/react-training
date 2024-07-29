/* Import dependencies */
import PropTypes from 'prop-types';
import { useState } from 'react';

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
  onBlur,
  formData,
  errors,
  headingPage,
  id,
}) => {
  const [formErrors, setFormErrors] = useState(errors);

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [field]: 'This field is required.',
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [field]: '',
      }));
    }

    onBlur && onBlur(field);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <Text variant="primary" className="text-title-xl form-heading">
          {headingPage}
        </Text>

        <form className="form-control" id={id}>
          <div className="form-group">
            <Text variant="primary" className="text-title-xs">
              Name
            </Text>
            <TextField
              type="text"
              value={formData.name}
              onChange={onChange}
              errorMessage={formErrors.name}
              onBlur={() => handleBlur('name')}
            />
          </div>

          <div className="form-group">
            <Text variant="primary" className="text-title-xs">
              Price
            </Text>
            <TextField
              type="number"
              value={formData.price}
              onChange={onChange}
              errorMessage={formErrors.price}
              onBlur={() => handleBlur('price')}
            />
          </div>

          <div className="form-group">
            <Text variant="primary" className="text-title-xs">
              Image URL
            </Text>
            <TextField
              type="text"
              value={formData.imageUrl}
              onChange={onChange}
              errorMessage={formErrors.imageUrl}
              onBlur={() => handleBlur('imageUrl')}
            />
          </div>

          <div className="form-group">
            <Text variant="primary" className="text-title-xs">
              Quantity
            </Text>
            <TextField
              type="number"
              value={formData.quantity}
              onChange={onChange}
              errorMessage={formErrors.quantity}
              onBlur={() => handleBlur('quantity')}
              className="input-short"
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
  id: PropTypes.string.isRequired,
  headingPage: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
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
