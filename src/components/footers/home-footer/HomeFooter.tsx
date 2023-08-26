import React from 'react'
import FooterButton from '../../buttons/footer-button/FooterButton'

const HomeFooter: React.FunctionComponent = () => {
  return (
    <footer className='absolute bottom-4 left-4'>
      <FooterButton text={'Report Bug'} path={'/'} />
    </footer>
  )
}

export default HomeFooter
