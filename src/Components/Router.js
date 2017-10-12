import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom'
import userActions from '../Actions/User'
import {
  userIsAuthenticatedRedirect, userIsNotAuthenticatedRedirect, userIsAdminRedirect
} from 'Components/Auth/Helper'

import Header from './Layout/Header'
import Footer from './Layout/Footer'

import HomeComponent from '../Containers/Home'
import AdminComponent from '../Containers/Admin'
import LoginComponent from './Auth/Login'
import RegisterComponent from './Auth/Register'

const Home = userIsAuthenticatedRedirect(HomeComponent)
const Admin = userIsAuthenticatedRedirect(userIsAdminRedirect(AdminComponent))
const Login = userIsNotAuthenticatedRedirect(LoginComponent)
const Register = userIsNotAuthenticatedRedirect(RegisterComponent)


const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <div className="defaultLayout">
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    )} 
    />
  )
}

const AdminLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      <div className="adminLayout">
        <Component {...props} />
      </div>
    )} 
    />
  )
}
// eslint-disable-next-line
const Router = ({ user, logout }) => (
  <div>
    <Switch>
      <DefaultLayout exact path="/" component={Home} />
      <AdminLayout exact path="/admin" component={Admin} />
      <DefaultLayout exact path="/login" component={Login} />
      <DefaultLayout exact path="/register" component={Register} />
      <Route render={() => (<p>Not Found</p>)} />
    </Switch>
  </div>
)

const mapStateToProps = ({ user }) => ({ user })

export default withRouter(connect(mapStateToProps, userActions)(Router))

