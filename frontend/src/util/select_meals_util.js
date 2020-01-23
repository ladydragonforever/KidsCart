import axios from 'axios';

export const fetchSelectMeals = childId => {
   return axios.get(`/api/children/${childId}/matching-meals`)
};

export const deleteSelectMeal = (mealId, childId) => {
   return axios.delete(`/api/selected-meals/${childId}/${mealId}`)
};

export const addSelectMeal = (mealId, childId, data) => {
   return axios.put(`/api/selected-meals/${childId}/${mealId}`, data)
};

export const postSelectMeals = (childId, data) => {
   return axios.post(`/api/selected-meals/${childId}`, data)
};
