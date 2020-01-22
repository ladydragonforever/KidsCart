import { getMeals, searchMeals } from "../util/meal_util";

export const RECEIVE_ALL_MEALS = "RECEIVE_ALL_MEALS";
export const RECEIVE_SEARCH_MEALS = "RECEIVE_SEARCH_MEALS";

export const receiveAllMeals = meals => ({
    type: RECEIVE_ALL_MEALS,
    meals
})

export const receiveSearchMeals = meals => ({
    type: RECEIVE_SEARCH_MEALS,
    meals
})

export const fetchMeals = () => dispatch => (
    getMeals()
        .then(meals => dispatch(receiveAllMeals(meals)))
        .catch(err => console.log(err))
);

export const fetchSearchMeals = keyword => dispatch => (
    searchMeals(keyword)
        .then(meals => dispatch(receiveSearchMeals(meals)))
        .catch(err => console.log(err))
);


// edit/update mael 
// delete meal 
//  creat meal -> later
//