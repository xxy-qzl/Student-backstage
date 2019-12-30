import Axios from 'axios'

export const LoginUp = ( data ) => {
  return Axios.post( '/login-up', data )
}
