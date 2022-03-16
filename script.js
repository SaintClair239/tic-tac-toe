const GameBoard = function (){
    const gameBoard = ["", "", "", "", "", "", "", "", ""]
    return {gameBoard}
}

const gameBoard = GameBoard() 

const Players = function (token, hasWon){
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

    const winningCombination = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    const checkWin = function (){
        winningCombination.forEach(winning => {
            if (gameBoard.gameBoard[winning[0]] == this.token && gameBoard.gameBoard[winning[1]] == this.token && gameBoard.gameBoard[winning[2]] == this.token) {
                console.log(this.token)
                this.hasWon =  true
            }   
                
        })
    }

    return {token, placeToken, isActive, checkWin, hasWon}
}

const playerOne = Players("X", false);
const playerTwo = Players("O", false);

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
    if (e.target.textContent == "" && (playerOne.hasWon != true || playerOne.hasWon != true)) {
        gameMechanic.placeToken()
        gameMechanic.changeTurn()
    }

    playerOne.checkWin()
    playerTwo.checkWin()
    console.log(playerOne.hasWon)
    console.log(playerTwo.hasWon)
 }))
