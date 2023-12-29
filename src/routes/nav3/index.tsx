import React from 'react';
import { Route } from '../index';
import { Nav3Path } from '../paths';

const Nav3 = React.lazy(() => import('../../pages/nav3'));

const nav3Routes: Route[] = [
  {
    path: Nav3Path.path,
    element: <Nav3 />,
    // children: []
  },
];

export default nav3Routes;
