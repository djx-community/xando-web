import React from 'react'
import ScoreBoard from '../game/score-board/ScoreBoard'
import UserProfile from '../user-profile/UserProfile'
import { Scores, UserProfileType } from '../game/offline-match-area/OfflineMatchArea'

interface MatchHeaderAreaProps {
  scores: Scores
  userProfile: UserProfileType
  opponentProfile: UserProfileType
  bestOf: number
}

const MatchHeaderArea: React.FunctionComponent<MatchHeaderAreaProps> = ({ scores, userProfile, opponentProfile, bestOf }) => {
  return (
    <div>
      <UserProfile offline={true} left={false} edit={true} opponent={false}
        username={userProfile?.username} userId={userProfile?.userId} />
      <UserProfile offline={true} left={true} edit={true} opponent={true}
        username={opponentProfile?.username} userId={opponentProfile?.userId} />
      <ScoreBoard userScore={scores.userScore} opponentScore={scores.opponentScore} bestOf={bestOf} />
    </div>
  )
}

export default MatchHeaderArea
