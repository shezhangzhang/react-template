import { ControlOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Menus } from '.';
import { Nav2Path, Nav2SiderPaths } from '../../routes/paths';

export const nav2SiderMenus: Menus = {
  key: Nav2Path.path,
  path: Nav2Path.path,
  menus: [
    {
      key: '1',
      label: 'subNav 1',
      icon: <ControlOutlined />,
      children: [
        {
          key: Nav2SiderPaths.Sider1.path,
          label: <Link to={Nav2SiderPaths.Sider1.path}>{Nav2SiderPaths.Sider1.name}</Link>,
        },
      ],
    },
  ],
};
