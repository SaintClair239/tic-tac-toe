const Players = function (token, hasWon){
    const placeToken = function (event){
        for(let i = 0; i < gameMechanic.board.length; i++) {
            gameMechanic.board.splice(Array.prototype.indexOf.call(spaces, event.target), 1, this.token)
            spaces[i].textContent = gameMechanic.board[i]    
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
            if (gameMechanic.board[winning[0]] == this.token && gameMechanic.board[winning[1]] == this.token && gameMechanic.board[winning[2]] == this.token) {
                this.hasWon =  true
            }            
        })
    }

    return {token, placeToken, isActive, checkWin, hasWon}
}

const playerOne = Players("X", false);
const playerTwo = Players("O", false);

const Game = function (){
    const board = ["", "", "", "", "", "", "", "", ""]

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
        
    return {placeToken, changeTurn, board}
}

const gameMechanic = Game ()

const DisplayWin = (function (){
    const win = document.querySelector('h2');
    const displayWin = function (){
       if (playerOne.hasWon) {
           win.textContent = "Player One has won!"
       } else if (playerTwo.hasWon) {
           win.textContent = "Player Two has won!"
       } else if (!gameMechanic.board.includes("") && playerOne.hasWon == false && playerTwo.hasWon == false) {
           win.textContent = "Draw!"
       }
    }   

    return {displayWin}
})()

const spaces = document.querySelectorAll('.board-grid');
spaces.forEach(space => space.addEventListener('click', (e)=> {
    if (e.target.textContent == "" && (playerOne.hasWon != true || playerOne.hasWon != true)) {
        gameMechanic.placeToken()
        gameMechanic.changeTurn()
    }

    playerOne.checkWin()
    playerTwo.checkWin()
    DisplayWin.displayWin()
 }))