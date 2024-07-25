/* Import dependencies */
import { useState } from 'react';

/* Import components */
import SideBar from './Sidebar';

const meta = {
  title: 'COMPONENTS/Common/SideBar',
  tags: ['autodocs'],
};

export default meta;

export const Default = (args) => {
  const [activeItem, setActiveItem] = useState('home');

  return (
    <SideBar {...args} activeItem={activeItem} setActiveItem={setActiveItem} />
  );
};

Default.args = {};
