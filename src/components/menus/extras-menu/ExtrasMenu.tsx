import React from 'react'
import { PAGES } from '../../../constants/pages'
import MenuButton from '../../buttons/menu-button/MenuButton'

const ExtrasMenu: React.FunctionComponent = () => {
  return (
    <section className="pt-12 flex justify-center align-middle">
      <div className="flex-col">
        <MenuButton
          position={'top'}
          name={'How To Play'}
          path={PAGES.HOW_TO_PLAY}
        />
        <MenuButton
          position={'bottom'}
          name={'About Us'}
          path={PAGES.ABOUT_US}
        />
      </div>
    </section>
  )
}

export default ExtrasMenu
