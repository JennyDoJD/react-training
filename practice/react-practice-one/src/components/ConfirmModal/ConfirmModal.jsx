/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './confirmModal.css';

/* Import constants */
import { MODAL_TITLES } from '../../constants';

/* Import components */
import Text from '../Text/Text.jsx';
import Button from '../Buttons/Button.jsx';

const ConfirmModal = ({ title, onSubmit, onClose, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Text className="modal-title">{title}</Text>
        <div className="modal-actions">
          <Button
            variant="secondary"
            label="Cancel"
            onClick={onClose}
            className="btn-confirm"
          />
          <Button
            variant="primary"
            label="Yes"
            onClick={onSubmit}
            className="btn-confirm"
          />
        </div>
      </div>
    </div>
  );
};

ConfirmModal.propTypes = {
  label: PropTypes.string,
  title: PropTypes.oneOf(Object.values(MODAL_TITLES)).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

export default ConfirmModal;
