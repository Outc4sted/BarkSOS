import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import translation from './translation';


const rootReducer = combineReducers({
  routing,
  translation
});


export default rootReducer;
