import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  nav: string;
  sider: string;
}

export default function useNavigateToDefaultSider(props: Props) {
  const { nav, sider } = props;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (nav === location.pathname) {
      navigate(sider, { replace: true });
    }
  }, [sider, location.pathname, nav, navigate]);
}
