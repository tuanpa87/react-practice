import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://basic-burger.firebaseio.com/'
})

export default instance;