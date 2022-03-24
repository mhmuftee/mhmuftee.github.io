import axios from "axios"

const host = process.env.DATABASE_API

const instance = axios.create({
  baseURL: host,
})

/**

function addAuthHeader(config) {
  const token = window.localStorage.authToken
  config.headers.Authorization = `Bearer ${token}`
  return config
}

instance.interceptors.request.use(addAuthHeader)

*/

export default instance
