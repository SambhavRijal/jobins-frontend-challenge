import type { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

const baseAxios: AxiosInstance = axios.create()

baseAxios.defaults.baseURL = 'http://localhost:3002'
// baseAxios.defaults.baseURL = 'https://jobins-challenge-backend.onrender.com/'

// Add a request interceptor
baseAxios.interceptors.request.use(
  function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
    return config
  },
  function (error: AxiosError): Promise<AxiosError> {
    return Promise.reject(error)
  }
)

baseAxios.interceptors.response.use(
  function (response: AxiosResponse): any {
    if (response.status === 200) {
      // console.log('data loaded successfully');
    }

    if (response.status === 201) {
      // console.log('data created    successfully');
    }
    return response.data
  },
  function (error: AxiosError): Promise<any> {
    const errorVal = (error.response?.data as any)?.error

    if ([401].includes(error.response?.status ?? 0)) {
      // logoutUser()
    }
    return Promise.reject(errorVal)
  }
)

export default baseAxios
