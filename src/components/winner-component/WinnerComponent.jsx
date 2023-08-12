import React from 'react'

function WinnerComponent ({ winner }) {
  return (
        <section className="pt-3 md:pt-16 flex justify-center align-middle">
            <h1 className='text-2xl font-bold'>{winner}</h1>
        </section>
  )
}

export default WinnerComponent
