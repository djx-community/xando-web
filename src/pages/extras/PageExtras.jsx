import React from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import ExtrasMenu from '../../components/extras-menu/ExtrasMenu'
import BackToHomeButtonFooter from '../../components/back-to-home-button-footer/BackToHomeButtonFooter'

function PageExtras () {
  return (
        <div className="flex flex-col h-screen">
            <AppTitle title={'Extras'} />
            <section className="flex flex-1 justify-center items-center">
                <ExtrasMenu />
            </section>
            <BackToHomeButtonFooter />
        </div>
  )
}

export default PageExtras
