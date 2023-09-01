import React from 'react'
import './ScoreBoard.css'

function ScoreBoard ({ userScore, opponentScore, bestOf }) {
  return (
        <section className="md:pt-3 pt-24 flex justify-center align-middle">
            <div className="flex-col">
                <h1 className='text-center md:text-lg text-base pb-1'>Best of {bestOf}</h1>
                <table className="text-center md:w-28 w-20 shadow-xl shadow-blue-800">
                    <thead>
                        <tr>
                            <th className='' colSpan={2}>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=''>{opponentScore}</td>
                            <td className=''>{userScore}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
  )
}

export default ScoreBoard
