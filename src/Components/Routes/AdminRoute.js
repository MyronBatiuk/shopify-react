import React from 'react'

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