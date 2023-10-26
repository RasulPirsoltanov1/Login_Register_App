import React from 'react'

function AuthLayout({children}) {
  return (
    <div className='grid place-items-center min-h-[100vh]'>{children}</div>
  )
}

export default AuthLayout