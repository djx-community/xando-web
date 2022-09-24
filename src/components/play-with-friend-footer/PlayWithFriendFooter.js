import React from 'react'
import FooterButton from '../footer-button/FooterButton'

function PlayWithFriendFooter() {
    return (
        <footer className='absolute bottom-4 right-4'>
            <FooterButton text={'Back'} path={'/'} />
        </footer>
    )
}

export default PlayWithFriendFooter