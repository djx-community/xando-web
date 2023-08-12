import React from 'react'

function AppTitle ({ title }) {
  return (
        <header>
            <h1 className="text-3xl font-bold text-center pt-3 font-sans">
                {title}
            </h1>
        </header>
  )
}

export default AppTitle
