import React from 'react'
import RegisterForm from '../components/RegisterForm'
import AuthLayout from '../components/auth/AuthLayout'

function Register() {
  return (
    <AuthLayout>
      <RegisterForm></RegisterForm>
    </AuthLayout>
  )
}

export default Register