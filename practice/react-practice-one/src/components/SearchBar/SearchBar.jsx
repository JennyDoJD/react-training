import SearchIcon from '../Icons/SearchIcon';
import TextField from '../TextFields/TextField';

/* Import constants */
import { PLACEHOLDER_TEXT } from '../../constants';

/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './searchBar.css';

const SearchBar = ({ placeholder = PLACEHOLDER_TEXT.DEFAULT }) => {
  return (
    <div className="search-overlay input-form">
      <SearchIcon />
      <TextField type="search" placeholder={placeholder} />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.oneOf(Object.values(PLACEHOLDER_TEXT)),
};

export default SearchBar;
