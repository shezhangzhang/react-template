import { LoadingOutlined } from '@ant-design/icons';
import { theme as antTheme, ConfigProvider, Layout } from 'antd';
import { Suspense, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Sider from './components/sider';
import { ThemeContext } from './context/themeContext';

export const PrimaryColor = '#2b73af';

const { Content: AntContent } = Layout;

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
        token: {
          colorPrimary: PrimaryColor,
        },
      }}
    >
      <Layout className="h-screen">
        <Header />
        <Layout>
          <Sider />
          <Layout>
            <AntContent className="p-5 text-slate-800 dark:text-slate-200">
              <Suspense fallback={<LoadingOutlined className="text-3xl" />}>
                <Outlet />
              </Suspense>
            </AntContent>
          </Layout>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
