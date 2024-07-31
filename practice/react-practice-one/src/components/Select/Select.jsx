/* Import dependencies */
import PropTypes from 'prop-types';
import { useState } from 'react';

/* Import CSS */
import './select.css';

const Select = ({ options, onChange, icon, text }) => {
  const [selectedValue, setSelectedValue] = useState('default');

  const handleChange = (event) => {
    const value = event.target.value;

    setSelectedValue(value);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="select-overlay">
      {icon && icon}
      <select
        className="select-container"
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="default">{text}</option>
        {options.map((group) => (
          <optgroup key={group.label} label={group.label}>
            {group.items.map((item) => (
              <option key={item.key} value={item.value}>
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
