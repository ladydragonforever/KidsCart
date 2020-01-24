import { combineReducers } from 'redux';
import meals from './meals_reducer';
import child from './child_reducer'
import user from './user_reducer'

const entitiesReducer = combineReducers({
     meals,
     child,
     user
});

export default entitiesReducer;