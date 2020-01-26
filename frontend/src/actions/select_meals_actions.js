import * as SelectMealsApiUtil from "../util/select_meals_util";

export const RECEIVE_SELECT_MEALS = "RECEIVE_SELECT_MEALS";
export const RECEIVE_SELECT_MEAL = "RECEIVE_SELECT_MEAL";
export const REMOVE_SELECT_MEAL = "REMOVE_SELECT_MEAL";
export const POST_SELECT_MEALS = "POST_SELECT_MEALS";
export const ADD_SELECT_MEAL = "ADD_SELECT_MEAL";

export const receiveSelectMeals = selectMeals => ({
   type: RECEIVE_SELECT_MEALS,
   selectMeals
});

export const receiveSelectMeal = selectMeal => ({
   type: RECEIVE_SELECT_MEALS,
   selectMeal
});

// export const postSelectMeals = postMeals => ({
//    type: POST_SELECT_MEALS,
//    postMeals
// })

export const removeSelectMeal = (childId, mealId) => ({
   type: REMOVE_SELECT_MEAL,
   mealId,
   childId
});

export const addSelectMeal = (childId, mealId, title, category, photoUrl, ingredients, cookingInstruction, nutritionFacts) => ({
   type: ADD_SELECT_MEAL,
   childId,
   mealId,
   title,
   category,
   photoUrl,
   ingredients,
   cookingInstruction,
   nutritionFacts,
});

export const fetchSelectMeals = childId => dispatch => (
   SelectMealsApiUtil.fetchSelectMeals(childId)
      .then(selectMeals => dispatch(receiveSelectMeals(selectMeals)))
      .catch(err => console.log(err))
);

// export const deleteSelectMeal = (childId, mealId)  => dispatch => (
//    SelectMealsApiUtil.deleteSelectMeal(mealId, childId)
//       .then(() => dispatch(removeSelectMeal(mealId, childId)))
//       .catch(err => console.log(err))
// );

// export const addSelectMeal = (childId, mealId) => dispatch => (
//    SelectMealsApiUtil.addSelectMeal(mealId, childId)
//       .then(meals => dispatch(receiveSelectMeal(meals)))
//       .catch(err => console.log(err))
// );

export const createSelectMeals = (childId, data) => dispatch => {
   // console.log(data, "test action");
   return(
   SelectMealsApiUtil.createSelectMeals(childId, data)
      // .then(postMeals => dispatch(postSelectMeals(postMeals)))
      // .catch(err => console.log(err))
)};

window.fetchSelectMeals = fetchSelectMeals
window.createSelectMeals = createSelectMeals;