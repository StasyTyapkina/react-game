import React, {useState} from 'react';
import './board.css';
import Square from '../square/Square';
import calculateWinner from "../../winnerLogic";

const Board = (/*{squares, onClick}*/) => {

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

    const renderSquare = (i) =>{
        return <Square value = {squares[i]} onClick = {() => handleClick(i)}/>
    }

    return(
        <div >
            <h3>Winner is: {winner}</h3>
            <div className="board"> 
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}

                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>   
        </div>
    )



    /*<div className = 'board'>
        {squares.map((square, index) => (
            <Square 
                key = "index" 
                value = {square} 
                onClick = {() => onClick(index)} />
        ))}
    </div>*/
}

export default Board