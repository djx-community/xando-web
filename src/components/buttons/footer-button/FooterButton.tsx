import React, { CSSProperties } from 'react'
import { To, useNavigate } from 'react-router-dom'

interface FooterButtonProps {
  text: string
  path: To
  color?: CSSProperties['backgroundColor']
}

const FooterButton: React.FunctionComponent<FooterButtonProps> = ({
  text,
  path,
  color
}) => {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate(path)
  }
  return (
    <div>
      <button className="bg-sky-900 hover:bg-sky-800 text-white text-sm shadow-xl shadow-blue-800
    h-15 w-30 font-bold p-2 px-4 border-slate-500 hover:border-blue-500 rounded"
        onClick={handleButtonClick}
        style={{
          backgroundColor: color
        }}
      >{text}</button>
    </div>
  )
}

export default FooterButton
