import React from 'react'
import pages from '../../../constants/pages'
import MenuButton from '../../buttons/menu-button/MenuButton'

function ExtrasMenu () {
  return (
    <section className="pt-12 flex justify-center align-middle">
      <div className="flex-col">
        <MenuButton
          position={'top'}
          name={'How To Play'}
          path={pages.HOW_TO_PLAY}
        />
        <MenuButton
          position={'bottom'}
          name={'About Us'}
          path={pages.ABOUT_US}
        />
      </div>
    </section>
  )
}

export default ExtrasMenu
