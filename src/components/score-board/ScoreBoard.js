import React from 'react'
import './ScoreBoard.css'

function ScoreBoard({ userScore, opponentScore }) {
    return (
        <center>
            <table class="text-center w-28 shadow-xl shadow-blue-800">
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
        </center>
    )
}

export default ScoreBoard