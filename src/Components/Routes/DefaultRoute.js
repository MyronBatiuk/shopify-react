import React from 'react'
import {Route} from 'react-router-dom'

import Header from 'Components/Layout/Header'
import Footer from 'Components/Layout/Footer'

const DefaultRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <div className="defaultRoute">
        <Header />
        <Component {...props} />
        <Footer />
      </div>
    )}
    />
  )
}

export default DefaultRoute