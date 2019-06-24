import axios from 'axios';
import qs from 'qs';

const env = process.env.NODE_ENV;
const requestTimeout = 15000;

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: requestTimeout // 请求超时时间
});

//request拦截器
service.interceptors.request.use(
  config => {
    console.log("HHHH");
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    return config; //添加这一行
  },
  error => {
    console.log(error);
    Promise.reject(error);
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;

