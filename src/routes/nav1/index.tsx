import React from 'react';
import { Route } from '../index';
import { Nav1Path } from '../paths';
import childRoutes from './children';

const Nav1 = React.lazy(() => import('../../pages/nav1'));

const nav1Routes: Route[] = [
  {
    path: Nav1Path.path,
    element: <Nav1 />,
    children: childRoutes,
  },
];

export default nav1Routes;
