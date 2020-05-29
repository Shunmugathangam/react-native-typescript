import { ThemeModelType } from '../models';

interface Action {
    type: string;
    payload: ThemeModelType;
}

// Initial State
const initialState: ThemeModelType = {
    themeType: 'lightTheme',
    color: 'blue',
};
  
// Reducers (Modifies The State And Returns A New State)
const themeReducer = (state: ThemeModelType = initialState, action: Action) => {
    switch (action.type) {
      // Change Theme
      case 'CHANGETHEME': {
        return {
          // State
          ...state,
          // Redux Store
          themeState: action.payload,
        }
      }
      // Default
      default: {
        return state;
      }
    }
  };
  
  // Exports
  export default themeReducer;