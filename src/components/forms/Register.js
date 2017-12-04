import React, {Component} from 'react'
import {Field, reduxForm, SubmissionError} from 'redux-form'
import {bindActionCreators} from 'redux'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import userActions from '../../actions/User'
import errorActions from '../../actions/Error'

import CSS from '../../css/components/auth/register.scss'

class RegisterForm extends Component {

  renderInputField(field) {
    const {input, type, placeholder, readOnly = false, meta: {touched, error}} = field
    const className = `${CSS.formGroup} ${touched && error
      ? CSS.hasDanger
      : ''}`
    return (
      <div className={className}>
        <input {...input} type={type} className={CSS.formControl} placeholder={placeholder} readOnly={readOnly} />
        <div className={CSS.textHelp}>
          {touched && error ? error : ''}
        </div>
      </div>
    )
  }

  handleErrors = (error) => {
    if (error.response) {
      if (error.response.status >= 500) {
        this.props.newError()
      } else {
        throw new SubmissionError(error.response.data.errors)
      }
    } else {
      this.props.newError()
      console.warn('Error', error.message)
    }
  }

  handleFormSubmit = (values) => {
    return this.props.register(values)
      .then(() => {
        setTimeout(() => {
          this.props.history.push('/dashboard')
        }, 2000)
      })
      .catch(this.handleErrors)
  }

  disableSubmit = () => {
    const {submitting} = this.props
    return submitting
  }

  renderForm() {
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <div className={CSS.form}>
          <Field name="first_name" component={this.renderInputField} type="text" placeholder="First name" />
          <Field name="last_name" component={this.renderInputField} type="text" placeholder="Last name" />
          <Field name="email" component={this.renderInputField} type="email" placeholder="Email address" />
          <Field name="password" component={this.renderInputField} type="password" placeholder="Password" />
          <div className={CSS.formFooter}>
            <button type="submit" disabled={this.disableSubmit()} className={CSS.btnPrimary}>Sign me up
            </button>
          </div>
        </div>
      </form>
    )
  }

  render() {
    return this.renderForm()
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    register: userActions.register,
    newError: errorActions.newError,
    resetError: errorActions.resetError,
  }, dispatch)
}

RegisterForm = reduxForm({
  form: 'register',
  touchOnBlur: false,
})(RegisterForm)

export default withRouter(connect(null, mapDispatchToProps)(RegisterForm))