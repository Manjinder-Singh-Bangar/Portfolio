import React, { useState, useEffect } from 'react'
import { randomIntFromInterval, reverseLinkedList, useInterval } from '../utils/utils.js';
import "../index.scss"

class LinkedListNode {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const node = new LinkedListNode(value)
        this.head = node;
        this.tail = node;
    }
}

const Direction = {
    UP: 'UP',
    RIGHT: 'RIGHT',
    DOWN: 'DOWN',
    LEFT: 'LEFT'
}

const COL_SIZE = 22;
const ROW_SIZE = 40;

const getStartingSnakeLLValue = (board) =>{
    const rowSize = board.length;
    const colSize = board[0].length
    const startingRow = Math.round(rowSize / 3)
    const startingCol = Math.round(colSize / 3)
    const startingCell = board[startingRow][startingCol]

    return {
        row: startingRow,
        col: startingCol,
        cell: startingCell
    }
}

const Board = ({foodEatenCount, isGameOver}) => {
    const [food, setFood] = useState(10);
    const [foodEaten, setFoodEaten] = useState([])
    const [board, setBoard] = useState(createBoard(COL_SIZE));
    const [snake, setSnake] = useState(new LinkedList(getStartingSnakeLLValue(board)));
    // console.log(snake)
    const [snakeCells, setSnakeCells] = useState(new Set([snake.head.value.cell]));
    // console.log(board)
    const [foodCell, setFoodCell] = useState(() => {
        let initialFoodCell;
        do {
            initialFoodCell = randomIntFromInterval(1, ROW_SIZE * COL_SIZE);
        } while (initialFoodCell === snake.head.value.cell); // Ensure food is not on the snake's starting position
        return initialFoodCell;
    });
    // console.log(snake)
    const [direction, setDirection] = useState(Direction.RIGHT);
    const [gameOver, setGameOver] = useState(false)
    

    useEffect(()=>{
        window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    },[])

    useInterval(() =>{
        if(!gameOver){
            moveSnake();

        }
    }, 150)

    const handleKeyDown = (e) =>{
        // console.log(e.key)
        const newDirection = getDirectionFromKey(e.key)
        const isValidDirection = newDirection !== '';
        if(!isValidDirection) return;
        const snakeWillRunIntoItself = getOppositeDirection(newDirection) === direction && snakeCells.size > 1;
        if(snakeWillRunIntoItself) return;
        setDirection(newDirection)
    }

    const moveSnake = () =>{
        
        const currentHeadCoords = {
            row: snake.head.value.row,
            col: snake.head.value.col
        }

        const nextHeadCoords = getCoordsInDirection(currentHeadCoords, direction);

        if(isOutOfBounds(nextHeadCoords, board)){
            setGameOver(true)
            handleGameOver();
            return;
        }

        const nextHeadCell = board[nextHeadCoords.row][nextHeadCoords.col]

        if(snakeCells.has(nextHeadCell)){
            handleGameOver();
            return;
        }

        const newHead = new LinkedListNode({
            row: nextHeadCoords.row,
            col: nextHeadCoords.col,
            cell: nextHeadCell,
        })

        const currentHead = snake.head;

        snake.head = newHead;
        currentHead.next = newHead;

        const newSnakeCells = new Set(snakeCells)
        newSnakeCells.delete(snake.tail.value.cell);
        newSnakeCells.add(nextHeadCell);

        snake.tail = snake.tail.next;

        if(snake.tail === null) snake.tail = snake.head;

        const foodConsumed = nextHeadCell === foodCell;

        if(foodConsumed){
            
            setFood((prevFood) =>{
                return prevFood - 1
            })
            growSnake(newSnakeCells);
            
            handleFoodConsumption(newSnakeCells);
            setFoodEaten((prev) =>{
                return [...prev, prev.length]
            })
            
        }

        setSnakeCells(newSnakeCells);
    }
    
    // console.log(foodEaten)

    const growSnake = (newSnakeCells) =>{
        const growthNodeCoords = getGrowthNodeCoords(snake.tail, direction);
        if(isOutOfBounds(growthNodeCoords, board)){
            
            return;
        }
        
        const newTailCell = board[growthNodeCoords.row][growthNodeCoords.col]
        const newTail = new LinkedListNode({
            row: growthNodeCoords.row,
            col: growthNodeCoords.col,
            cell: newTailCell,

        })

        const currentTail = snake.tail;
        snake.tail = newTail;
        snake.tail.next = currentTail;

        newSnakeCells.add(newTailCell)
    }

    const handleFoodConsumption = (newSnakeCells) =>{
        
        const maxPossibleCellValue = ROW_SIZE * COL_SIZE;
        let nextFoodCell;

        while(true){
            nextFoodCell = randomIntFromInterval(1, maxPossibleCellValue);
            if(newSnakeCells.has(nextFoodCell) || foodCell === nextFoodCell){
                continue
            }
            break
        }
        setFoodCell(nextFoodCell);
        if(foodEaten.length >= 10){
            setGameOver(true)
            handleGameOver();

        }
        foodEatenCount(foodEaten)
    }

    useEffect(()=>{
        isGameOver(gameOver)
        const snakeLLStartingValue = getStartingSnakeLLValue(board);
        setSnakeCells(new Set());
    },[gameOver])

    const handleGameOver = () =>{
        // console.log(gameOver)
        isGameOver(gameOver)
        setFoodEaten([])
        setFood(10);
        const snakeLLStartingValue = getStartingSnakeLLValue(board);
        setSnake(new LinkedList(snakeLLStartingValue));
        setFoodCell(snakeLLStartingValue.cell + 5)
        setSnakeCells(new Set());
        setDirection(Direction.RIGHT);
        document.querySelectorAll(".cell-green").forEach(cell => {
            cell.classList.remove("cell-green");
        });
    };

    return (
        <>
          {gameOver === false ? (
            <>
              <div className="w-full z-20  h-full flex justify-center flex-col items-center">
                <div className='w-fit rounded-md '>
                {board.map((row, rowIdx) => (
                  <div className="flex w-fit" key={rowIdx}>
                    {row.map((cell, cellIdx) => {
                      const className = getCellClassName(
                        cell,
                        foodCell,
                        snakeCells
                      );
    
                      return (
                        <div className={`${className} col z-20`} key={cellIdx}>
                          
                        </div>
                      );
                    })}
                  </div>
                ))}
                </div>
                
              </div>
            </>
          ) : (
            <button className='bg-[#011627] p-3 w-full text-2xl text-[#43D9AD]' onClick={() => setGameOver(false)}>Start again</button>
          )}
        </>
      );
    };

const createBoard = (size) =>{
    let counter = 1;
    const board = []
    for(let row= 0; row < ROW_SIZE; row++){
        const currentRow = [];
        for (let col = 0; col < size; col++) {
            currentRow.push(counter++)
            
        }
        board.push(currentRow)
    }
    // console.log(board)
    return board
}

const getCoordsInDirection = (coords, direction) =>{
    if(direction === Direction.UP){
        return {
            row: coords.row - 1,
            col: coords.col,
        }
    }
    if(direction === Direction.RIGHT){
        return {
            row: coords.row,
            col: coords.col + 1,
        }
    }
    if(direction === Direction.DOWN){
        return {
            row: coords.row + 1,
            col: coords.col,
        }
    }
    if(direction === Direction.LEFT){
        return {
            row: coords.row,
            col: coords.col -1,
        }
    }
}

const isOutOfBounds = (coords, board) =>{
    if(coords === undefined) return setGameOver(true);
    const {row, col} = coords;
    if(row < 0 || col < 0) return true;
    if(row >= board.length || col >= board[0].length) return true;
    return false;
}

const getDirectionFromKey = (key) =>{
    if(key === "ArrowUp") return Direction.UP;
    if(key === "ArrowRight") return Direction.RIGHT;
    if(key === "ArrowDown") return Direction.DOWN;
    if(key === "ArrowLeft") return Direction.LEFT;
}

const getNextNodeDirection = (node, currentDirection) =>{

    if(node.next === null) return currentDirection;

    const {row: currentRow, col: currentCol} = node.value;

    const {row: nextRow, col: nextCol} = node.next.value;

    if(nextRow === currentRow && nextCol === currentCol + 1){

        return Direction.RIGHT;

    }

    if(nextRow === currentRow && nextCol === currentCol - 1){
        return Direction.LEFT;

    }

    if(nextCol === currentCol && nextRow === currentRow + 1){
        return Direction.DOWN;
    }

    if(nextCol === currentCol && nextRow === currentRow - 1){
        return Direction.UP;
    }

    return '';
}

const getGrowthNodeCoords = (snakeTail, currentDirection) => {
    const tailNextNodeDirection = getNextNodeDirection(
        snakeTail,
        currentDirection,
    )

    const growthDirection = getOppositeDirection(tailNextNodeDirection);

    const currentTailCoords = {
        row: snakeTail.value.row,
        col: snakeTail.value.col,
    }

    const growthNodeCoords = getCoordsInDirection(
        currentTailCoords,
        growthDirection,
    )

    return growthNodeCoords;
}

const getOppositeDirection = (direction) =>{
    if(direction === Direction.UP) return Direction.DOWN;
    if(direction === Direction.LEFT) return Direction.RIGHT;
    if(direction === Direction.RIGHT) return Direction.LEFT;
    if(direction === Direction.DOWN) return Direction.UP;

}

const getCellClassName = (
    cellValue,
    foodCell,
    snakeCells,
) =>{
    let className = 'cell';
    if(cellValue === foodCell) {
            className = 'cell cell-red'
        }

    if(snakeCells.has(cellValue)) className = 'cell cell-green';
    return className;
}

export default Board