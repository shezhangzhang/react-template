import { createContext, useState } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

interface ThemeContextType {
  darkMode: boolean;
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: true,
  theme: Theme.Dark,
  toggleTheme: () => {},
});

const ThemeProvider = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}): JSX.Element => {
  const [darkMode, setDarkMode] = useState(
    localStorage.theme ? localStorage.theme === Theme.Dark : true,
  );
  const theme = darkMode ? Theme.Dark : Theme.Light;

  const root = window.document.documentElement;
  root.classList.add(theme);
  localStorage.setItem('theme', theme);

  function toggleTheme() {
    setDarkMode(!darkMode);
    root.classList.remove(Theme.Dark, Theme.Light);
  }

  return (
    <ThemeContext.Provider value={{ darkMode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
