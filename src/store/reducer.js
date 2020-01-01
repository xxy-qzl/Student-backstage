// 主仓库
const user = window.localStorage.getItem('user')
const initState = {
  // 用于存放当前用户的用户信息
  user: user ? JSON.parse( user ) : null
}

export default ( state = initState, action ) => {
  
  if( action.type === 'LOGIN' ){
    window.localStorage.setItem( 'user', JSON.stringify( action.user ) )
    return {
      ...state,
      user: action.user
    }
  }

  return state
}
