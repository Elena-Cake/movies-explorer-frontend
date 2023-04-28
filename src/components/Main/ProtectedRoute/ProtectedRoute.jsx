import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  console.log(props.isSignIn)
  return (
    props.isSignIn ? <Component {...props} /> : <Navigate to="/signin" />
  )
}

export default ProtectedRoute;