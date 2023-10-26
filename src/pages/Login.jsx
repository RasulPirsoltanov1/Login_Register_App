import React from 'react'
import AuthLayout from '../components/auth/AuthLayout'
import LoginForm from '../components/auth/LoginForm'

function Login() {
  return (
    <AuthLayout>
      <LoginForm></LoginForm>
    </AuthLayout>
  )
}

export default Login