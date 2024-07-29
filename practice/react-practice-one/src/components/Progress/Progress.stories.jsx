/* Import components */
import Progress from './Progress';

/* Import constants */
import { PROGRESS_TEXT } from '../../constants';

const meta = {
  title: 'COMPONENTS/Common/Progress',
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: { type: 'text' },
      description: 'This value specifies the content of the Progress',
    },
  },
};

export default meta;

export const Default = (args) => <Progress {...args} />;
Default.args = {
  text: PROGRESS_TEXT.DEFAULT,
};
