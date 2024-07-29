/* Import components */
import SearchBar from './SearchBar';

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
  placeholder: 'Search for food, coffee, etc...',
};
