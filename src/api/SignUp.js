import fetch from '@/utils/fetch';



// const BASE_API = process.env.BASE_API
// import fetch from '@/utils/request';

// export function listAgentOrder(page, pageSize, start, end, tenantId) {
//   return fetch({
//     method: 'post',
//     url: '/sys/general/order2nd/listAgentOrder',
//     data: {
//       page,
//       pageSize,
//       start,
//       end,
//       tenantId
//     }
//   })
// }

// export function SignUpApi(userName, phoneNumber, password) {
//   return fetch({
//     method: 'POST',
//     url : 'http://localhost:8080/user/register',
//     data: {
//       userName,
//       phoneNumber,
//       password,
//     }
//   })
// }

export function signUpApi(userName, phoneNumber, password) {
  let url = 'http://localhost:8080/user/register'
  let method = 'POST'
  let data = {
    userName,
    phoneNumber,
    password
  }
  return fetch(url, method, data)
}

// export function signUpApi(userName, phoneNumber, password) {
//   let url = '/user/register'
//   let method = 'POST'
//   let data = {
//     userName,
//     phoneNumber,
//     password
//   }
//   return fetch(url, method, data)
// }

// export function signUpApi(userName, phoneNumber, password) {
//   return fetch({
//     url: 'http://localhost:8080/user/register',
//     method: 'GET',
//     data: {
//       userName,
//       phoneNumber,
//       password
//     }
//   })
// }


// export function putThoughts(userId, thoughtsId, thoughtsContent) {
//   let url = 'http://localhost:8080/thoughts/create'
//   let method = 'POST'
//   let data = {
//     userId,
//     thoughtsId,
//     thoughtsContent
//   }
//   return fetch(url, method, data)
// }
