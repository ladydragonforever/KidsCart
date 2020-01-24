import axios from 'axios';

export const fetchSelectMeals = childId => {
   return axios.get(`/api/children/${childId}/matching-meals`)
};

export const deleteSelectMeal = (childId, mealId) => {
   return axios.delete(`/api/selected-meals/${childId}/${mealId}`)
};

export const addSelectMeal = (childId, mealId) => {
   return axios.put(`/api/selected-meals/${childId}/${mealId}`)
};

export const postSelectMeals = (childId, data) => {
   return axios.post(`/api/selected-meals/${childId}`, data)
};
