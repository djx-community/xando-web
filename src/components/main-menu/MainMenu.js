import React from 'react'
import pages from '../../constants/pages'
import MenuButton from './menu-button/MenuButton'

function MainMenu() {
    return (
        <section className='p-28'>
            <center>
                <MenuButton position={'top'} name={'Quick Play'} path={pages.HOME}/>
                <MenuButton position={'middle'} name={'Play With Friend'} path={pages.HOME}/>
                <MenuButton position={'bottom'} name={'Play Offline'} path={pages.OFFLINE_GAME}/>
            </center>
        </section>
    )
}

export default MainMenu