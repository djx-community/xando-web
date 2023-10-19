import React from 'react'
import { To, useNavigate } from 'react-router-dom'
import menuItemClick from "../../../assets/menuItemClick.mp3"

interface MenuButtonProps {
  position: 'top' | 'middle' | 'bottom'
  name: string
  path: To
  hint?: string
}

const MenuButton: React.FunctionComponent<MenuButtonProps> = ({
  position,
  name,
  path,
  hint
}) => {
  const navigate = useNavigate()
  const audio = new Audio(menuItemClick);
  let pos = 'border-b-4'

  React.useEffect(() => {
    if (position === 'middle') {
      pos = 'border-r-4 border-l-4'
    } else if (position === 'bottom') {
      pos = 'border-t-4'
    } else {
      pos = 'border-b-4'
    }
  }, [])

  const handleButtonClick = () => {
    navigate(path)
    audio.play();
  }
  return (
    <div className="m-5">
      <button
        className={`bg-sky-900 hover:bg-sky-800 text-white text-xl 
            shadow-xl shadow-blue-800 h-auto w-56 md:w-50 hover:h-15 hover:w-56 md:hover:scale-110 font-bold p-4 px-6
            ${pos} border-slate-300 hover:border-blue-500 rounded`}
        onClick={handleButtonClick}
      >
        {name}
      </button>
    </div>
  )
}

export default MenuButton
