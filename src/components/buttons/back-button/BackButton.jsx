import React from 'react'
import FooterButton from '../footer-button/FooterButton'

function BackButton () {
  return (
        <footer className='absolute bottom-4 right-4'>
            <FooterButton text='Back' path={-1} color='red'/>
        </footer>
  )
}

export default BackButton
