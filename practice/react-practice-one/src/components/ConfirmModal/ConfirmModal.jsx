/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './confirmModal.css';

import { MODAL_TITLES } from '../../constants';

import Text from '../../Texts/Text';
import Button from '../../Buttons/Button';

const ConfirmModal = ({ text, onConfirm, onCancel, isVisible }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Text className="modal-title">{text}</Text>
        <div className="modal-actions">
          <Button
            variant="secondary"
            label="Cancel"
            onClick={onCancel}
            className="btn-confirm"
          />
          <Button
            variant="primary"
            label="Yes"
            onClick={onConfirm}
            className="btn-confirm"
          />
        </div>
      </div>
    </div>
  );
};

ConfirmModal.propTypes = {
  text: PropTypes.oneOf(Object.values(MODAL_TITLES)).isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
};

export default ConfirmModal;
