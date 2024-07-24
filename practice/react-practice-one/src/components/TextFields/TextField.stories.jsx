import TextField from './TextField';

const meta = {
  title: 'COMPONENTS/Common/TextField',
  tags: ['autodocs'],
};

export default meta;

export const Default = (args) => <TextField {...args} />;
Default.args = {
  id: '1',
  type: 'text',
  value: 'Foods Management',
  onChange: () => {},
  onBlur: () => {},
};
