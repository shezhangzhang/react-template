import { Divider } from 'antd';
import { Outlet } from 'react-router-dom';
import useNavigateToDefaultSider from '../../hooks/useNavigateToDefaultSider';
import { Nav1Path, Nav1SiderPaths } from '../../routes/paths';

export default function Nav1() {
  useNavigateToDefaultSider({
    nav: Nav1Path.path,
    sider: Nav1SiderPaths.Sider1.path,
  });

  return (
    <>
      <div className="text-2xl font-bold">nav1</div>
      <Divider></Divider>
      <Outlet />
    </>
  );
}
