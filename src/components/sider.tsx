import { Layout, Menu } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/themeContext';
import useCurrentNav from '../hooks/useCurrentNav';

const { Sider: AntdSider } = Layout;

export default function Sider() {
  const [siderCollapse, setSiderCollapse] = useState(localStorage.siderCollapse === '1');
  const { theme } = useContext(ThemeContext);
  const { currentSiderMenus, currentSiderNav, currentSiderOpenKey } = useCurrentNav();
  const [openKey, setOpenKey] = useState<string[]>([]);

  useEffect(() => {
    setOpenKey([currentSiderOpenKey]);
  }, [currentSiderOpenKey]);

  function handleSiderCollapse(value: boolean) {
    setSiderCollapse(value);
    localStorage.setItem('siderCollapse', value ? '1' : '0');
  }

  function onOpenChange(keys: string[]) {
    setOpenKey(keys);
  }

  return currentSiderMenus.length === 0 ? (
    <></>
  ) : (
    <AntdSider
      width={200}
      collapsedWidth={50}
      collapsible
      collapsed={siderCollapse}
      theme={theme}
      onCollapse={handleSiderCollapse}
      className="mt-0.5"
    >
      <Menu
        mode="inline"
        theme={theme}
        items={currentSiderMenus}
        openKeys={openKey}
        selectedKeys={[currentSiderNav]}
        onOpenChange={onOpenChange}
      />
    </AntdSider>
  );
}
