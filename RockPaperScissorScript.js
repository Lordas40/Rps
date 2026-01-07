
function playAGame(){
    let playerPoints = 0;
    let pcPoints = 0;
    let countRounds = 1;
    let result = document.getElementById("resultScore");

    for (let i = 1; i <= 5; i++){
        const humanChoice = playerChoice();
        const computerChoice = pcChoice();
        gameLogic(humanChoice, computerChoice);
        countRounds++;
        console.log(countRounds-1);
    }
      if (playerPoints > pcPoints){
        alert(`Player Won: Player Score - ${playerPoints}. Pc Score - ${pcPoints}`);
        result.innerHTML = `Player Won: Player Score - ${playerPoints}. Pc Score - ${pcPoints}`;
        playerPoints = 0;
        pcPoints = 0;
    } else if (playerPoints < pcPoints){
        alert(`Pc Won: Player Score - ${playerPoints}. Pc Score - ${pcPoints}`);
        result.innerHTML = `Pc Won: Player Score - ${playerPoints}. Pc Score - ${pcPoints}`;
        playerPoints = 0;
        pcPoints = 0;
    } else {
        alert(`None won the round: Player Score - ${playerPoints}. Pc Score - ${pcPoints}`);
        result.innerHTML = `None won the round: Player Score - ${playerPoints}. Pc Score - ${pcPoints}`;
        playerPoints = 0;
        pcPoints = 0;
    }
    function gameLogic(humanChoice, computerChoice){
    let playerPick = humanChoice;
    let pcPick = computerChoice;
        if(playerPick === 'rock' && pcPick === "scissors" || playerPick === 'scissors' && pcPick === "paper" || playerPick === 'paper' && pcPick === "rock") {
            alert(`${countRounds}. Player Wins! Player picked ${playerPick.toUpperCase()} and pc picked ${pcPick.toUpperCase()}`);
            playerPoints++;
        } else if (playerPick === 'rock' && pcPick === "rock" || playerPick === 'scissors' && pcPick === "scissors" || playerPick === 'paper' && pcPick === "paper"){
            alert(`${countRounds}. No one Wins! Player picked ${playerPick.toUpperCase()} and pc picked ${pcPick.toUpperCase()}`);
        } else if (playerPick !== 'rock' && playerPick !== 'scissors' && playerPick !== 'paper'){
            alert("Wrong choice!");
        } else {
            alert(`${countRounds}. Pc Wins! Player picked ${playerPick.toUpperCase()} and pc picked ${pcPick.toUpperCase()}`);
            pcPoints++;
        }
     
        const testSpan = document.getElementById('testSpan').innerHTML = `Player picked ${playerPick.toUpperCase()} and pc picked ${pcPick.toUpperCase()}`;
        const forPlayer = document.getElementById('playerChoice').innerHTML = playerPoints;
        const forPc = document.getElementById('pcChoice').innerHTML = pcPoints;
    }
}

function pcChoice() {
    const getNumber = Math.floor(Math.random() * 3) + 1;
    let randomPick = getNumber;
    if(randomPick === 1){
        randomPick = "rock";
    } else if(randomPick === 2) {
        randomPick = "paper";
    } else {
        randomPick = "scissors";
    }
    const test = document.getElementById('testSpan').innerHTML = randomPick;
    return randomPick;
}

function playerChoice(){
    const choices = ['Rock, ', 'Paper, ', 'Scissors, '];
    let userChoice = window.prompt("Pick one of the choices: " + choices);
    let correctChoice = userChoice.toLowerCase();
    return correctChoice;
}