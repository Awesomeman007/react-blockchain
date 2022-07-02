import Axios, { AxiosRequestConfig, AxiosRequestHeaders, HeadersDefaults } from "axios"
import { getCookie } from "./core/contexts/cookieHandler"

interface AxiosHeaderInterface extends HeadersDefaults {
    Authorization: string
}

export const client = Axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})
client.interceptors.request.use(
  (req: AxiosRequestConfig<AxiosHeaderInterface>) => {
    if (!req.headers || !req.headers.Authorization) {
      const token = getCookie("token")
      if (!req.headers) req.headers = {} as AxiosRequestHeaders
      req.headers.Authorization = `Bearer ${token}`
      return req
    } else return req
  },
  (error) => Promise.reject(error)
)