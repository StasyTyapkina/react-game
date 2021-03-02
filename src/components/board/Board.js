import React, {useState} from 'react'
import useSound from 'use-sound';
import './board.css'
import Square from '../square/Square'
import calculateWinner from '../../winnerLogic'
import GameOver from '../gameOver/GameOver'
import soundSquare from '../music/Chord_3.mp3';

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isXNext, setIsXNext] = useState(true)
    //const [winner, setWinner] = useState('')
    let winner = calculateWinner(squares)
    const [play] = useSound(soundSquare);

    function handleClick(i){
        const newSquares = [...squares]
        if(newSquares[i] || winner) return

        newSquares[i] = isXNext ? 'X' : 'O'

        setSquares(newSquares)
        setIsXNext(!isXNext)
        play()
       // setWinner(winner)
    }

    function handleStart() {
        setSquares(Array(9).fill(null));
        setIsXNext(!isXNext)
        winner = null
      }

    const gameStatus = winner ? <GameOver 
                                    winner = {winner}
                                    onClick = {() => handleStart()}
                                /> 
                                : `Next move: ${isXNext ? 'X' : 'O'}`

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