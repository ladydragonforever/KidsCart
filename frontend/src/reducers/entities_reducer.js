import { combineReducers } from 'redux';
import meals from './meals_reducer';

const entitiesReducer = combineReducers({
     meals
});

export default entitiesReducer;