import { ItemType } from 'antd/es/menu/hooks/useItems';
import { headerMenus } from './headerMenus';
import { nav1SiderMenus } from './nav1SiderMenus';
import { nav2SiderMenus } from './nav2SiderMenus';

type MenuItem = ItemType;

interface Menus {
  key: string;
  path: string;
  menus: MenuItem[];
}

export type { MenuItem, Menus };
export { headerMenus };
export const siderMenus = { nav1SiderMenus, nav2SiderMenus };
