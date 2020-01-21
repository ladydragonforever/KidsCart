import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import meals from './meals_reducer';

const RootReducer = combineReducers({
    errors,
    session,
    meals
});

export default RootReducer;