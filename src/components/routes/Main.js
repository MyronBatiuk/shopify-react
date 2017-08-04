import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../Home';
import Admin from '../Admin';
import Header from '../Header';
import Footer from '../Footer';

import Login from '../auth/Login';
import Registration from '../auth/Registration';

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
      <Route {...rest} render={props => (
          <div className="DefaultLayout">
            <Header/>
            <Component {...props} />
            <Footer/>
          </div>
      )}/>
  );
};

const AdminLayout = ({component: Component, ...rest}) => {
  return (
      <Route {...rest} render={props => (
          <div className="DefaultLayout">
            <Component {...props} />
          </div>
      )}/>
  );
};

const Main = () => (
    <div>
      <Switch>
        <DefaultLayout exact path="/" component={Home}/>
        <AdminLayout exact path="/admin" component={Admin}/>
        <DefaultLayout exact path="/login" component={Login}/>
        <DefaultLayout exact path="/registration" component={Registration}/>
        <Route render={() => {
          return <p>Not Found</p>;
        }}/>
      </Switch>
    </div>
);

export default Main;



