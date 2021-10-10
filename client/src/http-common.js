import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:5000/api',
  //   baseURL: 'https://u11-disc-golf-app.herokuapp.com/api',
  headers: {
    'Content-type': 'application/json',
  },
});
