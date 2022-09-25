import React, { useEffect, useState } from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import ForfeitMatchFooter from '../../components/forfeit-match-footer/ForfeitMatchFooter'
import MatchHeaderArea from '../../components/match-header-area/MatchHeaderArea'
import OfflineMatchArea from '../../components/offline-match-area/OfflineMatchArea';
import TurnIndicator from '../../components/turn-indicator/TurnIndicator';

function PageOfflineGame() {
  const [scores, setScores] = useState({
    userScore: 0,
    opponentScore: 0
  });
  const [userProfile, setUserProfile] = useState({
    username: 'John Doe',
    userId: '123456789'
  });
  const [opponentProfile, setOpponentProfile] = useState({
    username: 'John Days',
    userId: '123456789'
  });
  const [turn, setTurn] = useState(true);
  const [bestOf, setBestOf] = useState(3);

  useEffect(() => {
    if (scores.userScore >= bestOf && scores.opponentScore >= bestOf) {
      alert('Draw');
      setScores({
        userScore: 0,
        opponentScore: 0
      });
    } else if (scores.userScore >= bestOf / 2) {
      alert('You Win');
      setScores({
        userScore: 0,
        opponentScore: 0
      });
    } else if (scores.opponentScore >= bestOf / 2) {
      alert('You Lose');
      setScores({
        userScore: 0,
        opponentScore: 0
      });
    }
  }, [scores]);

  return (
    <div>
      <AppTitle title={'X & O'} />
      <MatchHeaderArea userProfile={userProfile} opponentProfile={opponentProfile} scores={scores} bestOf={bestOf} />
      <TurnIndicator turn={turn} opponent={false} />
      <TurnIndicator turn={turn} opponent={true} />
      <OfflineMatchArea turn={turn} setTurn={setTurn} setScores={setScores} />
      <ForfeitMatchFooter />
    </div>
  )
}

export default PageOfflineGame