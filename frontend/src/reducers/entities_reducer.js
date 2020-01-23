import { combineReducers } from 'redux';
import meals from './meals_reducer';
import child from './child_reducer'

const entitiesReducer = combineReducers({
     meals,
     child
});

export default entitiesReducer;