import { combineReducers } from 'redux';
import meals from './meals_reducer';
import child from './child_reducer';
import selectMeals from './select_meals_reducer';
import user from './user_reducer'

const entitiesReducer = combineReducers({
     meals,
     child,
     selectMeals,
     user,
});

export default entitiesReducer;