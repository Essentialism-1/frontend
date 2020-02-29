import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  // baseURL subject to change until I get backend data
  return axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
      Authorization: `${token}`,
    },
  });
};