import React from 'react';
import { Route } from '../index';
import { Nav2Path } from '../paths';
import childRoutes from './children';

const Nav2 = React.lazy(() => import('../../pages/nav2'));

const nav2Routes: Route[] = [
  {
    path: Nav2Path.path,
    element: <Nav2 />,
    children: childRoutes,
  },
];

export default nav2Routes;
