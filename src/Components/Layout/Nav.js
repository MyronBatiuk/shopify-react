import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { userIsAuthenticated, userIsNotAuthenticated } from 'Components/Auth/Helper'
import UserActions from '../../Actions/User'

import CSS from '../../css/components/layout/nav.scss'

const LoginLink = userIsNotAuthenticated(() => <li className={CSS.item}><Link to="/login">Login</Link></li>)
const RegisterLink = userIsNotAuthenticated(() => <li className={CSS.item}><Link to="/register">Register</Link></li>)
const LogoutLink = userIsAuthenticated(({ logout }) => (
  <li className={CSS.item}>
    <button onClick={() => logout()}>Logout</button>
  </li>
))
    

class Nav extends Component {

  static propTypes = {
    logout: PropTypes.func.isRequired
  }

  render() {
    const { logout } = this.props

    return (
      <nav>
        <ul className={CSS.menu}>
          <li className={CSS.item}><Link to="/">Home</Link></li>
          <li className={CSS.item}><Link to="/admin">Admin</Link></li>
          <LoginLink />
          <RegisterLink />
          <LogoutLink logout={logout} />
        </ul>
      </nav>
    )
  }
}

export default connect(null, UserActions)(Nav)