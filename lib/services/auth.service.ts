import axios from 'axios'

// Spring boot backend
const API_URL = 'http://localhost:8080/api/auth/'

const signupService = (username: string, password: string) => {
  return axios.post(API_URL + 'signup', {
    username,
    password,
  })
}

const loginService = (username: string, password: string) => {
  return axios
    .post(API_URL + 'login', {
      username,
      password,
    })
    .then((res) => {
      // postmeIfytoken will be set
      if (res.data.accessToken) {
        localStorage.setItem('postmeifyUser', res.data.accessToken)
      }
      return res.data
    })
}

const logoutService = () => {
  localStorage.removeItem('postmeifyUser')
}

export { signupService, loginService, logoutService }
