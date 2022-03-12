const GameBoard = {
    gameBoard:  ["", "", "", "", "", "", "", "", ""]
}

const Players = function (token){
    const placeToken = function (){
        const spaces = document.querySelectorAll('.board-grid');
        for(let i = 0; i < GameBoard.gameBoard.length; i++) {
            spaces[i].addEventListener('click', (e)=> {    
                //push token into array relative to the index of board
                GameBoard.gameBoard.splice(Array.prototype.indexOf.call(spaces, e.target), 1, this.token)
                //display array relative to the index of board
                spaces[i].textContent = GameBoard.gameBoard[i]
            })
        }
    }
    return {token, placeToken}
}

const playerTwo = Players("O")
playerTwo.placeToken()

const playerOne = Players("X")
playerOne.placeToken()

