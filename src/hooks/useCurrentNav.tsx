import { SubMenuType } from 'antd/es/menu/hooks/useItems';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { headerMenus, MenuItem, siderMenus } from '../components/menus';

export default function useCurrentNav(): {
  currentHeaderNav: string;
  currentSiderNav: string;
  currentSiderOpenKey: string;
  currentSiderMenus: MenuItem[];
} {
  const [currentHeaderNav, setCurrentHeaderNav] = useState<string>('');
  const [currentSiderNav, setCurrentSiderNav] = useState<string>('');
  const [currentSiderOpenKey, setCurrentSiderOpenKey] = useState<string>('');
  const [currentSiderMenus, setCurrentSiderMenus] = useState<MenuItem[]>([]);
  const pathname = useLocation().pathname;

  useEffect(() => {
    resetStates();

    headerMenus.forEach((menuItem) => {
      if (pathname.startsWith(menuItem.key)) {
        setCurrentHeaderNav(menuItem.key);
      }
    });

    const keys = Object.keys(siderMenus) as (keyof typeof siderMenus)[];
    keys.forEach((key) => {
      const sider = siderMenus[key];
      if (pathname.startsWith(sider.key)) {
        setCurrentSiderMenus(sider.menus);
        setCurrentSiderNav(pathname);

        // find the current open sider key
        (sider.menus as SubMenuType[]).forEach((item) => {
          if (item.children) {
            item.children.forEach((child) => {
              if (pathname === child?.key) {
                setCurrentSiderOpenKey(item.key);
              }
            });
          }
        });
      }
    });
  }, [pathname]);

  function resetStates() {
    setCurrentHeaderNav('');
    setCurrentSiderNav('');
    setCurrentSiderOpenKey('');
    setCurrentSiderMenus([]);
  }

  return { currentHeaderNav, currentSiderNav, currentSiderOpenKey, currentSiderMenus };
}
