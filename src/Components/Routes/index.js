import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
import {userIsAuthenticatedRedirect, userIsNotAuthenticatedRedirect, userIsAdminRedirect} from 'Components/Auth/Helper'

import userActions from 'Actions/User'

import AdminRoute from 'Components/Routes/AdminRoute'
import DefaultRoute from 'Components/Routes/DefaultRoute'

import HomeComponent from 'Containers/Home'
import AdminComponent from 'Containers/Admin'
import LoginComponent from 'Components/Auth/Login'
import RegisterComponent from 'Components/Auth/Register'

const Home = userIsAuthenticatedRedirect(HomeComponent)
const Admin = userIsAuthenticatedRedirect(userIsAdminRedirect(AdminComponent))
const Login = userIsNotAuthenticatedRedirect(LoginComponent)
const Register = userIsNotAuthenticatedRedirect(RegisterComponent)

// eslint-disable-next-line
const Router = ({user, logout}) => (
  <div>
    <Switch>
      <DefaultRoute exact path="/" component={Home} />
      <AdminRoute exact path="/admin" component={Admin} />
      <DefaultRoute path="/login" component={Login} />
      <DefaultRoute path="/register" component={Register} />
      <Route render={() => <p>Not Found</p>} />
    </Switch>
  </div>
)

const mapStateToProps = ({user}) => ({user})

export default withRouter(connect(mapStateToProps, userActions)(Router))

