import React, { Component } from 'react'

import CSS from '../../css/components/layout/footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer className={CSS.footer}>
        &copy; New Normal Agency
      </footer>
    )
  }
}

export default Footer