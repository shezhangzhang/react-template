import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';
import { ErrorPage } from '../errorPage';
import nav1Routes from './nav1';
import nav2Routes from './nav2';
import nav3Routes from './nav3';
import { HomePath, Nav1SiderPaths } from './paths';

export type PathRecord = Record<string, string>;

export interface Route {
  path: string;
  element: React.ReactNode;
  children?: Route[];
}

const homeRoute: Route = {
  path: HomePath,
  element: <Navigate to={Nav1SiderPaths.Sider1.path} replace={true} />,
};
const routes = [homeRoute, ...nav1Routes, ...nav2Routes, ...nav3Routes];

const router = createBrowserRouter([
  {
    path: HomePath,
    element: <App />,
    errorElement: <ErrorPage />,
    children: routes,
  },
]);

export default router;
