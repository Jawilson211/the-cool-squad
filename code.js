let activePlayer = "X"
let spaces = ["","","","","","","","","",]
const winCon = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let messageBox = document.getElementById("text")
let gridItems = document.getElementsByClassName("grid")

const draw = "Game was a draw!"
const errorMsg = "Please pick an empty space!"

function updateGameState(num){
    if(!spaces[num] == "") {
        console.log("Help me")
        messageBox.innerHTML = errorMsg
    }else if(spaces[num] == ""){
        console.log("click")
        spaces[num] = activePlayer
        activePlayer = (activePlayer === "X") ? "O" : "X"
        let currentTurn = "It's Player " + activePlayer +"'s turn"
        messageBox.innerHTML = currentTurn
        
        updateGrid()
    }
    console.log(spaces)
}

function updateGrid() {
    for(i=0; i<gridItems.length; i++) {
        gridItems[i].innerHTML = spaces[i]
        if(spaces[i] == "X") {
            gridItems[i].style.color = "#9A3334"
        }
        if(spaces[i] == "O") {
            gridItems[i].style.color = "#3399FF"
        }
    }
    
    winChecker()
}

function winChecker() {
    console.log("check win")
    for(i=0; i<winCon.length; i++){
        let currentWinCon = winCon[i]
        let one = spaces[currentWinCon[0]]
        let two = spaces[currentWinCon[1]]
        let three = spaces[currentWinCon[2]]

        if(one == "X" && two == "X" && three == "X"){
            console.log("X wins")
            gameOver("x")
        } else if(one == "O" && two == "O" && three == "O"){
            console.log("O wins")
            gameOver("o")
        } else if(!spaces.includes("")){
            gameOver("draw")
        }
    }
}

function gameOver(result) {
    if(result == "x"){
        console.log("win")
        activePlayer = "X"
        messageBox.innerHTML = "Player X wins!"
        setTimeout(function() { restart(); }, 2000);
    }
    if(result == "o"){
        console.log("win")
        activePlayer = "O"
        messageBox.innerHTML = "Player O wins!"
        setTimeout(function() { restart(); }, 2000);
    }
    if(result == "draw"){
        console.log("win")
        messageBox.innerHTML = draw
        setTimeout(function() { restart(); }, 2000);
    }
}

function restart() {
    activePlayer = "X"
    spaces = ["","","","","","","","","",]
    for(i=0; i<gridItems.length; i++) {
        gridItems[i].innerHTML = ""
    }
    messageBox.innerHTML = "It's Player " + activePlayer +"'s turn"
}

gridItems[0].addEventListener("click", function(){ updateGameState(0); })
gridItems[1].addEventListener("click", function(){ updateGameState(1); })
gridItems[2].addEventListener("click", function(){ updateGameState(2); })
gridItems[3].addEventListener("click", function(){ updateGameState(3); })
gridItems[4].addEventListener("click", function(){ updateGameState(4); })
gridItems[5].addEventListener("click", function(){ updateGameState(5); })
gridItems[6].addEventListener("click", function(){ updateGameState(6); })
gridItems[7].addEventListener("click", function(){ updateGameState(7); })
gridItems[8].addEventListener("click", function(){ updateGameState(8); })