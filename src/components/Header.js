import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
          <nav>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/admin'>Admin</Link></li>
              <li><Link to='/login'>Login</Link></li>
              <li><Link to='/registration'>Registration</Link></li>
            </ul>
          </nav>
        </header>
    );
  }
}

export default Header;
