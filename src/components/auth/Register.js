import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import RegisterForm from '../forms/Register'

import CSS from '../../css/components/auth/register.scss'

class Register extends Component {
  render() {
    return (
      <div className="container">
        <div className={CSS.content}>
          <RegisterForm />
          <div className={CSS.login}>
            <span>Already have an account?</span>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Register