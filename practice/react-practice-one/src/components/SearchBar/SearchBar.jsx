import SearchIcon from '../Icons/SearchIcon';
import InputField from '../InputFields/InputField';

/* Import constants */
import { PLACEHOLDER_TEXT } from '../../constants';

/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './searchBar.css';

const SearchBar = ({ placeholder }) => {
  return (
    <div className="search-container input-form">
      <SearchIcon />
      <InputField type="search" placeholder={placeholder} />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.oneOf(Object.values(PLACEHOLDER_TEXT)),
};

export default SearchBar;
