import React from 'react'

function Button({className, onClick, name, ...props}) {
  return (
    <div>
        <button className={`${className} px-3 py-1 rounded bg-blue-600 hover:bg-blue-800 text-white`} onClick={onClick} {...props}>{name}</button>
    </div>
  )
}

export default Button