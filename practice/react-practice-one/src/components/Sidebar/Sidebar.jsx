/* Import dependencies */
import PropTypes from 'prop-types';

/* Import components */
import LogoIcon from '../Icons/LogoIcon';
import HomeIcon from '../Icons/HomeIcon';
import DiscountIcon from '../Icons/DiscountIcon';
import DashboardIcon from '../Icons/DashboardIcon';
import MessageIcon from '../Icons/MessageIcon';
import NotificationIcon from '../Icons/NotificationIcon';
import SettingIcon from '../Icons/SettingIcon';
import LogoutIcon from '../Icons/LogoutIcon';

/* Import CSS */
import './sideBar.css';

const SideBar = ({ onClick, activeItem, setActiveItem }) => {
  const menuItems = [
    { name: 'home', icon: HomeIcon },
    { name: 'dashboard', icon: DashboardIcon },
    { name: 'discount', icon: DiscountIcon },
    { name: 'message', icon: MessageIcon },
    { name: 'notification', icon: NotificationIcon },
    { name: 'setting', icon: SettingIcon },
  ];

  const handleClick = (item) => {
    setActiveItem(item);

    if (onClick) {
      onClick(item);
    }
  };

  return (
    <aside className="sidebar-overlay">
      <div className="sidebar-header">
        <a className="sidebar-logo">
          <LogoIcon />
        </a>
      </div>
      <div className="sidebar-body">
        <ul className="nav-list">
          {menuItems.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className={`nav-item ${activeItem === name ? 'active' : ''}`}
            >
              <a className="nav-link" onClick={() => handleClick(name)}>
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-footer">
        <a className="sidebar-footer-link">
          <LogoutIcon />
        </a>
      </div>
    </aside>
  );
};

SideBar.propTypes = {
  onClick: PropTypes.func,
  activeItem: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
};

export default SideBar;
