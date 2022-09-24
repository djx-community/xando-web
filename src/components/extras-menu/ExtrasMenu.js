import React from 'react'
import pages from '../../constants/pages'
import MenuButton from '../main-menu/menu-button/MenuButton'

function ExtrasMenu() {
    return (
        <section className='pt-28 md:p-28'>
            <center>
                <MenuButton position={'top'} name={'How To Play'} path={pages.HOW_TO_PLAY} />
                <MenuButton position={'bottom'} name={'About Us'} path={pages.ABOUT_US} />
            </center>
        </section>
    )
}

export default ExtrasMenu