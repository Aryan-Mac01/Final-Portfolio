import React from 'react'

const Layout = ({children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-gradient-to-b from-blue-50 to-red-100 p-32 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
