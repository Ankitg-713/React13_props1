import React from 'react'

function Button({text, color}) {
  return (
    <button className={`px-3 py-2 ${color} rounded-md text-zinc-100 m-8`}>{text}</button>
  )
}

export default Button