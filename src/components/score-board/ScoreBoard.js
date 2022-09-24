import React from 'react'
import './ScoreBoard.css'

function ScoreBoard({ userScore, opponentScore, bestOf }) {
    return (
        <section className="pt-3 flex justify-center align-middle">
            <div className="flex-col">
                <h1 className='text-center text-lg pb-1'>Best of {bestOf}</h1>
                <table className="text-center w-28 shadow-xl shadow-blue-800">
                    <thead>
                        <tr>
                            <th className='' colSpan={2}>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=''>{userScore}</td>
                            <td className=''>{opponentScore}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ScoreBoard