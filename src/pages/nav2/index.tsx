import { Divider } from 'antd';
import { Outlet } from 'react-router-dom';
import useNavigateToDefaultSider from '../../hooks/useNavigateToDefaultSider';
import { Nav2Path, Nav2SiderPaths } from '../../routes/paths';

export default function Nav2() {
  useNavigateToDefaultSider({
    nav: Nav2Path.path,
    sider: Nav2SiderPaths.Sider1.path,
  });
  return (
    <>
      <div className="text-2xl font-bold">nav2</div>
      <Divider></Divider>
      <Outlet />
    </>
  );
}
