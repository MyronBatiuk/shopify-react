import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../../containers/home';
import Admin from '../admin';
import Header from '../header';
import Footer from '../footer';

import Login from '../auth/login';
import Registration from '../auth/registration';

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



