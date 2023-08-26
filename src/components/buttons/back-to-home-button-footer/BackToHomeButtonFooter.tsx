import React from 'react'
import FooterButton from '../footer-button/FooterButton'

const BackToHomeButtonFooter: React.FunctionComponent = () => {
  return (
    <footer className='absolute bottom-4 right-4'>
      <FooterButton text={'Back To Home'} path={'/'} />
    </footer>
  )
}

export default BackToHomeButtonFooter
