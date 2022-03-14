const GameBoard = function (){
    const gameBoard = ["", "", "", "", "", "", "", "", ""]
    return {gameBoard}
}

const gameBoard = GameBoard() 

const Players = function (token){
    const placeToken = function (event){
        for(let i = 0; i < gameBoard.gameBoard.length; i++) {
                //push token into array relative to the index of board
                gameBoard.gameBoard.splice(Array.prototype.indexOf.call(spaces, event.target), 1, this.token)
                //display array relative to the index of board
                spaces[i].textContent = gameBoard.gameBoard[i]    
        }
    }
    const isActive = function (){
        return true
    }
    return {token, placeToken, isActive}
}

const playerOne = Players("X");
const playerTwo = Players("O");

const Game = function (){  
    const placeToken = ()=> {
        if (playerOne.isActive) {
            playerOne.placeToken(event) 
        } else playerTwo.placeToken(event)
    }

    const changeTurn = () => {
        if (playerOne.isActive) {
            playerOne.isActive = false
        } else playerOne.isActive = true
    }
        
    return {placeToken, changeTurn}
}

const gameMechanic = Game ()

const spaces = document.querySelectorAll('.board-grid');
spaces.forEach(space => space.addEventListener('click', (e)=> {
    if (e.target.textContent == "") {
        gameMechanic.placeToken()
        gameMechanic.changeTurn()
    }
    
    // checkForWinner.checkWin()
    
 }))

// const checkForWinner = (function(){
//      const winningCombination = [
//          [0,1,2],
//          [3,4,5],
//          [6,7,8],
//          [0,3,6],
//          [1,4,7],
//          [2,5,8],
//          [0,4,8],
//          [2,4,6]
//      ]
//      const checkWin = function (){
//         winningCombination.forEach(winning => {
//             if (winning.every(X))
//             console.log("X win")
//         })
//      }

//      const X = function (target){
//          target == "X"
//      }
     
//      return {checkWin}
//  })()
