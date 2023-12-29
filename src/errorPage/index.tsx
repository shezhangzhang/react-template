import { ReactNode } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Layout>
        {error.status}: {error.statusText}
      </Layout>
    );
  } else if (error instanceof Error) {
    return <Layout>{error.message}</Layout>;
  } else {
    return <Layout></Layout>;
  }
}

function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="h-screen bg-slate-950 flex items-center flex-col text-white pt-60 px-10 leading-10">
      <div className="text-4xl">
        <span>😵</span>
        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-indigo-600 ml-1">
          页面错误！
        </span>
      </div>
      <div className="text-gray-400 my-6">找不到这个页面，请检查页面 URL</div>
      <div className="font-bold text-lg italic underline">{children}</div>
    </div>
  );
}
