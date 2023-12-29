import { Layout, Menu } from 'antd';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Logo from '../assets/react.svg?react';
import { ThemeContext } from '../context/themeContext';
import useCurrentNav from '../hooks/useCurrentNav';
import { HomePath } from '../routes/paths';
import { headerMenus } from './menus';

const { Header: AntdHeader } = Layout;

export default function Header() {
  const { darkMode, theme, toggleTheme } = useContext(ThemeContext);
  const { currentHeaderNav } = useCurrentNav();

  return (
    <AntdHeader
      className={`flex pr-6 pl-0 items-center justify-between ${
        darkMode ? '' : 'bg-white'
      } shadow-md`}
    >
      <div className="flex">
        <div className="w-52 flex items-center justify-center">
          <Link to={HomePath}>
            <Logo className="cursor-pointer" />
          </Link>
        </div>
        <Menu
          theme={theme}
          mode="horizontal"
          selectedKeys={[currentHeaderNav]}
          items={headerMenus}
        />
      </div>
      <div>
        <DarkModeSwitch
          checked={darkMode}
          onChange={() => {
            toggleTheme();
          }}
          size={24}
          moonColor="#eee"
          sunColor="#333"
        />
      </div>
    </AntdHeader>
  );
}
