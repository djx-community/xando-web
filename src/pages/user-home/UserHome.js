import React, { useState } from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import UserProfile from '../../components/user-profile/UserProfile'

function UserHome() {
    const [profile, setProfile] = useState({
        username: 'John Doe',
        userId: '123456789'
    });
    return (
        <div>
            <AppTitle />
            <UserProfile edit={true} userName={profile && profile.username} userId={profile && profile.userId} />
        </div>
    )
}

export default UserHome