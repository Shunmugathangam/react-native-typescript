import { LoginModelType } from '../models';

interface Action {
    type: string;
    payload: LoginModelType;
}

// Initial State
const initialState: LoginModelType = {
    userName: '',
    token: '',
    loggedIn: false,
};
  
// Reducers (Modifies The State And Returns A New State)
const authReducer = (state: LoginModelType = initialState, action: Action) => {
    switch (action.type) {
      // Login
      case 'LOGIN': {
        return {
          // State
          ...state,
          // Redux Store
          loginState: action.payload,
        }
      }
      // Default
      default: {
        return state;
      }
    }
  };
  
  // Exports
  export default authReducer;