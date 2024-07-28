/* Import components */
import SearchBar from './SearchBar';

/* Import constants */
import { PLACEHOLDER_TEXT } from '../../constants';

const meta = {
  title: 'COMPONENTS/Common/SearchBar',
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
  },
};

export default meta;

export const Default = (args) => <SearchBar {...args} />;
Default.args = {
  placeholder: PLACEHOLDER_TEXT.DEFAULT,
};
