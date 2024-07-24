/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './confirmModal.css';

/* Import constants */
import { MODAL_TITLES } from '../../constants';

/* Import components */
import Text from '../Text/Text.jsx';
import Button from '../Buttons/Button.jsx';

const ConfirmModal = ({ id, title, onSubmit, onClose, isMutating, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" id={id}>
      <div className="modal-content">
        <Text className="modal-title">{title}</Text>
        <div className="modal-actions">
          <Button
            variant="secondary"
            label="Cancel"
            onClick={onClose}
            className="btn-confirm"
            disabled={isMutating}
          />
          <Button
            variant="primary"
            label="Yes"
            onClick={onSubmit}
            className="btn-confirm"
            disabled={isMutating}
          />
        </div>
      </div>
    </div>
  );
};

ConfirmModal.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  title: PropTypes.oneOf(Object.values(MODAL_TITLES)).isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isMutating: PropTypes.bool,
  isOpen: PropTypes.bool,
};

export default ConfirmModal;
