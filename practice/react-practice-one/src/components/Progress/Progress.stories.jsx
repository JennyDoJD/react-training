import Progress from './Progress';

import { PROGRESS_TEXT } from '../../constants';

const meta = {
  title: 'COMPONENTS/Common/Progress',
  tags: ['autodocs'],
};

export default meta;

export const Default = (args) => <Progress {...args} />;
Default.args = {
  text: PROGRESS_TEXT.default,
};
