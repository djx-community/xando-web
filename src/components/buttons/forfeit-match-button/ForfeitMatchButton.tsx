import React from 'react'

interface ForfeitMatchButtonProps {
  handleOnClick: () => void
}

const ForfeitMatchButton: React.FunctionComponent<ForfeitMatchButtonProps> = ({ handleOnClick }) => {
  return (
    <div>
      <button className="bg-sky-900 hover:bg-sky-800 text-white text-sm shadow-xl shadow-blue-800
                                h-15 w-30 font-bold p-2 px-4 border-slate-500 hover:border-blue-500 rounded"
        style={{ backgroundColor: 'red' }}
        onClick={handleOnClick}
      >Forfeit Match</button>
    </div>
  )
}

export default ForfeitMatchButton
