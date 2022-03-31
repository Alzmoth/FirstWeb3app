import { useState } from "react";
import Square from "./Square";
import millify from "millify";

const INITIAL_GRID = [
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
];
const MINE_MULTIPLIER = {
  1: 1.05,
  3: 1.1,
  5: 1.2,
  24: 25,
};

const Game = (props) => {
  const [balance, setBalance] = useState(1000);
  const [gameAmount, setGameAmount] = useState(100);
  const [gameCurrentAmount, setGameCurrentAmount] = useState(100);
  const [gameType, setGameType] = useState(1);
  const [gameStatus, setGameStatus] = useState(false);
  const [mines, setMines] = useState([]);
  const [multiplier, setMultiplier] = useState(1);

  const [grid, setGrid] = useState(INITIAL_GRID);

  const setValue = (i, j) => {
    let a = i * 5 + (j + 1);
    const newGrid = [...grid];
    if (newGrid[i][j] !== "-" || gameStatus == false) return;

    if (!mines.includes(i * 5 + j)) {
      var current = gameCurrentAmount * multiplier;
      setMultiplier((prev) => prev * 1.005);
      setGameCurrentAmount(current);
      newGrid[i][j] = millify(current);
      setGrid(newGrid);
    } else {
      endGame();
      newGrid[i][j] = "X";
      setGrid(newGrid);
    }
  };

  const createMines = (mine) => {
    var tempMines = [];
    for (let i = 0; i < mine; ++i) {
      var min = Math.floor(Math.random() * 25);
      if (tempMines.includes(min)) {
        i--;
      } else {
        tempMines[i] = min;
      }
    }
    setMines(tempMines);
  };

  const gameStart = () => {
    setGrid([
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
      ["-", "-", "-", "-", "-"],
    ]);
    if (gameStatus == true) {
      return alert("Game is already running, Firstly cash out the game");
    }
    if (gameAmount > balance) {
      return alert("You don't have enough balance");
    }
    setMultiplier(MINE_MULTIPLIER[gameType]);
    createMines(gameType);
    setBalance((prev) => prev - gameAmount);
    setGameStatus(true);
    setGameCurrentAmount(gameAmount);
  };
  const endGame = () => {
    setGameStatus(false);
    const newGrid = [...grid];
    mines.forEach((mine) => {
      let i = Math.floor(mine / 5);
      let j = mine % 5;
      newGrid[i][j] = "X";
    });
    setGrid(newGrid);
  };
  const cashOut = () => {
    if (gameStatus == true && grid !== INITIAL_GRID) {
      gameStatus && setBalance((prev) => prev + gameCurrentAmount);
    }
    endGame();
  };

  const companyCommonStyles =
    "min-h-[70px]  px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-800 text-sm font-light text-white";
  return (
    <div className="flex-col min-w-[1000px] w-[90%] ml-[20%]">
      <div className="flex flex-row  w-[70%]  bg-gray-700">
        <div className={`w-1/5 ${companyCommonStyles}`}>
          Balance: {Number(balance).toFixed(1)} ETM
        </div>

        <div className={`w-4/5 ${companyCommonStyles}`}>
          Select Number of Mines:
          <div className="flex flex-row">
            <button
              className={` ${gameType === 1 ? "border-[3px]" : "border-[1px]"}
               rounded-full h-[50px] min-w-[50px] justify-center items-center  m-3 border-green-300  hover:bg-[#615b5b]`}
              onClick={() => setGameType(1)}
            >
              1
            </button>
            <button
              className={`${
                gameType === 3 ? "border-[3px]" : "border-[1px]"
              } rounded-full h-[50px] min-w-[50px] justify-center items-center  m-3 border-yellow-400   hover:bg-[#615b5b] active:border-[3px]`}
              onClick={() => setGameType(3)}
            >
              3
            </button>
            <button
              className={` ${
                gameType === 5 ? "border-[3px]" : "border-[1px]"
              } rounded-full h-[50px] min-w-[50px] justify-center items-center  m-3 border-yellow-600 hover:bg-[#615b5b] active:border-[3px]`}
              onClick={() => setGameType(5)}
            >
              5
            </button>
            <button
              className={`${
                gameType === 24 ? "border-[3px]" : "border-[1px]"
              } rounded-full h-[50px] min-w-[50px] justify-center items-center  m-3 border-yellow-800  hover:bg-[#615b5b] active:border-[3px]`}
              onClick={() => setGameType(24)}
            >
              24
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-row  w-[70%]  bg-gray-700">
        <div className={`w-1/5 ${companyCommonStyles}`}>Enter The Amount:</div>
        <div className={`w-1/5 ${companyCommonStyles}`}>
          <input
            placeholder="Amount (ETM)"
            type="number"
            step="1"
            value={Number(gameAmount).toFixed(1)}
            max="1000"
            onChange={(e) => setGameAmount(e.target.value)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm text-right white-glassmorphism appearance-none"
          />
        </div>

        <div className={`w-3/5 ${companyCommonStyles}`}>
          <button
            className="rounded-lg h-[35px] min-w-[80px] justify-center items-center border-[1px] m-3 border-gray-800  hover:bg-[#383838]"
            onClick={(e) => setGameAmount((prev) => (prev / 2).toFixed(0))}
            minLength="1"
          >
            1/2
          </button>
          <button
            className="rounded-lg h-[35px] min-w-[80px] justify-center items-center border-[1px] m-3 border-gray-800  hover:bg-[#383838]"
            onClick={(e) =>
              setGameAmount((prev) =>
                prev * 2 < balance ? (prev * 2).toFixed(0) : balance
              )
            }
          >
            2X
          </button>
          <button
            className="rounded-lg h-[35px] min-w-[80px] justify-center items-center border-[1px] m-3 border-gray-800  hover:bg-[#383838]"
            onClick={(e) => setGameAmount(balance)}
          >
            MAX
          </button>
        </div>
        <div className={`w-1/5 ${companyCommonStyles}`}>
          <button
            className={` 
            justify-center items-center w-[80%] h-[80%] m-3 md:2 bg-[#3b8b73]  rounded-lg cursor-pointer hover:bg-[#65b8ad]`}
            onClick={gameStart}
          >
            PLAY
          </button>
        </div>
      </div>
      <div className=" flex flex-row  flex-auto w-[70%] p-5  border-[2px] border-gray-700 bg-gray-900">
        <div className=" min-w-[300px] max-w-[300px] h-[300px] bg-gray-400 flex flex-wrap">
          {grid.map((gLine, i) => {
            return gLine.map((el, j) => {
              return <Square label={el} i={i} j={j} setValue={setValue} />;
            });
          })}
        </div>

        <div className=" flex-auto ml-10 mt-10 p-4 w-[25%] h-[10%] bg-gray-800">
          <div className="text-white ">Next Reward</div>
          <div className="text-yellow-400">
            Multiplier : {Number(multiplier).toFixed(4)}
          </div>
          <div className="text-green-400">
            {(gameCurrentAmount * (MINE_MULTIPLIER[gameType] - 1)).toFixed(1)}
          </div>
        </div>
        <div className=" flex-auto ml-5 mt-10 p-4 w-[25%] h-[10%] bg-gray-800">
          <div className="text-white ">Total Reward</div>
          <div className="text-green-400">
            {Number(gameCurrentAmount).toFixed(1)}
          </div>
        </div>

        <button
          className={`flex-auto ml-5 mt-10 p-4 w-[10%] h-[10%] text-white bg-[#3b8b73]  rounded-lg cursor-pointer hover:bg-[#65b8ad]`}
          onClick={cashOut}
        >
          Cash Out
        </button>
      </div>
    </div>
  );
};
export default Game;
