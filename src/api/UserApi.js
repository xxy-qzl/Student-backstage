import Axios from 'axios'

// 注册接口
export const LoginUp = ( data ) => {
  return Axios.post( '/login-up', data )
}

// 登录接口
export const LoginIn = ( data ) => {
  return Axios.post( '/login-in', data )
}
