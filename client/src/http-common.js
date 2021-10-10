import axios from 'axios';

export default axios.create({
  //   baseURL: 'http://localhost:5000/api',
  //   baseURL: process.env.REACT_APP_API_URL,
  baseURL: 'https://u11-disc-golf-app2.herokuapp.com/api',
  //   baseURL: 'https://u11-disc-golf-app.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});
