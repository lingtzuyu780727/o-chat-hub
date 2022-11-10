import axios from 'axios';
import { logout } from './shared/utils/generalAuth';

// 建立後端API連線，不要衝3000
const apiAdress = process.env.REACT_APP_API_URL;
const apiClient = axios.create({
  baseURL: apiAdress,
  timeout: 5000,
});

// login request (這邊是公開route)
const login = async (data) => {
  try {
    // 往這邊打API及送資料
    return await apiClient.post('/login', data);
  } catch (exception) {
    // 除了200以外的
    return { error: true, exception };
  }
};

const signup = async (data) => {
  try {
    return await apiClient.post('/register', data);
  } catch (exception) {
    return { error: true, exception };
  }
};

// route after login
const sendFriendRequest = async (data) => {
  try {
    console.log('1');
    return await apiClient.post('/friend/invitation', data);
  } catch (exception) {
    checkStatusCode(exception);
    return { error: true, exception };
  }
};

const checkStatusCode = (exception) => {
  const statusCode = exception?.response?.status;
  if (statusCode === 401 || statusCode === 403) {
    // 401或是403的auth問題時做登出 logout()
    logout();
  }
};

export { login, signup, sendFriendRequest };
