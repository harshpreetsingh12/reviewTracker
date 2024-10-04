import { darkTheme, lightTheme } from '../../../constants/theme';
import { TOGGLE_THEME } from './themeActions';

const initialState = {
  theme: darkTheme, 
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      };
    default:
      return state;
  }
};
