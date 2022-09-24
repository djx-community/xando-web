import React from 'react'
import FooterButton from '../footer-button/FooterButton'

function HomeFooter() {
    return (
        <footer className='absolute bottom-4 left-4'>
            <FooterButton text={'Report Bug'} path={'/'}/>
        </footer>
    )
}

export default HomeFooter