import React, { useEffect, useState, useContext } from 'react';
import { colors } from '@constants/colors';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const Theme = React.createContext({ theme: 'dark', changeTheme: () => { } });

export const withTheme = (Component: React.ComponentType<any>) => (): JSX.Element => {
  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'dark');
  const changeTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <Theme.Provider value={{ theme, changeTheme }}>
      <Component />
    </Theme.Provider>
  );
};

export const useTheme = () => ({
  colors,
  ...useContext(Theme),
});
