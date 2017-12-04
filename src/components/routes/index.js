import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
import {userIsAuthenticatedRedirect, userIsNotAuthenticatedRedirect, userIsAdminRedirect} from '../auth/Helper'

import userActions from '../../actions/User'

import AdminRoute from './AdminRoute'
import DefaultRoute from './DefaultRoute'

import HomeComponent from '../../containers/Home'
import AdminComponent from '../../containers/Admin'
import LoginComponent from '../auth/Login'
import RegisterComponent from '../auth/Register'
import CollectionComponent from '../../containers/Collection'
import PageComponent from '../../containers/Page'
import ProductComponent from '../../containers/Product'
import BlogComponent from '../../containers/Blog'
import ArticleComponent from '../../containers/SingleArticle'


const Admin = userIsAuthenticatedRedirect(userIsAdminRedirect(AdminComponent))
const Login = userIsNotAuthenticatedRedirect(LoginComponent)
const Register = userIsNotAuthenticatedRedirect(RegisterComponent)

// eslint-disable-next-line
const Router = ({user, logout}) => (
  <div>
    <Switch>
      <DefaultRoute exact path="/" component={HomeComponent} />
      <DefaultRoute exact path="/collections/:id" component={CollectionComponent} />
      <DefaultRoute exact path="/pages/:id" component={PageComponent} />
      <DefaultRoute exact path="/products/:id" component={ProductComponent} />
      <DefaultRoute exact path="/blog/:id" component={BlogComponent} />
      <DefaultRoute exact path="/blog/:handle/:id" component={ArticleComponent} />
      <AdminRoute exact path="/admin" component={Admin} />
      <DefaultRoute path="/login" component={Login} />
      <DefaultRoute path="/register" component={Register} />
      <Route render={() => <p>Not Found</p>} />
    </Switch>
  </div>
)

const mapStateToProps = ({user}) => ({user})

export default withRouter(connect(mapStateToProps, userActions)(Router))

