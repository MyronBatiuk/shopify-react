import React from 'react'
import {Route} from 'react-router-dom'

const AdminRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      <div className="adminLayout">
        <Component {...props} />
      </div>
    )}
    />
  )
}

export default AdminRoute