import { colors } from '@constants/colors';

export interface ISelect {
  label: string;
  value: string;
}

export type TTheme = 'dark' | 'light';

export interface IUseTheme {
  colors: typeof colors,
  theme: string;
  changeTheme: () => void;
}
