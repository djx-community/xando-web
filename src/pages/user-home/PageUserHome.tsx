import React, { useState } from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import UserProfile from '../../components/user-profile/UserProfile'
import MainMenu from '../../components/menus/main-menu/MainMenu'
import HomeFooter from '../../components/footers/home-footer/HomeFooter'
const PageUserHome: React.FC = () => {
  const [profile] = useState({
    username: 'John Doe',
    userId: '123456789'
  })
  return (
    <div className="flex flex-col h-screen">
      <AppTitle title={'X & O'} />
      <UserProfile
        left={false}
        edit={true}
        opponent={false}
        username={profile?.username}
        userId={profile?.userId}
      />
      <section className="flex flex-1 justify-center items-center">
        <MainMenu />
      </section>
      <HomeFooter />
    </div>
  )
}

export default PageUserHome
