import React from 'react'
import { PAGES } from '../../../constants/pages'
import MenuButton from '../../buttons/menu-button/MenuButton'

const MainMenu: React.FunctionComponent = () => {
  return (
    <div className="h-fit">
      <MenuButton position={'top'} name={'Quick Play'} path={PAGES.HOME} />
      <MenuButton
        position={'middle'}
        name={'Play With Friend'}
        path={PAGES.PLAY_WITH_FRIEND}
      />
      <MenuButton
        position={'middle'}
        name={'Play Offline'}
        path={PAGES.OFFLINE_GAME}
      />
      <MenuButton position={'bottom'} name={'Extras'} path={PAGES.EXTRAS} />
    </div>
  )
}

export default MainMenu
