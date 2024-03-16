import axiosClient from "./axiosClient"


const authApi = {
  signup: params => axiosClient.post('api/auth/register', params),
  login: params => axiosClient.post('api/auth/login', params),
  verifyToken: () => axiosClient.post('api/auth/verify-token', params),

}

export default authApi