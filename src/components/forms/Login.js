import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import errorActions from '../../actions/Error'
import userActions from '../../actions/User'

import CSS from '../../css/components/auth/login.scss'

class LoginForm extends Component {

  renderField({input, type, placeholder, meta: {touched, error}}) {
    const className = `${CSS.formGroup} ${touched && error ? CSS.hasDanger : ''}`
    return (
      <div className={className}>
        <input {...input} type={type} placeholder={placeholder} required className={CSS.formControl} />
        <div className={CSS.textHelp}>
          {touched && error ? error : ''}
        </div>
      </div>
    )
  }

  handleFormSubmit = (values) => {
    const {history} = this.props
    this.props.login(values)
      .then(() => {
        const {state} = this.props.location
        state && state.from ? history.push(state.from) : history.push('/dashboard')
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status >= 500) {
            this.props.newError()
          } else {
            this.props.newError(error.response.data.message)
          }
        } else {
          console.warn('Error', error.message)
          this.props.newError()
        }
      })
  }

  render() {
    const {handleSubmit, submitting} = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <div className={CSS.loginForm}>
          <Field name="email" component={this.renderField} type="email" placeholder="Email address" />
          <Field name="password" component={this.renderField} type="password" placeholder="Password" />
          <div className={CSS.formFooter}>
            <button type="submit" disabled={submitting} className={CSS.btnPrimary}>Log in</button>
          </div>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    login: userActions.login,
    newError: errorActions.newError,
  }, dispatch)
}

LoginForm = reduxForm({
  form: 'login',
  touchOnBlur: false,
})(LoginForm)

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))