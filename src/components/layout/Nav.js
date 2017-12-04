import React, { Component } from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import { userIsAuthenticated, userIsNotAuthenticated } from '../../components/auth/Helper'
import UserActions from '../../actions/User'
import DataActions from '../../actions/Data'

import CSS from '../../css/components/layout/nav.scss'

const LoginLink = userIsNotAuthenticated(() => <li className={CSS.item}><NavLink to="/login">Login</NavLink></li>)
const RegisterLink = userIsNotAuthenticated(() => <li className={CSS.item}><NavLink to="/register">Register</NavLink></li>)
const LogoutLink = userIsAuthenticated(({ logout }) => (
  <li className={CSS.item}>
    <button onClick={() => logout()}>Logout</button>
  </li>
))
    

class Nav extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired,
    toggleCart: PropTypes.func.isRequired,
    items: PropTypes.object.isRequired
  }

  render() {
    const { logout, items, toggleCart } = this.props
    const navItems = Object.keys(items).map(key => {
      const url = items[key].url
      return (
        <li key={key} className={CSS.item}>
          <NavLink exact to={url.replace('blogs','blog')}>
            {items[key].title}
          </NavLink>
        </li>
      )
    })
    return (
      <nav>
        <ul className={CSS.menu}>
          {navItems}
          <LoginLink />
          <RegisterLink />
          <LogoutLink logout={logout} />
          <li className={CSS.item} onClick={toggleCart}>Cart</li>
        </ul>
      </nav>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout: UserActions.logout,
    toggleCart: DataActions.toggleCart,
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Nav)