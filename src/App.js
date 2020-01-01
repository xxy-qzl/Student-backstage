import React from 'react'
import { HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import BaseLayout from './layouts/BaseLayout'
import Login from './page/Login'
import Register from './page/Register'
import PrivateRoute from './utils/PrivateRoute'

import './base.scss'

const App = () => {
  return (
    <Provider store={ store }>
      <Router>
        <Switch>
          <Route path="/login" component={ Login }></Route>
          <Route path="/register" component={ Register }></Route>
          <PrivateRoute path="/" component={ BaseLayout }></PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
