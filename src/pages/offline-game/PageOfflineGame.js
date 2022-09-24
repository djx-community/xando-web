import React, { useState } from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import ForfeitMatchFooter from '../../components/forfeit-match-footer/ForfeitMatchFooter'
import MatchHeaderArea from '../../components/match-header-area/MatchHeaderArea'

function PageOfflineGame() {
  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  return (
    <div>
      <AppTitle title={'X & O'} />
      <MatchHeaderArea scores={{ userScore, opponentScore }} />
      <ForfeitMatchFooter />
    </div>
  )
}

export default PageOfflineGame