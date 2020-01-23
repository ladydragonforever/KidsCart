export const fetchSelecteMeals = childId => {
   return axios.get(`/api/children/${childId}/matching-meals`)
};

export const deleteSelectMeal = (mealId, childId) => {
   return axios.delete(`/api/selected-meals/${childId}/${mealId}`)
};

export const addSelectMeal = (mealId, childId) => {
   return axios.put(`/api/selected-meals/${childId}/${mealId}`, data)
};

export const postSelecteMeals = childId => {
   return axios.post(`/api/selected-meals/${childId}`, data)
};
