import { RECEIVE_ALL_MEALS, RECEIVE_SEARCH_MEALS } from '../actions/meal_actions';

const MealsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_MEALS:
            return action.meals.data;
        case RECEIVE_SEARCH_MEALS:
            return action.meals.data;
        default:
            return state;
    }
}

export default MealsReducer;