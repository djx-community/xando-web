import React, { useState } from 'react'
import ScoreBoard from '../score-board/ScoreBoard';
import UserProfile from '../user-profile/UserProfile'

function MatchHeaderArea({ scores, userProfile, opponentProfile }) {
    return (
        <div>
            <UserProfile offline={true} left={false} edit={true} opponent={false}
                userName={userProfile && userProfile.username} userId={userProfile && userProfile.userId} />
            <UserProfile offline={true} left={true} edit={true} opponent={true}
                userName={opponentProfile && opponentProfile.username} userId={opponentProfile && opponentProfile.userId} />
            <ScoreBoard userScore={scores.userScore} opponentScore={scores.opponentScore} bestOf={3}/>
        </div>
    )
}

export default MatchHeaderArea