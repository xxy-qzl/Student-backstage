import React from 'react'
import { HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import BaseLayout from './layouts/BaseLayout'
import Login from './page/Login'
import Register from './page/Register'

import './base.scss'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={ Login }></Route>
        <Route path="/register" component={ Register }></Route>
        <Route path="/" component={ BaseLayout }></Route>
      </Switch>
    </Router>
  )
}

export default App
