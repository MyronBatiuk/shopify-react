import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import dataActions from '../../actions/Data'

import Nav from './Nav'

import CSS from '../../css/components/layout/header.scss'

class Header extends Component {

  static PropTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const {header} = this.props.data
    const nav = header.shop_name && <Nav items={header.navigation} />
    const logo = header.shop_name && header.logo_src ?
      <img className={CSS.logo} src={header.logo_src} alt="Custom storefront" /> :
      <h3 className={CSS.title}>{header.shop_name}</h3>
    return (
      <header className={CSS.header}>
        <Link to="/">{logo}</Link>
        {nav}
      </header>
    )
  }
}

function mapStateToProps({data}) {
  return {data}
}

export default connect(mapStateToProps, dataActions)(Header)