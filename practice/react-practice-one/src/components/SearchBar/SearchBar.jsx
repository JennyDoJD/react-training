/* Import components */
import SearchIcon from '../Icons/SearchIcon';
import TextField from '../TextFields/TextField';

/* Import dependencies */
import PropTypes from 'prop-types';

/* Import CSS */
import './searchBar.css';

const SearchBar = ({ placeholder = '' }) => {
  return (
    <div className="search-overlay">
      <SearchIcon />
      <TextField type="search" placeholder={placeholder} />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
