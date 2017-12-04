import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Route, withRouter} from 'react-router-dom'
import dataActions from '../../actions/Data'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Cart from '../../containers/Cart'

class DefaultRoute extends Component {

  static PropTypes = {
    fetchData: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const pathname = this.props.location.pathname
    const search = this.props.location.search
    const page = search.includes('page') && search.split('=')[1]
    const handle = pathname === '/' ? '/pages/home' : pathname
    this.props.fetchData('/pages/header')
    if (pathname !== '/login' && pathname !== '/register') {
      this.props.fetchData(handle, page)
    }
  }

  componentWillReceiveProps(nextProps) {
    const newPathname = nextProps.location.pathname
    const search = nextProps.location.search
    const page = search.includes('page') && search.split('=')[1]
    if (nextProps.location !== this.props.location && newPathname !== '/login' && newPathname !== '/register') {
      const handle = newPathname === '/' ? '/pages/home' : newPathname
      this.props.fetchData(handle, page)
    }
  }

  render() {
    const {component: Component, ...rest} = this.props
    return (
      <Route {...rest} render={props => (
        <div className="defaultRoute">
          <Header />
          <Component {...props} {...this.props} />
          <Footer />
          <Cart {...this.props} />
        </div>
      )}
      />
    )
  }
}

function mapStateToProps({data}) {
  return {data}
}

export default withRouter(connect(mapStateToProps, dataActions)(DefaultRoute))