import { combineReducers } from 'redux';
import meals from './meals_reducer';
import child from './child_reducer';
import selectMeals from './select_meals_reducer';

const entitiesReducer = combineReducers({
     meals,
     child,
     selectMeals,
});

export default entitiesReducer;