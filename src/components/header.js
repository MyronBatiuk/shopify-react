import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import CSS from '../css/components/header.scss';

class Header extends Component {
  render() {
    return (
      <header className={CSS.header}>
        <nav>
          <ul className={CSS.menu}>
            <li className={CSS.item}><Link to="/">Home</Link></li>
            <li className={CSS.item}><Link to="/admin">Admin</Link></li>
            <li className={CSS.item}><Link to="/login">Login</Link></li>
            <li className={CSS.item}><Link to="/registration">Registration</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
