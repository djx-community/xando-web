import React from 'react'
import pages from '../../constants/pages'
import MenuButton from './menu-button/MenuButton'

function MainMenu () {
  return (
    <div className="h-fit">
      <MenuButton position={'top'} name={'Quick Play'} path={pages.HOME} />
      <MenuButton
        position={'middle'}
        name={'Play With Friend'}
        path={pages.PLAY_WITH_FRIEND}
      />
      <MenuButton
        position={'middle'}
        name={'Play Offline'}
        path={pages.OFFLINE_GAME}
      />
      <MenuButton position={'bottom'} name={'Extras'} path={pages.EXTRAS} />
    </div>
  )
}

export default MainMenu
