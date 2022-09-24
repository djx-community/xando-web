import React from 'react'
import { useNavigate } from 'react-router-dom'

function FooterButton({ text, path }) {
    const navigate = useNavigate()
    const handleButtonClick = (arg) => {
        navigate(arg)
    }
    return (
        <div>
            <button className="bg-sky-900 hover:bg-sky-800 text-white text-sm shadow-xl shadow-blue-800 
    h-15 w-30 font-bold p-2 px-4 border-slate-500 hover:border-blue-500 rounded"
                onClick={() => {
handleButtonClick(path)
                }}
            >{text}</button>
        </div>
    )
}

export default FooterButton