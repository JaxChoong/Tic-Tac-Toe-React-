import { useState } from 'react';

function Square({value, onSquareClick}) {
    return (
        <button className="square" onClick={onSquareClick}> 
            {value}    
        </button>
    )
  }

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares,setSquares] = useState(Array(9).fill(null));
  function handleClick(i) {
    if ( calculateWinner(squares) || squares[i] ){
        return;
    }
    const nextSquares = squares.slice();    // creates a copy of the "squares" array into "nextSquares"
    if(xIsNext){
        nextSquares[i] = "X";
    } else{
        nextSquares[i] = "O";
    }
    
    setSquares(nextSquares);                // updates squares on screen to new squares
    setXIsNext(!xIsNext);                   // flip between X and O
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner){
    status = "Winner: " + winner;
  } else{
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
        <div className="status">{status}</div>
        <div className = "board-row">
            <Square value={squares[0]} onSquareClick={()=> handleClick(0)} />
            <Square value={squares[1]} onSquareClick={()=> handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={()=> handleClick(2)}/>
        </div>
        <div className = "board-row">
            <Square value={squares[3]} onSquareClick={()=> handleClick(3)} />
            <Square value={squares[4]} onSquareClick={()=> handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={()=> handleClick(5)}/>
        </div>
        <div className = "board-row">
            <Square value={squares[6]} onSquareClick={()=> handleClick(6)} />
            <Square value={squares[7]} onSquareClick={()=> handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={()=> handleClick(8)}/>
        </div>  
    </>
  );
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],    // Horizontal win conditions
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],   // Vertical win conditions
      [0, 4, 8],
      [2, 4, 6]   //Diagonal win conditions
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];        // Cycles through win conditions
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {   
        // Checks if the values in the indexes of 'square' are the same, and if they match win condition.
        return squares[a];
      }
    }
    return null;
  }