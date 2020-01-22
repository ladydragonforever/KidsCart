import * as SelectMealsApiUtil from "../util/select_meals_util";

export const RECEIVE_SELECT_MEALS = "RECEIVE_SELECT_MEALS";
export const REMOVE_SELECT_MEAL = "RECEIVE_SELECT_MEAL";

export const receiveSelectMeals = selectMeals => ({
   type: RECEIVE_SELECT_MEALS,
   selectMeals
})

export const removeSelectMeal = selectMealId => ({
   type: RECEIVE_SELECT_MEALS,
   selectMealId
})

export const fetchSelectMeals = childId => dispatch => (
   SelectMealsApiUtil.fetchSelectMeals(childId)
      .then(selectMeals => dispatch(receiveSelectMeals(selectMeals)))
      .catch(err => console.log(err))
);

export const deleteSelectMeal = selectMealId => dispatch => (
   SelectMealsApiUtil.deleteSelectMeals(selectMealId)
      .then(() => dispatch(removeSelectMeal(selectMealId)))
      .catch(err => console.log(err))
);

export const addSelectMeal = (mealId, childId) => dispatch => (
   SelectMealsApiUtil.addSelectMeal(mealId, childId)
      .then(meals => dispatch(receiveSelectMeals(meals)))
      .catch(err => console.log(err))
);