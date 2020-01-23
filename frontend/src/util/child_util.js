import axios from 'axios';

export const createChild = (childData,userId) => {
    return axios.post(`/api/children/${userId}`, childData);
};