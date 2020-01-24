import axios from 'axios';

export const fetchAUser = (userId) => {
    return axios.get(`/api/users/${userId}`);
    // return axios.get("/api/users/5e2a01e994da3c1b9f03f059")
};