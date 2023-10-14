import React from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import BackToHomeButtonFooter from '../../components/buttons/back-to-home-button-footer/BackToHomeButtonFooter'
import ExtrasMenu from '../../components/menus/extras-menu/ExtrasMenu'

const PageExtras: React.FunctionComponent = () => {
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
