import React from 'react';
import { Route } from '../index';
import { Nav1SiderPaths } from '../paths';

const Sider1 = React.lazy(() => import('../../pages/nav1/sub/sider1'));
const Sider2 = React.lazy(() => import('../../pages/nav1/sub/sider2'));
const Sider3 = React.lazy(() => import('../../pages/nav1/sub/sider3'));

const childRoutes: Route[] = [
  {
    path: Nav1SiderPaths.Sider1.path,
    element: <Sider1 />,
  },
  {
    path: Nav1SiderPaths.Sider2.path,
    element: <Sider2 />,
  },
  {
    path: Nav1SiderPaths.Sider3.path,
    element: <Sider3 />,
    // children: []
  },
];

export default childRoutes;
