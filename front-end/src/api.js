import axios from 'axios';

// 建立後端API連線，不要衝3000
const apiAdress = process.env.REACT_APP_API_URL;
const apiClient = axios.create({
  baseURL: apiAdress,
  timeout: 5000,
});

// login request
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

export { login, signup };