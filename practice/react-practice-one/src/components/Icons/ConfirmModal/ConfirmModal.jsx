import Text from '../../Texts/Text';
import Button from '../../Buttons/Button';

/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './confirmModal.css';

/* Import constants */
import { MODAL_TITLES } from '../../../constants';

const ConfirmModal = ({
  id,
  onClose,
  onSubmit,
  isMutating,
  text = MODAL_TITLES.delete,
}) => {
  return (
    <div className="modal-container">
      <div className="modal-content" id={id}>
        <Text className="modal-title text-title text-title-md">{text}</Text>
        <div className="modal-button">
          <Button
            className="btn-confirm"
            variant="primary"
            label="Cancel"
            onClick={onClose}
          />
          <Button
            className="btn-confirm"
            variant="secondary"
            label="Yes"
            onClick={onSubmit}
            disabled={isMutating}
          />
        </div>
      </div>
    </div>
  );
};

ConfirmModal.propTypes = {
  id: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isMutating: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  text: PropTypes.oneOf(Object.values(MODAL_TITLES)).isRequired,
};

export default ConfirmModal;
