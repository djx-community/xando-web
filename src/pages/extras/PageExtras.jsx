import React from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import ExtrasMenu from '../../components/extras-menu/ExtrasMenu'
import BackToHomeButtonFooter from '../../components/back-to-home-button-footer/BackToHomeButtonFooter'

function PageExtras () {
  return (
        <div>
            <AppTitle title={'Extras'} />
            <ExtrasMenu />
            <BackToHomeButtonFooter />
        </div>
  )
}

export default PageExtras
