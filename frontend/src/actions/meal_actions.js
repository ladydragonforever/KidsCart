import { getMeals, searchMeals, fetchMeal } from "../util/meal_util";

export const RECEIVE_ALL_MEALS = "RECEIVE_ALL_MEALS";
export const RECEIVE_SEARCH_MEALS = "RECEIVE_SEARCH_MEALS";
export const RECEIVE_MEAL = "RECEIVE_MEAL";

export const receiveAllMeals = meals => ({
    type: RECEIVE_ALL_MEALS,
    meals
})

export const receiveMeal = meal => ({
   type: RECEIVE_MEAL,
   meal
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

export const fetchSingleMeal = childId => dispatch => (
   fetchMeal(childId)
      .then(meal => dispatch(receiveMeal(meal)))
      .catch(err => console.log(err))
);


