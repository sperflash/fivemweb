import axios from 'axios';
// import store from '../store';
import qs from 'qs';

console.log("ggggggg"+process.env.BASE_API);
const env = process.env.NODE_ENV;
const requestTimeout = 15000;

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: requestTimeout // 请求超时时间
});

service.defaults.retry = 4;
service.defaults.retryDelay = 5000;
service.defaults.shouldRetry = (error) => true; //重试条件，默认只要是错误都需要重试

//request拦截器
service.interceptors.request.use(
  config => {
    // console.log("jjjj")
  //   config.headers.TenantId = 'a99157689bab4fca8c4a7bd3a096ee98';
  //   config.headers.productPin = '48fa8ba57c2e46c089c5d5c9b0b50620';
    // const token = localStorage.getItem('access_token') || '';
    // if (token !== '') {
    //   config.headers.Authorization = env === 'development' ? 'Basic dc43eb9902a2528f3de56fdd08c39e21cc55535c1f42098604f7a5ac900e1ece' : 'Basic ' + token; // 让每个请求携带自定义token 请根据实际情况自行修改
    // } else {
    //   config.headers.Authorization = 'Basic dc43eb9902a2528f3de56fdd08c39e21cc55535c1f42098604f7a5ac900e1ece';
    // }
    if (config.method === 'post') {
      config.data = qs.stringify(config.data);
    }
    config.url += '.do';
    return config;
  },
  // error => {
  //   // Do something with request error
  //   console.log(error); // for debug
  //   Promise.reject(error);
  // }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非1是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    if (res.code === 1) {
      return res;
    } else {
      return res;
      console.log(res.data);
      return Promise.reject('error');
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;


// // // import axios from 'axios';
// // // import {
// // //   Message,
// // //   MessageBox
// // // } from 'element-ui';

// // // import qs from 'qs';


// // // console.log(process.env.BASE_API);
// // // const requestTimeout = 15000;
// // // // 创建axios实例
// // // const service = axios.create({
// // //   baseURL: process.env.BASE_API, // api的base_url
// // //   timeout: requestTimeout, // 请求超时时间
// // //   withCredentials: true
// // // });

// // // // request拦截器
// // // service.interceptors.request.use(
// // //   config => {
// // //     // config.headers.ipAddress = window.sessionStorage.getItem('ip') || '';
// // //     // config.headers['KUMI-Caller-Service'] = 'KUMI_SAAS';
// // //     // if (config.method === 'post') {
// // //     //   config.data = qs.stringify(config.data);
// // //     // }
// // //     // config.url += '.do';
// // //     return config;
// // //   },
// // //   error => {
// // //     // Do something with request error
// // //     console.log(error); // for debug
// // //     Promise.reject(error);
// // //   }
// // // );

// // // // respone拦截器
// // // service.interceptors.response.use(
// // //   response => {
// // //     /**
// // //      * code为非1是抛错 可结合自己业务进行修改
// // //      */
// // //     const res = response.data;
// // //     if (res.code === 1) {
// // //       return res;
// // //     } else {
// // //       if (res.code !== 500) {
// // //         Message({
// // //           message: res.data,
// // //           duration: 5 * 1000
// // //         });
// // //       }
// // //       console.log(`错误码：${res.code}，错误信息：${res.data}`);
// // //       return Promise.reject('error');
// // //     }
// // //   },
// // //   error => {
// // //     // console.log('err' + error); // for debug
// // //     // const errorOuter = error.toString();
// // //     // console.log(errorOuter);
// // //     // if (errorOuter === `Error: timeout of ${requestTimeout}ms exceeded`) {
// // //     //   Message({
// // //     //     message: '连接超时，请检查网络连接'
// // //     //   });
// // //     // } else if (errorOuter === 'Error: Network Error') {
// // //     //   Message({
// // //     //     message: '网络异常，请检查网络连接'
// // //     //   });
// // //     // } else {
// // //     //   Message({
// // //     //     message: error.message,
// // //     //     duration: 5 * 1000
// // //     //   });
// // //     //   return Promise.reject(error);
// // //     // }
// // //   }
// // // );

// // // export default service;


// import axios from 'axios';
// // import store from '../store';
// import qs from 'qs';

// const env = process.env.NODE_ENV;
// const requestTimeout = 15000;

// // 创建axios实例

// const service = axios.create({
//   baseURL: process.env.BASE_API, // api的base_url
//   timeout: requestTimeout // 请求超时时间
// });

// service.defaults.retry = 4;
// service.defaults.retryDelay = 5000;
// service.defaults.shouldRetry = (error) => true; //重试条件，默认只要是错误都需要重试

// //request拦截器
// service.interceptors.request.use(
//   config => {
//     // config.headers.TenantId = localStorage.getItem('tenantId');
//     // config.headers.productPin = localStorage.getItem('productPin');
//     // config.headers['KUMI-Caller-Service'] = 'KUMI_SAAS';
//     const token = localStorage.getItem('access_token') || '';
//     if (token !== '') {
//       // config.headers.Authorization = env === 'development' ? 'Basic 9412218fc408a0fbe5712c736addfc1045a5392cb63a431ecf680b4afa9c4778' : 'Basic ' + token; // 让每个请求携带自定义token 请根据实际情况自行修改
//     } else {
//       //   config.headers.Authorization = 'Basic 9412218fc408a0fbe5712c736addfc1045a5392cb63a431ecf680b4afa9c4778';
//       //   config.headers.Authorization = 'Basic';
//     }
//     if (config.method === 'post') {
//       config.data = qs.stringify(config.data);
//     }
//     config.url += '.do';
//     return config;
//   },
//   error => {
//     // Do something with request error
//     console.log(error); // for debug
//     Promise.reject(error);
//   }
// );

// // respone拦截器
// service.interceptors.response.use(
//   response => {
//     /**
//      * code为非1是抛错 可结合自己业务进行修改
//      */
//     const res = response.data;
//     if (res.code === 1) {
//       return res;
//     } else {
//       console.log(res.data);
//       return Promise.reject('error');
//     }
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// export default service;



// import axios from 'axios';
// // import store from '../store';
// import qs from 'qs';

// const env = process.env.NODE_ENV;
// const requestTimeout = 15000;

// // 创建axios实例

// const service = axios.create({
//   baseURL: process.env.BASE_API, // api的base_url
//   timeout: requestTimeout // 请求超时时间
// });

// service.defaults.retry = 4;
// service.defaults.retryDelay = 5000;
// service.defaults.shouldRetry = (error) => true; //重试条件，默认只要是错误都需要重试

// //request拦截器
// service.interceptors.request.use(
//   config => {
//     config.headers.TenantId = localStorage.getItem('tenantId');
//     config.headers.productPin = localStorage.getItem('productPin');
//     config.headers['KUMI-Caller-Service'] = 'KUMI_SAAS';
//     const token = localStorage.getItem('access_token') || '';
//     if (token !== '') {
//       config.headers.Authorization = env === 'development' ? 'Basic 9412218fc408a0fbe5712c736addfc1045a5392cb63a431ecf680b4afa9c4778' : 'Basic ' + token; // 让每个请求携带自定义token 请根据实际情况自行修改
//     } else {
//       //   config.headers.Authorization = 'Basic 9412218fc408a0fbe5712c736addfc1045a5392cb63a431ecf680b4afa9c4778';
//       //   config.headers.Authorization = 'Basic';
//     }
//     if (config.method === 'post') {
//       config.data = qs.stringify(config.data);
//     }
//     config.url += '.do';
//     return config;
//   },
//   error => {
//     // Do something with request error
//     console.log(error); // for debug
//     Promise.reject(error);
//   }
// );

// // respone拦截器
// service.interceptors.response.use(
//   response => {
//     /**
//      * code为非1是抛错 可结合自己业务进行修改
//      */
//     const res = response.data;
//     if (res.code === 1) {
//       return res;
//     } else {
//       console.log(res.data);
//       return Promise.reject('error');
//     }
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// export default service;
