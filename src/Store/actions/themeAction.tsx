import { ThemeModelType } from '../models';

// Ligh Theme
export const changeTheme = (theme: ThemeModelType) => ({
    type: 'CHANGETHEME',
    payload: theme,
});