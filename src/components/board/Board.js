import React, {useState, useEffect} from 'react'
import useSound from 'use-sound';
import './board.css'
import Square from '../square/Square'
import calculateWinner from '../../winnerLogic'
import GameOver from '../gameOver/GameOver'
import Button from '../button/Button'
import ModalWindow from '../modal/ModalWindow'
import soundSquare from '../music/Chord_3.mp3';

const Board = () => {
    let storedSquares  = JSON.parse(localStorage.getItem('squaresLocalStorage'));
    const [squares, setSquares] = useState( storedSquares || Array(9).fill(null) )
    const [isXNext, setIsXNext] = useState(true)
    let winner = calculateWinner(squares)
    const [play] = useSound(soundSquare);

    const [prevSquareIndex, setPrevSquareIndex] = useState(null)

    function handleClick(i){
        const newSquares = [...squares]
        setPrevSquareIndex(i)

        if(newSquares[i] || winner) return
         
        newSquares[i] = isXNext ? 'X' : 'O'
        
        setSquares(newSquares)
        setIsXNext(!isXNext)
        play()

    }

    useEffect(() => {
        localStorage.setItem('squaresLocalStorage', JSON.stringify(squares));
    }, [squares]);

    function handleStart() {
        setSquares(Array(9).fill(null));
        setIsXNext(!isXNext)
        winner = null 
    }

    function handlePrevMove(i) {
        const newSquares = [...squares]
        newSquares[prevSquareIndex] = isXNext ? 'O' : 'X'
        setIsXNext(!isXNext)
        newSquares[prevSquareIndex] = null
        setSquares(newSquares)
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
            <div className = 'button_section'>
                <Button 
                    class = 'bttn bttn_middle'
                    name = 'New game' 
                    onClick = {() => handleStart()} />

                    <Button 
                    class = 'bttn bttn_small'
                    name = {<i className="fas fa-undo-alt"/>}
                    title = 'Click to return to the previous move'
                    onClick = {() => handlePrevMove()} />
               
                <ModalWindow />
            </div> 
        </div>
    )

    

}

export default Board