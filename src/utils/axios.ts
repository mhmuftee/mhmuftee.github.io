import axios from "axios"

const host = process.env.DATABASE_API

const username = String(process.env.USER_NAME)
const password = String(process.env.USER_PASS)

const instance = axios.create({
  baseURL: host,
  auth: {
    username,
    password,
  },
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
