import React from 'react'

interface WinnerComponentProps {
  winner: string
}

const WinnerComponent: React.FunctionComponent<WinnerComponentProps> = ({ winner }) => {
  return (
    <section className="pt-3 md:pt-16 flex justify-center align-middle">
      <h1 className='text-2xl font-bold'>{winner}</h1>
    </section>
  )
}

export default WinnerComponent
