import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/api', //backend URL
  headers: {
    'Content-type': 'application/json',
  },
});
