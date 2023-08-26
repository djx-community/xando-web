import React from 'react'
import ForfeitMatchButton from '../../buttons/forfeit-match-button/ForfeitMatchButton'

interface ForfeitMatchFooterProps {
  handleOnClick: () => void
}

const ForfeitMatchFooter: React.FunctionComponent<ForfeitMatchFooterProps> = ({ handleOnClick }) => {
  return (
    <footer className='absolute bottom-4 right-4'>
      <ForfeitMatchButton handleOnClick={handleOnClick}/>
    </footer>
  )
}

export default ForfeitMatchFooter
