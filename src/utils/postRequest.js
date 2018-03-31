import axios from 'axios';
import { updateToken } from './token';

export const postRequest = (url, body) => {
  let token = JSON.parse(localStorage.getItem('token'));
  return axios.post(url, body, { headers: token })
    .then(res => updateToken(token, res))
    .catch(err => err);
}
