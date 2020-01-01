import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
    {...rest}
    render={ (props) => {
      if (user) {
        return <Component {...props}></Component>
      }else {
        return <Redirect to={{
          pathname: '/login',
          // 记住之前要去到的页面的地址
          state: {
            redirect: props.match.url
          }
        }}></Redirect>
      }
    } }
    >
    </Route>
  )
}

export default connect(
  (state) => ({
    user: state.user
  })
)(PrivateRoute)
