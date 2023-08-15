import React from 'react'

function AppTitle ({ title }) {
  return (
        <header className='absolute top-0 w-full'>
            <h1 className="text-3xl font-bold text-center pt-3 font-sans">
                {title}
            </h1>
        </header>
  )
}

export default AppTitle
