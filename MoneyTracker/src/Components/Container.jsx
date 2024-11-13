import React from 'react'

function Container({children, className}) {
  return (
    <div className={`${className} p-5`}>
      {children}
    </div>
  )
}

export default Container