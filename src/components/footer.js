import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import CSS from '../css/components/footer.scss'


class Footer extends Component {
  render() {
    return (
        <footer className={CSS.footer}>
          <nav>
            <ul className={CSS.menu}>
              <li className={CSS.item}><Link to='/'>Home</Link></li>
              <li className={CSS.item}><Link to='/admin'>Admin</Link></li>
              <li className={CSS.item}><Link to='/login'>Login</Link></li>
              <li className={CSS.item}><Link
                  to='/registration'>Registration</Link></li>
            </ul>
          </nav>
        </footer>
    );
  }
}

export default Footer;