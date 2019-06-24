import fetch from '@/utils/fetch';

export function signUpApi(userName, phoneNumber, password) {
  return fetch({
    url: 'http://localhost:8080/user/register',
    method: 'POST',
    data: {
      userName,
      phoneNumber,
      password
    }
  })
}


export function getThoughts(userId) {
  return fetch({
    url: 'http://localhost:8080/thoughts/getByUserId',
    method: 'POST',
    data: {
      userId
    }
  })
}

