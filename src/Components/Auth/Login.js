import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import UserActions from '../../Actions/User'

import CSS from '../../css/components/auth/login.scss'

class Login extends Component {

  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  onClick = (e) => {
    e.preventDefault()

    this.props.login({
      name: this.nameInput.value,
      isAdmin: this.adminCheckbox.checked,
    })
  }

  render() {
    return (
      <div className={CSS.login}>
        <div>
          <input type="text" ref={name => this.nameInput = name} placeholder="Enter your username" />
        </div>
        <label>
          <input
            type="checkbox"
            ref={checkbox => this.adminCheckbox = checkbox}
          />
          Are you an Administrator?
        </label>
        <div>
          <button onClick={this.onClick}>Login</button>
        </div>
      </div>
    )
  }
}

export default connect(null, UserActions)(Login)