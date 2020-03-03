import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // baseURL subject to change until I get backend data/endpoints
  return axios.create({
    baseURL: 'https://essentialism-pg-be.herokuapp.com/api',
    headers: {
      Authorization: `${token}`,
    },
  });
};