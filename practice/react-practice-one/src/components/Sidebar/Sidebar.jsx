import HomeIcon from '../Icons/HomeIcon';
import DiscountIcon from '../Icons/DiscountIcon';
import DashboardIcon from '../Icons/DashboardIcon';
import MessageIcon from '../Icons/MessageIcon';
import NotificationIcon from '../Icons/MessageIcon';
import SettingIcon from '../Icons/SettingIcon';
import LogoutIcon from '../Icons/LogoutIcon';

const SideBar = () => {
  return (
    <aside className="sidebar-overlay">
      <div className="sidebar-header">
        <a href="index.html" className="sidebar-logo">
          <img src="./assets/images/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="sidebar-body">
        <ul className="nav-list">
          <li className="nav-item active">
            <a href="index.html" className="nav-link">
              <HomeIcon />
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0)" className="nav-link">
              <DiscountIcon />
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0)" className="nav-link">
              <DashboardIcon />
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0)" className="nav-link">
              <MessageIcon />
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0)" className="nav-link">
              <NotificationIcon />
            </a>
          </li>
          <li className="nav-item">
            <a href="javascript:void(0)" className="nav-link">
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

export default SideBar;
