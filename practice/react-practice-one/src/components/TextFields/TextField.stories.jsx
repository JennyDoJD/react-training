/* Import dependencies */
import { useState } from 'react';

/* Import components */
import TextField from './TextField';

const meta = {
  title: 'COMPONENTS/Common/TextField',
  tags: ['autodocs'],
};

export default meta;

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');
  const [error, setError] = useState(args.errorMessage || '');

  const handleBlur = () => {
    if (!value) {
      setError('This field is required.');
    } else {
      setError('');
    }
  };

  return (
    <TextField
      {...args}
      value={value}
      onBlur={handleBlur}
      onChange={(e) => setValue(e.target.value)}
      errorMessage={error}
    />
  );
};

export const Default = (args) => <Template {...args} />;
Default.args = {
  id: '1',
  type: 'text',
};
