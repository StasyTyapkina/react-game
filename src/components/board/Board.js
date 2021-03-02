import React, {useState} from 'react';
import './board.css';
import Square from '../square/Square';
import calculateWinner from "../../winnerLogic";

const Board = () => {

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(squares)

    function handleClick(i){
        const newSquares = [...squares]

        if(newSquares[i] || winner) return;

        newSquares[i] = isXNext ? "X" : "O";

        setSquares(newSquares);
        setIsXNext(!isXNext);
    }

    return(
       <div >
            <h3>Winner is: {winner}</h3>
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