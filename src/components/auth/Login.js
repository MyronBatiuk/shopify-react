import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import LoginForm from '../forms/Login'

import CSS from '../../css/components/auth/login.scss'

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className={CSS.content}>
          <LoginForm />
          <div className={CSS.createAccount}>
            <span>Not a member?</span>
            <Link to="/register">Create an account</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login