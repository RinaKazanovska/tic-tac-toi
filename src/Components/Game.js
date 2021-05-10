import React, { useState } from 'react';
import { calculateWinner } from '../Helpers';
import Board from './Board'

const Game = () => {
    const[board, setBoard] = useState(Array(9).fill(null));

    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);


    const handleClick = (i) => {
        const boardCopy = [...board]; // reference number will be different from board reference
        //If user clicks an occupied square or if game is won, return
        if (winner !== null || boardCopy[i] !== null) return;
        // Put an X or an O in thes clicked square
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }
   
    return(
        <>
        <Board squares={board} onClick={handleClick} /> {/*squares and OnClick are props*/}
        {winner && <h1 className = "winner"><span className = "winnercolor">{winner} </span> Won!</h1>   }
        </>
    )
}

export default Game