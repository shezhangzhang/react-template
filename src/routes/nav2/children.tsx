import React from 'react';
import { Route } from '../index';
import { Nav2SiderPaths } from '../paths';

const Sider1 = React.lazy(() => import('../../pages/nav2/sub/sider1'));

const childRoutes: Route[] = [
  {
    path: Nav2SiderPaths.Sider1.path,
    element: <Sider1 />,
  },
];

export default childRoutes;
