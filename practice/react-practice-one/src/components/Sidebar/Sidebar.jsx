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
  const handleClick = (item) => {
    setActiveItem(item);
    if (onClick) onClick(item);
  };

  return (
    <aside className="sidebar-overlay">
      <div className="sidebar-header">
        <a href="javascript:void(0)" className="sidebar-logo">
          <LogoIcon />
        </a>
      </div>
      <div className="sidebar-body">
        <ul className="nav-list">
          <li className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}>
            <a
              href="javascript:void(0)"
              className="nav-link"
              onClick={() => handleClick('home')}
            >
              <HomeIcon />
            </a>
          </li>
          <li
            className={`nav-item ${activeItem === 'dashboard' ? 'active' : ''}`}
          >
            <a
              href="javascript:void(0)"
              className="nav-link"
              onClick={() => handleClick('dashboard')}
            >
              <DashboardIcon />
            </a>
          </li>
          <li
            className={`nav-item ${activeItem === 'discount' ? 'active' : ''}`}
          >
            <a
              href="javascript:void(0)"
              className="nav-link"
              onClick={() => handleClick('discount')}
            >
              <DiscountIcon />
            </a>
          </li>
          <li
            className={`nav-item ${activeItem === 'message' ? 'active' : ''}`}
          >
            <a
              href="javascript:void(0)"
              className="nav-link"
              onClick={() => handleClick('message')}
            >
              <MessageIcon />
            </a>
          </li>
          <li
            className={`nav-item ${activeItem === 'notification' ? 'active' : ''}`}
          >
            <a
              href="javascript:void(0)"
              className="nav-link"
              onClick={() => handleClick('notification')}
            >
              <NotificationIcon />
            </a>
          </li>
          <li
            className={`nav-item ${activeItem === 'setting' ? 'active' : ''}`}
          >
            <a
              href="javascript:void(0)"
              className="nav-link"
              onClick={() => handleClick('setting')}
            >
              <SettingIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className="sidebar-footer">
        <a href="javascript:void(0)" className="sidebar-footer-link">
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
