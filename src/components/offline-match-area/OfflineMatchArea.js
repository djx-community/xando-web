import React, { useEffect, useState } from 'react'

function OfflineMatchArea({ turn, setTurn, setScores, setWinner }) {
    const [matrix, setMatrix] = useState(
        [
            [
                { component: null, clicked: false },
                { component: null, clicked: false },
                { component: null, clicked: false },
            ], [
                { component: null, clicked: false },
                { component: null, clicked: false },
                { component: null, clicked: false },
            ], [
                { component: null, clicked: false },
                { component: null, clicked: false },
                { component: null, clicked: false },
            ]
        ]);
    const [countTurn, setCountTurn] = useState(0);
    useEffect(() => {
        if (countTurn >= 5 && countTurn < 9) {
            //start to check if there is a winner
            //check rows
            checkRows()
            checkColumns()
            checkDiagonals()
        } else if (countTurn === 9) {
            alert('Draw');
            setScores((prev) => {
                return {
                    userScore: prev.userScore +1,
                    opponentScore: prev.opponentScore+1
                }
            })
            resetGame();
        }
    }, [countTurn]);

    const checkRows = async () => {
        for (let i = 0; i < 3; i++) {
            if (matrix[i][0].component === matrix[i][1].component && matrix[i][1].component === matrix[i][2].component) {
                if (matrix[i][0].component === 'X') {
                    singleGameWinner({ c1: { row: i, col: 0 }, c2: { row: i, col: 1 }, c3: { row: i, col: 2 }, component: 'X' });
                } else if (matrix[i][0].component === 'O') {
                    singleGameWinner({ c1: { row: i, col: 0 }, c2: { row: i, col: 1 }, c3: { row: i, col: 2 }, component: 'O' });
                }
            }
        }
    }
    
    const checkColumns = async () => {
        for (let i = 0; i < 3; i++) {
            if (matrix[0][i].component === matrix[1][i].component && matrix[1][i].component === matrix[2][i].component) {
                if (matrix[0][i].component === 'X') {
                    singleGameWinner({ c1: { row: i, col: 0 }, c2: { row: i, col: 1 }, c3: { row: i, col: 2 }, component: 'X' });
                } else if (matrix[0][i].component === 'O') {
                    singleGameWinner({ c1: { row: i, col: 0 }, c2: { row: i, col: 1 }, c3: { row: i, col: 2 }, component: 'O' });
                }
            }
        }
    }

    const checkDiagonals = async () => {
        if (matrix[0][0].component === matrix[1][1].component && matrix[1][1].component === matrix[2][2].component) {
            if (matrix[0][0].component === 'X') {
                singleGameWinner({ c1: { row: 0, col: 0 }, c2: { row: 1, col: 1 }, c3: { row: 2, col: 2 }, component: 'X' });
            } else if (matrix[0][0].component === 'O') {
                singleGameWinner({ c1: { row: 0, col: 0 }, c2: { row: 1, col: 1 }, c3: { row: 2, col: 2 }, component: 'O' });
            }
        } else if (matrix[0][2].component === matrix[1][1].component && matrix[1][1].component === matrix[2][0].component) {
            if (matrix[1][1].component === 'X') {
                singleGameWinner({ c1: { row: 0, col: 2 }, c2: { row: 1, col: 1 }, c3: { row: 2, col: 0 }, component: 'X' });
            } else if (matrix[1][1].component === 'O') {
                singleGameWinner({ c1: { row: 0, col: 2 }, c2: { row: 1, col: 1 }, c3: { row: 2, col: 0 }, component: 'O' });
            }
        }
    }

    const singleGameWinner = async ({ c1, c2, c3, component }) => {
        //doing animation
        if (component === 'X') {
            setWinner('X wins!!!');
            setScores((prev) => {
                return { ...prev, userScore: prev.userScore + 1 }
            });
        } else if (component === 'O') {
            setWinner('O wins!!!');
            setScores((prev) => {
                return { ...prev, opponentScore: prev.opponentScore + 1 }
            });
        }
        resetGame();
    }

    const resetGame = () => {
        setMatrix(
            [
                [
                    { component: null, clicked: false },
                    { component: null, clicked: false },
                    { component: null, clicked: false },
                ], [
                    { component: null, clicked: false },
                    { component: null, clicked: false },
                    { component: null, clicked: false },
                ], [
                    { component: null, clicked: false },
                    { component: null, clicked: false },
                    { component: null, clicked: false },
                ]
            ]);
        setCountTurn(0)
    }
    return (
        <section className="pt-3 md:pt-16 flex justify-center align-middle">
            <div className="">
                {
                    matrix.map((row, rowIndex) => {
                        return (<div key={rowIndex} className='flex'>
                            {
                                row.map((cell, cellIndex) => {
                                    return (<button key={rowIndex + 'x' + cellIndex}
                                        className={`md:w-28 w-20 md:h-28 h-20 block p-6 max-w-sm border-white font-bold
                                       ${!cell.clicked && 'hover:bg-gray-100 dark:hover:bg-blue-800'}  ddark:bg-gradient-to-r from-slate-900 to-blue-900 text-3xl 
                                       ${rowIndex === 0 && 'border-b-4'} ${rowIndex === 1 && 'border-y-4'} ${rowIndex === 2 && 'border-t-4'} 
                                       ${cellIndex === 0 && 'border-r-4'} ${cellIndex === 1 && 'border-x-4'} ${cellIndex === 2 && 'border-l-4'}`}
                                        disabled={cell.clicked}
                                        onClick={() => {
                                            setMatrix((prevMatrix) => {
                                                const newMatrix = [...prevMatrix];
                                                newMatrix[rowIndex][cellIndex] = (turn ? { component: 'X', clicked: true } : { component: 'O', clicked: true });
                                                return newMatrix;
                                            });
                                            setTurn((prevTurn) => !prevTurn);
                                            setCountTurn(countTurn + 1);
                                        }}>{cell.component ? cell.component : ' '}&nbsp;

                                    </button>)
                                })
                            }
                            <br />
                        </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default OfflineMatchArea