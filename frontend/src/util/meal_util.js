import axios from 'axios';

export const getMeals = () => {
    return axios.get('/api/meals')
};

export const searchMeals = keyword => {
    return axios.get(`/api/meals/search?keyword=${keyword}`);
};

// export const searchMeals = query => {
//     return axios.get('/api/meals/search', {params: query});
// };

export const fetchMeal = childId => {
   return axios.get(`/api/meals/${childId}`)
};
export const getSingleMeal = id => {
    return axios.get(`/api/meals/${id}`);
};
