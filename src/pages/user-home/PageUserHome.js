import React, { useState } from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import Footer from '../../components/footer/Footer';
import MainMenu from '../../components/main-menu/MainMenu';
import UserProfile from '../../components/user-profile/UserProfile'

function PageUserHome() {
    const [profile, setProfile] = useState({
        username: 'John Doe',
        userId: '123456789'
    });
    return (
        <div>
            <AppTitle title={'X &amp; O'} />
            <UserProfile left={false} edit={true} opponent={false} userName={profile && profile.username} userId={profile && profile.userId} />
            <MainMenu />
            <Footer />
        </div>
    )
}

export default PageUserHome