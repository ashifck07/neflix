import axios from 'axios';
import {apiBaseUrl} from '../src/constant/Constant'
const instance = axios.create({
    baseURL: apiBaseUrl,
  });
  
  export default instance