import React from 'react'
import AppTitle from '../../components/app-title/AppTitle'
import MatchHeaderArea from '../../components/match-header-area/MatchHeaderArea'
import OfflineMatchArea, { Scores, UserProfileType } from '../../components/game/offline-match-area/OfflineMatchArea'
import TurnIndicator from '../../components/game/turn-indicator/TurnIndicator'
import WinnerComponent from '../../components/game/winner-component/WinnerComponent'
import ForfeitMatchFooter from '../../components/footers/forfeit-match-footer/ForfeitMatchFooter'



const PageOfflineGame: React.FunctionComponent = () => {
  const [scores, setScores] = React.useState<Scores>({
    userScore: 0,
    opponentScore: 0
  })
  const [userProfile] = React.useState<UserProfileType>({
    username: 'John Doe',
    userId: '123456789'
  })
  const [opponentProfile] = React.useState<UserProfileType>({
    username: 'John Days',
    userId: '123456789'
  })
  const [turn, setTurn] = React.useState<boolean>(true)
  const [bestOf] = React.useState(3)
  const [previousWinner, setPreviousWinner] = React.useState<string | null>(null)
  const [lap, setLap] = React.useState<number>(1)

  React.useEffect(() => {
    if (lap > bestOf) {
      if (scores.userScore > scores.opponentScore) {
        alert('You Wins') // alertContext to be setted as "USER"
      } else if (scores.userScore < scores.opponentScore) {
        alert('Opponent Wins') // alertContext to be setted as "opponent"
      } else {
        alert('Game ended in Draw') // alertContext to be setted as "DRAW"
      }
      setScores({
        userScore: 0,
        opponentScore: 0
      })
      setLap(1)
    }
  }, [lap])

  return (
    <div className="flex flex-col h-screen">
      <AppTitle title={'X & O'} />
      <div className="flex flex-col flex-1 justify-center items-center">
        <MatchHeaderArea userProfile={userProfile} opponentProfile={opponentProfile} scores={scores} bestOf={bestOf} />
        <TurnIndicator turn={turn} opponent={false} />
        <TurnIndicator turn={turn} opponent={true} />
        <OfflineMatchArea turn={turn} setTurn={setTurn} setScores={setScores} setWinner={setPreviousWinner} setLap={setLap} />
        { previousWinner ? <WinnerComponent winner={previousWinner} /> : null }
      </div>
      <ForfeitMatchFooter handleOnClick={() => {}} />
      {/* <audio controls autoPlay loop>
        <source src='sword-from-sheath-6910.ogg' type='audio/ogg'/>
      </audio> */}
    </div>
  )
}

export default PageOfflineGame
