import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Admin extends Component {
  render() {
    return (
      <div>
        <p>This is an Admin component</p>
        <Link to="/">Back to the Home page</Link>
      </div>
    )
  }
}

export default Admin
