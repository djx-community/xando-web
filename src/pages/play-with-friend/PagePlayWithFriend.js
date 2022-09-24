import React from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import PlayWithFriendFooter from '../../components/play-with-friend-footer/PlayWithFriendFooter'
import ButtonCopyId from '../../components/play-with-friend/copy-id-button/ButtonCopyId'
import ButtonEnterId from '../../components/play-with-friend/enter-id-button/ButtonEnterId'

function PagePlayWithFriend() {
    return (
        <div>
            <AppTitle title={'Play with Friend'} />
            <section className='pt-28 md:p-28'>
                <center>
                    <ButtonEnterId />
                    <ButtonCopyId id={'aksjdh56'}/>
                </center>
            </section>
            <PlayWithFriendFooter/>
        </div>
    )
}

export default PagePlayWithFriend