import React, { useEffect, useState } from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import ForfeitMatchFooter from '../../components/forfeit-match-footer/ForfeitMatchFooter'
import MatchHeaderArea from '../../components/match-header-area/MatchHeaderArea'
import OfflineMatchArea from '../../components/offline-match-area/OfflineMatchArea';
import TurnIndicator from '../../components/turn-indicator/TurnIndicator';
import WinnerComponent from '../../components/winner-component/WinnerComponent';

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
  const [previousWinner, setPreviousWinner] = useState(null);
  const [lap, setLap] = useState(1);

  useEffect(() => {
    console.log(lap);
    if (lap > bestOf) {
      if (scores.userScore > scores.opponentScore) {
        alert('You Wins');                      //alertContext to be setted as "USER" 
      } else if (scores.userScore < scores.opponentScore) {
        alert('Opponent Wins');                  //alertContext to be setted as "opponent"
      } else {
        alert('Game ended in Draw');                      //alertContext to be setted as "DRAW"
      }
      setScores({
        userScore: 0,
        opponentScore: 0
      })
      setLap(1)
    }
  }, [lap]);

  return (
    <div>
      <AppTitle title={'X & O'} />
      <MatchHeaderArea userProfile={userProfile} opponentProfile={opponentProfile} scores={scores} bestOf={bestOf} />
      <TurnIndicator turn={turn} opponent={false} />
      <TurnIndicator turn={turn} opponent={true} />
      <OfflineMatchArea turn={turn} setTurn={setTurn} setScores={setScores} setWinner={setPreviousWinner} setLap={setLap} />
      <WinnerComponent winner={previousWinner} />
      <ForfeitMatchFooter />
    </div>
  )
}

export default PageOfflineGame