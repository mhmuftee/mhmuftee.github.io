import axios from "utils/axios"

const personAPI = "/users?page=2"

export const fetchAll = async () => {
  const url = `${personAPI}`
  const response = await axios.get(url)
  return response
}
