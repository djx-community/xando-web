import React from 'react'
import lineDrawMp3 from '../../../assets/lineDraw.mp3'
import './DrawLine.css'

interface OfflineMatchAreaProps {
  turn: boolean
  setTurn: React.Dispatch<React.SetStateAction<boolean>>
  setScores: React.Dispatch<React.SetStateAction<Scores>>
  setWinner: React.Dispatch<React.SetStateAction<string | null>>
  setLap: React.Dispatch<React.SetStateAction<number>>
}

export interface Scores {
  userScore: number
  opponentScore: number
}

export interface UserProfileType {
  username: string
  userId: string
}

interface MatrixSingleCell {
  component: string | null // to be changed to React.ReactNode
  clicked: boolean
}

interface Cell {
  row: number
  col: number
}

interface SingleGameWinnerProps {
  c1: Cell
  c2: Cell
  c3: Cell
  component: 'X' | 'O' // to be changed to React.ReactNode
}


const OfflineMatchArea: React.FunctionComponent<OfflineMatchAreaProps> = ({ turn, setTurn, setScores, setWinner, setLap }) => {
  const [matrix, setMatrix] = React.useState<MatrixSingleCell[][]>([
    [
      { component: null, clicked: false },
      { component: null, clicked: false },
      { component: null, clicked: false }
    ],
    [
      { component: null, clicked: false },
      { component: null, clicked: false },
      { component: null, clicked: false }
    ],
    [
      { component: null, clicked: false },
      { component: null, clicked: false },
      { component: null, clicked: false }
    ]
  ])
  const [countTurn, setCountTurn] = React.useState<number>(0)
  const square: NodeListOf<Element> = document.querySelectorAll('.grid-area button') // to take each cell object to draw line
  const matchArea = document.getElementById('match-area') as HTMLElement// to take match area object to shake
  const audio: HTMLAudioElement = new Audio(lineDrawMp3) // to create object of line drawing sound effect
  React.useEffect(() => {
    if (countTurn >= 5 && countTurn < 9) {

      // start to check if there is a winner
      checkRows() // check rows
      checkColumns() // check columns
      checkDiagonals() // check diagonals
    } else if (countTurn === 9) {
      alert('Draw') // winner to be set as "DRAW"
      setLap((lap) => lap + 1)
      resetGame()
    }
  }, [countTurn])

  const checkRows = () => {
    // ___________ For draw line through rows _______________________________________
    let rowOne = false
    let rowTwo = false
    let rowThree = false

    rowOne =
      matrix[0][0].component === matrix[0][1].component &&
      matrix[0][0].component === matrix[0][2].component &&
      matrix[0][0].component !== null
    rowTwo =
      matrix[1][0].component === matrix[1][1].component &&
      matrix[1][0].component === matrix[1][2].component &&
      matrix[1][0].component !== null
    rowThree =
      matrix[2][0].component === matrix[2][1].component &&
      matrix[2][0].component === matrix[2][2].component &&
      matrix[2][0].component !== null

    if (rowOne) {
      square[0].classList.add('horizontal')
      square[1].classList.add('horizontal')
      square[2].classList.add('horizontal')
      audio.play() // to play the audio if match the first row
      matchArea.classList.add('match-area')// to shake tha match area
      vibrate() // to perform vibration
    } else if (rowTwo) {
      square[3].classList.add('horizontal')
      square[4].classList.add('horizontal')
      square[5].classList.add('horizontal')
      audio.play() // to play the audio if match the second row
      matchArea.classList.add('match-area')// to shake tha match area
      vibrate() // to perform vibration
    } else if (rowThree) {
      square[6].classList.add('horizontal')
      square[7].classList.add('horizontal')
      square[8].classList.add('horizontal')
      audio.play() // to play the audio if match the third row\
      matchArea.classList.add('match-area')// to shake tha match area
      vibrate() // to perform vibration
    }
    // ********************************************************************************
    for (let i = 0; i < 3; i++) {
      if (
        matrix[i][0].component === matrix[i][1].component &&
        matrix[i][1].component === matrix[i][2].component
      ) {
        if (matrix[i][0].component === 'X') {
          singleGameWinner({
            c1: { row: i, col: 0 },
            c2: { row: i, col: 1 },
            c3: { row: i, col: 2 },
            component: 'X'
          })
        } else if (matrix[i][0].component === 'O') {
          singleGameWinner({
            c1: { row: i, col: 0 },
            c2: { row: i, col: 1 },
            c3: { row: i, col: 2 },
            component: 'O'
          })
        }
      }
    }
  }

  const checkColumns = () => {
    // ___________ For draw line through columns _______________________________________
    let columnOne = false
    let columnTwo = false
    let columnThree = false

    columnOne =
      matrix[0][0].component === matrix[1][0].component &&
      matrix[0][0].component === matrix[2][0].component &&
      matrix[0][0].component !== null
    columnTwo =
      matrix[0][1].component === matrix[1][1].component &&
      matrix[0][1].component === matrix[2][1].component &&
      matrix[0][1].component !== null
    columnThree =
      matrix[0][2].component === matrix[1][2].component &&
      matrix[0][2].component === matrix[2][2].component &&
      matrix[0][2].component !== null

    if (columnOne) {
      square[0].classList.add('vertical')
      square[3].classList.add('vertical')
      square[6].classList.add('vertical')
      audio.play() // to play the audio if match the first column
      matchArea.classList.add('match-area')// to shake tha match area
      vibrate() // to perform vibration
    } else if (columnTwo) {
      square[1].classList.add('vertical')
      square[4].classList.add('vertical')
      square[7].classList.add('vertical')
      audio.play() // to play the audio if match the second column
      matchArea.classList.add('match-area')// to shake tha match area
      vibrate() // to perform vibration
    } else if (columnThree) {
      square[2].classList.add('vertical')
      square[5].classList.add('vertical')
      square[8].classList.add('vertical')
      audio.play() // to play the audio if match the third column
      matchArea.classList.add('match-area')// to shake tha match area
      vibrate() // to perform vibration
    }
    // ********************************************************************************

    for (let i = 0; i < 3; i++) {
      if (
        matrix[0][i].component === matrix[1][i].component ||
        matrix[1][i].component === matrix[2][i].component
      ) {
        if (matrix[0][i].component === 'X') {
          singleGameWinner({
            c1: { row: i, col: 0 },
            c2: { row: i, col: 1 },
            c3: { row: i, col: 2 },
            component: 'X'
          })
        } else if (matrix[0][i].component === 'O') {
          singleGameWinner({
            c1: { row: i, col: 0 },
            c2: { row: i, col: 1 },
            c3: { row: i, col: 2 },
            component: 'O'
          })
        }
      }
    }
  }

  const checkDiagonals = () => {
    if (
      matrix[0][0].component === matrix[1][1].component &&
      matrix[1][1].component === matrix[2][2].component
    ) {
      // _____________Diagonal line______________________________________

      square[0].classList.add('right_diagonal')
      square[4].classList.add('right_diagonal')
      square[8].classList.add('right_diagonal')
      audio.play() // to play the audio if match the right diagonal
      matchArea.classList.add('match-area')// to shake tha match area
      vibrate() // to perform vibration
      //* ***************************************************************
      if (matrix[0][0].component === 'X') {
        singleGameWinner({
          c1: { row: 0, col: 0 },
          c2: { row: 1, col: 1 },
          c3: { row: 2, col: 2 },
          component: 'X'
        })
      } else if (matrix[0][0].component === 'O') {
        singleGameWinner({
          c1: { row: 0, col: 0 },
          c2: { row: 1, col: 1 },
          c3: { row: 2, col: 2 },
          component: 'O'
        })
      }
    } else if (
      matrix[0][2].component === matrix[1][1].component &&
      matrix[1][1].component === matrix[2][0].component
    ) {
      square[2].classList.add('left_diagonal')
      square[4].classList.add('left_diagonal')
      square[6].classList.add('left_diagonal')
      audio.play() // to play the audio if match the left diagonal
      matchArea.classList.add('match-area')// to shake tha match area
      vibrate() // to perform vibration
      if (matrix[1][1].component === 'X') {
        singleGameWinner({
          c1: { row: 0, col: 2 },
          c2: { row: 1, col: 1 },
          c3: { row: 2, col: 0 },
          component: 'X'
        })
      } else if (matrix[1][1].component === 'O') {
        singleGameWinner({
          c1: { row: 0, col: 2 },
          c2: { row: 1, col: 1 },
          c3: { row: 2, col: 0 },
          component: 'O'
        })
      }
    }
  }

  const singleGameWinner = async ({ c1, c2, c3, component }: SingleGameWinnerProps) => {
    // doing animation
    if (component === 'X') {
      setWinner('X wins!!!')
      setScores((prev) => {
        return { ...prev, userScore: prev.userScore + 1 }
      })
    } else if (component === 'O') {
      setWinner('O wins!!!')
      setScores((prev) => {
        return { ...prev, opponentScore: prev.opponentScore + 1 }
      })
    }
    // resetGame(); // if you remove this comment line drawing animation does not appear among the little bit
    setLap((prev) => prev + 1)
  }

  const resetGame = () => {
    setMatrix([
      [
        { component: null, clicked: false },
        { component: null, clicked: false },
        { component: null, clicked: false }
      ],
      [
        { component: null, clicked: false },
        { component: null, clicked: false },
        { component: null, clicked: false }
      ],
      [
        { component: null, clicked: false },
        { component: null, clicked: false },
        { component: null, clicked: false }
      ]
    ])
    setCountTurn(0)
  }
  return (
    <section id="match-area" className="pt-3 md:pt-15 mt-12 flex justify-center align-middle">
      <div className="">
        {matrix.map((row, rowIndex) => {
          return (
            <div
              key={rowIndex}
              className="grid-area flex shadow-[0_35px_60px_-15px_rgba(1,1,1,0.3)] rounded-l-lg"
            >
              {row.map((cell, cellIndex) => {
                return (
                  <button
                    key={rowIndex + 'x' + cellIndex}
                    className={`md:w-28 w-28 md:h-28 h-28 block p-6 max-w-sm border-white font-bold ${!cell.clicked &&
                      'hover:bg-gray-100 dark:hover:bg-blue-800'
                      }  from-slate-900 to-blue-900 text-3xl ${rowIndex === 0 && 'border-b-4'
                      } ${rowIndex === 1 && 'border-y-4'} ${rowIndex === 2 && 'border-t-4'
                      } ${cellIndex === 0 && 'border-r-4'} ${cellIndex === 1 && 'border-x-4'
                      } ${cellIndex === 2 && 'border-l-4'}`}
                    disabled={cell.clicked}
                    onClick={() => {
                      setMatrix((prevMatrix) => {
                        const newMatrix = [...prevMatrix]
                        newMatrix[rowIndex][cellIndex] = turn
                          ? { component: 'X', clicked: true }
                          : { component: 'O', clicked: true }
                        return newMatrix
                      })
                      setTurn((prevTurn) => !prevTurn)
                      setCountTurn(countTurn + 1)
                    }}
                  >
                    {cell.component ? cell.component : ' '}&nbsp;
                  </button>
                )
              })}
              <br />
            </div>
          )
        })}
      </div>
    </section>
  )
}
function vibrate() {
  window.navigator.vibrate?.(400)
}
export default OfflineMatchArea
