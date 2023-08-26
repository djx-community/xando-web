import React from 'react'
import FooterButton from '../footer-button/FooterButton'
import { To } from 'react-router-dom'

const BackButton: React.FunctionComponent = () => {
  return (
    <footer className='absolute bottom-4 right-4'>
      <FooterButton text='Back' path={-1 as To} color='red' />
    </footer>
  )
}

export default BackButton
