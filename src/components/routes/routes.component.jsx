import React from 'react'
import SignUp from '../../pages/sign-up/sign-up.component'
import SignIn from '../../pages/sign-in/sign-in.component'
import Home from '../../pages/home/home.component'
import ForgotPassword from '../../pages/forgot-password/forgot-password.component'
import { Switch, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
      <Route path="/forgotpassword" component={ForgotPassword} />
    </Switch>
  )
}

export default Routes
