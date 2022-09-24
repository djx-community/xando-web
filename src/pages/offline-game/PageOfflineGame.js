import React, { useState } from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import ForfeitMatchFooter from '../../components/forfeit-match-footer/ForfeitMatchFooter'
import MatchHeaderArea from '../../components/match-header-area/MatchHeaderArea'

function PageOfflineGame() {
  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [userProfile, setUserProfile] = useState({
    username: 'John Doe',
    userId: '123456789'
  });
  const [opponentProfile, setOpponentProfile] = useState({
    username: 'John Days',
    userId: '123456789'
  });
  return (
    <div>
      <AppTitle title={'X & O'} />
      <MatchHeaderArea userProfile={userProfile} opponentProfile={opponentProfile} scores={{ userScore, opponentScore }} />
      <ForfeitMatchFooter />
    </div>
  )
}

export default PageOfflineGame