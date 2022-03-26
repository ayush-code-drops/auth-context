import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

function LoginStatus() {
  const {token}=useContext(AuthContext)
  return (
      <div>
      <h2>You are logged in and your token is : { token}</h2>
    </div>
  )
}

export default LoginStatus