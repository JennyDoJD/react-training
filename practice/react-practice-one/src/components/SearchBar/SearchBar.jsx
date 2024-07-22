import SearchIcon from '../Icons/SearchIcon';
import InputField from '../InputFields/InputField';

/* Import CSS */
import './searchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container input-form">
      <SearchIcon />
      <InputField type="search" placeholder="Search for food, coffee, etc.." />
    </div>
  );
};

export default SearchBar;
