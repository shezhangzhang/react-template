import { HeatMapOutlined, PieChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Menus } from '.';
import { Nav1Path, Nav1SiderPaths } from '../../routes/paths';

export const nav1SiderMenus: Menus = {
  key: Nav1Path.path,
  path: Nav1Path.path,
  menus: [
    {
      key: '1',
      label: 'subNav 1',
      icon: <HeatMapOutlined />,
      children: [
        {
          key: Nav1SiderPaths.Sider1.path,
          label: <Link to={Nav1SiderPaths.Sider1.path}>{Nav1SiderPaths.Sider1.name}</Link>,
          //children: []
        },
        {
          key: Nav1SiderPaths.Sider2.path,
          label: <Link to={Nav1SiderPaths.Sider2.path}>{Nav1SiderPaths.Sider2.name}</Link>,
        },
      ],
    },
    {
      key: '2',
      label: 'subNav 2',
      icon: <PieChartOutlined />,
      children: [
        {
          key: Nav1SiderPaths.Sider4.path,
          label: 'useless 4',
        },
        {
          key: Nav1SiderPaths.Sider3.path,
          label: <Link to={Nav1SiderPaths.Sider3.path}>{Nav1SiderPaths.Sider3.name}</Link>,
        },
      ],
    },
  ],
};
