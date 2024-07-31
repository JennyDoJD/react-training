/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './select.css';

const Select = ({ options, onChange, icon, text }) => {
  return (
    <div className="select-overlay">
      {icon && icon}
      <select className="sort-container" onChange={onChange}>
        <option value="default">{text}</option>
        {options.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.items.map((item) => (
              <option
                key={item.key}
                value={item.value}
                data-sort-by={item.sortBy}
                data-order={item.order}
              >
                {item.label}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          sortBy: PropTypes.string,
          order: PropTypes.string,
          key: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func,
  icon: PropTypes.node,
  text: PropTypes.string,
};

export default Select;
