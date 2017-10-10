import React, { Component } from 'react'
import Nav from './Nav'

import CSS from 'SCSS/components/layout/header.scss'

class Header extends Component {
  render() {
    return (
      <header className={CSS.header}>
        <Nav />
      </header>
    )
  }
}

export default Header