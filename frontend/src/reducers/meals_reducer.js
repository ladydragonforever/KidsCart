import { RECEIVE_ALL_MEALS, RECEIVE_SEARCH_MEALS, RECEIVE_MEAL } from '../actions/meal_actions';

const MealsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_MEALS:
            let newState1 = Object.assign({}, state);
            action.meals.data.forEach(meal => newState1[meal._id] = meal)
            return newState1;
        case RECEIVE_SEARCH_MEALS:
            let newState2 = Object.assign({}, state);
            action.meals.data.forEach(meal => newState2[meal._id] = meal)
            return newState2;
        case RECEIVE_MEAL:
            let nextState = Object.assign({}, state);
            nextState[action.meal.data._id] = action.meal.data;
            return nextState;
        default:
            return state;
    }
}

export default MealsReducer;