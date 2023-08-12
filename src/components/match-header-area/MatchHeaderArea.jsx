import React, { useState } from 'react';
import ScoreBoard from '../score-board/ScoreBoard';
import UserProfile from '../user-profile/UserProfile';

function MatchHeaderArea({
  scores, userProfile, opponentProfile, bestOf
}) {
  return (
    <div>
      <UserProfile
        offline
        left={false}
        edit
        opponent={false}
        userName={userProfile && userProfile.username}
        userId={userProfile && userProfile.userId}
      />
      <UserProfile
        offline
        left
        edit
        opponent
        userName={opponentProfile && opponentProfile.username}
        userId={opponentProfile && opponentProfile.userId}
      />
      <ScoreBoard
        userScore={scores.userScore}
        opponentScore={scores.opponentScore}
        bestOf={bestOf}
      />
    </div>
  );
}

export default MatchHeaderArea;
