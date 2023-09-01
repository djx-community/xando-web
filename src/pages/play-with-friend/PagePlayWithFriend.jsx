import React from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import ButtonCopyId from '../../components/buttons/play-with-friend/copy-id-button/ButtonCopyId'
import ButtonEnterId from '../../components/buttons/play-with-friend/enter-id-button/ButtonEnterId'
import BackToHomeButtonFooter from '../../components/buttons/back-to-home-button-footer/BackToHomeButtonFooter'

function PagePlayWithFriend () {
  return (
    <div className="flex flex-col h-screen">
      <AppTitle title={'Play with Friend'} />
      <section className="flex flex-1 justify-center items-center">
        <div className="flex-col">
          <ButtonEnterId />
          <ButtonCopyId id={'aksjdh56'} />
        </div>
      </section>
      <BackToHomeButtonFooter />
    </div>
  )
}

export default PagePlayWithFriend
