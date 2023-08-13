import { ChevronRightIcon } from '@heroicons/react/20/solid'
import React, { useState } from 'react'

function ButtonEnterId () {
  const [id, setId] = useState()
  const handleButtonClick = () => {
  }
  return (
        <div className="m-5 bg-sky-800 text-white text-xl md:text-3xl
        shadow-xl shadow-blue-800 h-16 w-56 md:w-30 font-bold p-3
       border-b-4 border-slate-500 hover:border-blue-500 rounded flex gap-1">
            <input type='text' placeholder='Enter ID' value={id} onChange={(e) => setId(e.target.value)}
                className="text-lg font-medium text-slate-900 dark:text-slate-200 bg-inherit border-b-2 rounded-md
                h-10 w-40 p-2 text-center focus:outline-none" />
            <ChevronRightIcon className='text-white shadow border-2 rounded h-10 bg-inherit hover:bg-sky-700 hover:shadow-white'
                onClick={() =>
                  handleButtonClick()
                } />
        </div>
  )
}

export default ButtonEnterId
