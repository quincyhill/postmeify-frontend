import { AxiosRequestHeaders } from 'axios'

export default function authHeader(): AxiosRequestHeaders {
  // Could be empty
  const user = JSON.parse(localStorage.getItem('postmeifyUser') || '')

  if (user && user.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken }
  } else {
    return {}
  }
}
