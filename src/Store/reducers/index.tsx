// Imports: Dependencies
import { combineReducers, Reducer } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import themeReducer from './themeReducer';

// Redux: Root Reducer
const rootReducer: Reducer<any, any> = combineReducers({
  authReducer: authReducer,
  themeReducer: themeReducer
});

// Exports
export default rootReducer;