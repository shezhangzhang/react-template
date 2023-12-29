interface Path {
  name: string;
  path: string;
}

// type subPath = Record<string, Path>;

export const HomePath = '/';

export const Nav1Path: Path = {
  name: 'Nav 1',
  path: '/nav1',
};
export const Nav2Path: Path = {
  name: 'Nav 2',
  path: '/nav2',
};
export const Nav3Path: Path = {
  name: 'Nav 3',
  path: '/nav3',
};

export const Nav1SiderPaths = {
  Sider1: {
    name: 'Sider 1',
    path: `${Nav1Path.path}/sider1`,
  },
  Sider2: {
    name: 'Sider 2',
    path: `${Nav1Path.path}/sider2`,
  },
  Sider3: {
    name: 'Sider 3',
    path: `${Nav1Path.path}/sider3`,
  },
  Sider4: {
    name: 'Sider 3',
    path: `${Nav1Path.path}/sider4`,
  },
};

export const Nav2SiderPaths = {
  Sider1: {
    name: 'Sider 1',
    path: `${Nav2Path.path}/sider1`,
  },
};
