import React, {useState} from 'react'
import './board.css'
import Square from '../square/Square'
import calculateWinner from '../../winnerLogic'
import GameOver from '../gameOver/GameOver'

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
    let winner = calculateWinner(squares)

    function handleClick(i){
        const newSquares = [...squares]
        
        if(newSquares[i] || winner) return

        newSquares[i] = isXNext ? 'X' : 'O'

        setSquares(newSquares)
        setIsXNext(!isXNext)
    }

    function handleStart() {
        setSquares(Array(9).fill(null));
        winner = null;
      }

    const gameStatus = winner ? <GameOver 
                                    winner = {winner}
                                    onClick = {() => handleStart()}
                                /> 
                                : `Next Player: ${isXNext ? 'X' : 'O'}`

    return(
       <div >
            <h2>
                {gameStatus}
            </h2>
            <div className = 'board'>
                {squares.map((square, index) => (
                    <Square 
                        key = {index} 
                        value = {square} 
                        onClick = {() => handleClick(index)} />
                ))}
            </div>  
        </div>
    )

}

export default Board