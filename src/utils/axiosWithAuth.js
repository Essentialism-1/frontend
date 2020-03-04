import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: 'https://essentialism-pg-be.herokuapp.com/api',
    headers: {
      Authorization: `${token}`,
    },
  });
};