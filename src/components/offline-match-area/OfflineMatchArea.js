import React, { useEffect, useState } from "react";
import "./DrawLine.css";
function OfflineMatchArea({ turn, setTurn, setScores, setWinner, setLap }) {
  const [matrix, setMatrix] = useState([
    [
      { component: null, clicked: false },
      { component: null, clicked: false },
      { component: null, clicked: false },
    ],
    [
      { component: null, clicked: false },
      { component: null, clicked: false },
      { component: null, clicked: false },
    ],
    [
      { component: null, clicked: false },
      { component: null, clicked: false },
      { component: null, clicked: false },
    ],
  ]);
  const [countTurn, setCountTurn] = useState(0);
  useEffect(() => {
    if (countTurn >= 5 && countTurn < 9) {
     let square = document.querySelectorAll(".grid-area button");  // to take each cell object to draw line
    //start to check if there is a winner
    checkRows(square);//check rows
    checkColumns(square);//check columns
    checkDiagonals(square);//check diagonals
    } else if (countTurn === 9) {
      alert("Draw"); //winner to be set as "DRAW"
      setLap((lap) => lap + 1);
      resetGame();
    }
  }, [countTurn]);

  const checkRows = (square) => {
       
//___________ For draw line through rows _______________________________________
let row_one=false,row_two=false,row_three=false;

row_one=(matrix[0][0].component === matrix[0][1].component && matrix[0][0].component === matrix[0][2].component&&matrix[0][0].component!==null);
row_two=(matrix[1][0].component === matrix[1][1].component &&matrix[1][0].component === matrix[1][2].component&&matrix[1][0].component!==null);
row_three=(matrix[2][0].component === matrix[2][1].component &&matrix[2][0].component === matrix[2][2].component&&matrix[2][0].component!==null);

if (row_one) {
  square[0].classList.add("horizontal");
  square[1].classList.add("horizontal");
  square[2].classList.add("horizontal");
}else if(row_two){
  square[3].classList.add("horizontal");
  square[4].classList.add("horizontal");
  square[5].classList.add("horizontal");
}else if(row_three){
  square[6].classList.add("horizontal");
  square[7].classList.add("horizontal");
  square[8].classList.add("horizontal");
}
// ********************************************************************************
    for (let i = 0; i < 3; i++) {
      if (
        matrix[i][0].component === matrix[i][1].component &&
        matrix[i][1].component === matrix[i][2].component
      ) {
        if (matrix[i][0].component === "X") {
          singleGameWinner({
            c1: { row: i, col: 0 },
            c2: { row: i, col: 1 },
            c3: { row: i, col: 2 },
            component: "X",
          });
        } else if (matrix[i][0].component === "O") {
          singleGameWinner({
            c1: { row: i, col: 0 },
            c2: { row: i, col: 1 },
            c3: { row: i, col: 2 },
            component: "O",
          });
        }
      }
    }
  };

  const checkColumns =  (square) => {
    
//___________ For draw line through columns _______________________________________
    let column_one=false,column_two=false,column_three=false;

    column_one=(matrix[0][0].component === matrix[1][0].component && matrix[0][0].component === matrix[2][0].component&&matrix[0][0].component!==null);
    column_two=(matrix[0][1].component === matrix[1][1].component &&matrix[0][1].component === matrix[2][1].component&&matrix[0][1].component!==null);
    column_three=(matrix[0][2].component === matrix[1][2].component &&matrix[0][2].component === matrix[2][2].component&&matrix[0][2].component!==null);
    
    if (column_one) {
      square[0].classList.add("vertical");
      square[3].classList.add("vertical");
      square[6].classList.add("vertical");
    }else if(column_two){
      square[1].classList.add("vertical");
      square[4].classList.add("vertical");
      square[7].classList.add("vertical");
    }else if(column_three){
      square[2].classList.add("vertical");
      square[5].classList.add("vertical");
      square[8].classList.add("vertical");
    }
// ********************************************************************************

    for (let i = 0; i < 3; i++) {
      if (matrix[0][i].component === matrix[1][i].component||matrix[1][i].component === matrix[2][i].component) {
        if (matrix[0][i].component === "X") {
          singleGameWinner({
            c1: { row: i, col: 0 },
            c2: { row: i, col: 1 },
            c3: { row: i, col: 2 },
            component: "X",
          });
        } else if (matrix[0][i].component === "O") {
          singleGameWinner({
            c1: { row: i, col: 0 },
            c2: { row: i, col: 1 },
            c3: { row: i, col: 2 },
            component: "O",
          });
        }
      }
    }
  };

  const checkDiagonals =  (square) => {
    if (matrix[0][0].component === matrix[1][1].component &&matrix[1][1].component === matrix[2][2].component) {

//_____________Diagonal line______________________________________

      square[0].classList.add("right_diagonal");
      square[4].classList.add("right_diagonal");
      square[8].classList.add("right_diagonal");

//****************************************************************   
      if (matrix[0][0].component === "X") {
        singleGameWinner({
          c1: { row: 0, col: 0 },
          c2: { row: 1, col: 1 },
          c3: { row: 2, col: 2 },
          component: "X",
        });
      } else if (matrix[0][0].component === "O") {
        singleGameWinner({
          c1: { row: 0, col: 0 },
          c2: { row: 1, col: 1 },
          c3: { row: 2, col: 2 },
          component: "O",
        });
      }
    } else if (
      matrix[0][2].component === matrix[1][1].component &&
      matrix[1][1].component === matrix[2][0].component
    ) {
      square[2].classList.add("left_diagonal");
      square[4].classList.add("left_diagonal");
      square[6].classList.add("left_diagonal");
      if (matrix[1][1].component === "X") {
        singleGameWinner({
          c1: { row: 0, col: 2 },
          c2: { row: 1, col: 1 },
          c3: { row: 2, col: 0 },
          component: "X",
        });
      } else if (matrix[1][1].component === "O") {
        singleGameWinner({
          c1: { row: 0, col: 2 },
          c2: { row: 1, col: 1 },
          c3: { row: 2, col: 0 },
          component: "O",
        });
      }
    }
  };

  const singleGameWinner = async ({ c1, c2, c3, component }) => {
    //doing animation
    if (component === "X") {
      setWinner("X wins!!!");
      setScores((prev) => {
        return { ...prev, userScore: prev.userScore + 1 };
      });
    } else if (component === "O") {
      setWinner("O wins!!!");
      setScores((prev) => {
        return { ...prev, opponentScore: prev.opponentScore + 1 };
      });
    }
    // resetGame(); // if you remove this comment line drawing animation does not appear among the little bit  
    setLap((prev) => prev + 1);
  };

  const resetGame = () => {
    setMatrix([
      [
        { component: null, clicked: false },
        { component: null, clicked: false },
        { component: null, clicked: false },
      ],
      [
        { component: null, clicked: false },
        { component: null, clicked: false },
        { component: null, clicked: false },
      ],
      [
        { component: null, clicked: false },
        { component: null, clicked: false },
        { component: null, clicked: false },
      ],
    ]);
    setCountTurn(0);
  };
  return (
    <section className="pt-3 md:pt-16 flex justify-center align-middle">
      <div className="">
        {matrix.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="grid-area flex shadow-[0_35px_60px_-15px_rgba(1,1,1,0.3)] rounded-l-lg">
              {row.map((cell, cellIndex) => {
                return (
                  <button
                    key={rowIndex + "x" + cellIndex}
                    className={`md:w-28 w-20 md:h-28 h-20 block p-6 max-w-sm border-white font-bold ${
                      !cell.clicked &&
                      "hover:bg-gray-100 dark:hover:bg-blue-800"
                    }  from-slate-900 to-blue-900 text-3xl ${
                      rowIndex === 0 && "border-b-4"
                    } ${rowIndex === 1 && "border-y-4"} ${
                      rowIndex === 2 && "border-t-4"
                    } ${cellIndex === 0 && "border-r-4"} ${
                      cellIndex === 1 && "border-x-4"
                    } ${cellIndex === 2 && "border-l-4"}`}
                    disabled={cell.clicked}
                    onClick={() => {
                      setMatrix((prevMatrix) => {
                        const newMatrix = [...prevMatrix];
                        newMatrix[rowIndex][cellIndex] = turn
                          ? { component: "X", clicked: true }
                          : { component: "O", clicked: true };
                        return newMatrix;
                      });
                      setTurn((prevTurn) => !prevTurn);
                      setCountTurn(countTurn + 1);
                    }}
                  >
                    {cell.component ? cell.component : " "}&nbsp;
                  </button>
                );
              })}
              <br />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OfflineMatchArea;
