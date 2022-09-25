import React, { useEffect, useState } from 'react'

function OfflineMatchArea({ turn, setTurn, setScores }) {
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
        if (countTurn >= 5) {
            //start to check if there is a winner
            //check rows
            checkRows()
            checkColumns()
            checkDiagonals()
        } else if (countTurn === 9) {
            alert('Draw');
            resetGame();
        }
    }, [countTurn]);

    const checkRows = async () => {
        for (let i = 0; i < 3; i++) {
            if (matrix[i][0].component === matrix[i][1].component && matrix[i][1].component === matrix[i][2].component) {
                if (matrix[i][0].component === '1') {
                    singleGameWinner({ c1: { row: i, col: 0 }, c2: { row: i, col: 1 }, c3: { row: i, col: 2 }, component: '1' });
                } else if (matrix[i][0].component === '0') {
                    singleGameWinner({ c1: { row: i, col: 0 }, c2: { row: i, col: 1 }, c3: { row: i, col: 2 }, component: '0' });
                }
            }
        }
    }
    const checkColumns = async () => {
        for (let i = 0; i < 3; i++) {
            if (matrix[0][i].component === matrix[1][i].component && matrix[1][i].component === matrix[2][i].component) {
                if (matrix[0][i].component === '1') {
                    singleGameWinner({ c1: { row: i, col: 0 }, c2: { row: i, col: 1 }, c3: { row: i, col: 2 }, component: '1' });
                } else if (matrix[0][i].component === '0') {
                    singleGameWinner({ c1: { row: i, col: 0 }, c2: { row: i, col: 1 }, c3: { row: i, col: 2 }, component: '0' });
                }
            }
        }
    }

    const checkDiagonals = async () => {
        if (matrix[0][0].component === matrix[1][1].component && matrix[1][1].component === matrix[2][2].component) {
            if (matrix[0][0].component === '1') {
                singleGameWinner({ c1: { row: 0, col: 0 }, c2: { row: 1, col: 1 }, c3: { row: 2, col: 2 }, component: '1' });
            } else if (matrix[0][0].component === '0') {
                singleGameWinner({ c1: { row: 0, col: 0 }, c2: { row: 1, col: 1 }, c3: { row: 2, col: 2 }, component: '0' });
            }
        } else if (matrix[0][2].component === matrix[1][1].component && matrix[1][1].component === matrix[2][0].component) {
            if (matrix[1][1].component === '1') {
                singleGameWinner({ c1: { row: 0, col: 2 }, c2: { row: 1, col: 1 }, c3: { row: 2, col: 0 }, component: '1' });
            } else if (matrix[1][1].component === '0') {
                singleGameWinner({ c1: { row: 0, col: 2 }, c2: { row: 1, col: 1 }, c3: { row: 2, col: 0 }, component: '0' });
            }
        }
    }

    const singleGameWinner = async ({ c1, c2, c3, component }) => {
        //doing animation
        if (component === '1') {
            alert('X wins');
            setScores((prev) => {
                return { ...prev, userScore: prev.userScore + 1 }
            });
        } else if (component === '0') {
            alert('O wins');
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
    }
    return (
        <section className="pt-3 flex justify-center align-middle">
            <div className="">
                {
                    matrix.map((row, rowIndex) => {
                        return (<div key={rowIndex} className='flex gap-1'>
                            {
                                row.map((cell, cellIndex) => {
                                    return (<button key={rowIndex + 'x' + cellIndex} className='bg-gray-900'
                                        disabled={cell.clicked}
                                        onClick={() => {
                                            setMatrix((prevMatrix) => {
                                                const newMatrix = [...prevMatrix];
                                                newMatrix[rowIndex][cellIndex] = (turn ? { component: '1', clicked: true } : { component: '0', clicked: true });
                                                return newMatrix;
                                            });
                                            setTurn((prevTurn) => !prevTurn);
                                            setCountTurn(countTurn + 1);
                                        }}>{cell.component ? cell.component : 'tile ' + rowIndex + 'x' + cellIndex}&nbsp;</button>)
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