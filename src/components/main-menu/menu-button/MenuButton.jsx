import React from 'react'
import { useNavigate } from 'react-router-dom'

function MenuButton ({ position, name, path, hint }) {
  const navigate = useNavigate()

  let pos = 'border-b-4'
  if (position === 'middle') {
    pos = 'border-r-4 border-l-4'
  } else if (position === 'bottom') {
    pos = 'border-t-4'
  } else {
    pos = 'border-b-4'
  }

  const handleButtonClick = (arg) => {
    navigate(arg)
  }
  return (
    <div className="m-5">
      <button
        className={`bg-sky-900 hover:bg-sky-800 text-white text-xl 
            shadow-xl shadow-blue-800 h-auto w-56 md:w-50 hover:h-15 hover:w-56 md:hover:scale-125 font-bold p-4 px-6
            ${pos} border-slate-500 hover:border-blue-500 rounded`}
        onClick={() => handleButtonClick(path)}
      >
        {name}
      </button>
    </div>
  )
}

export default MenuButton
