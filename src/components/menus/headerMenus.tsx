import { Link } from 'react-router-dom';
import { Nav1Path, Nav2Path, Nav3Path } from '../../routes/paths';

interface HeaderMenu {
  key: string;
  label: JSX.Element;
}

export const headerMenus: HeaderMenu[] = [Nav1Path, Nav2Path, Nav3Path].map((item) => ({
  key: item.path,
  label: <Link to={item.path}>{item.name}</Link>,
}));
