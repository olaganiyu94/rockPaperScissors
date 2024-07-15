//get the elements
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const container = document.querySelector(".container");

//Button
const replay = document.getElementById("replay");

//Results
const resultContainer = document.querySelector(".result-container");
const resultPlace = document.getElementById("result");
const firstItem = document.getElementById("first-item");
const secondItem = document.getElementById("second-item");
const firstItemText= document.getElementById("first-item-text");
const secondItemText= document.getElementById("second-item-text");
const presentplayerScore = document.getElementById("current-player-score");
const presentcomputerScore = document.getElementById("current-computer-score");
//Leaderboard
const playerScorePlace = document.getElementById("player-score");
const computerScorePlace = document.getElementById("computer-score");
const drawScorePlace = document.getElementById("draw-score");

//Scores
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

//function
const play = (element) => {
    const playerChoice = element;
    const computerChoice = selectRandom();

    // Hide the element not selected by both
    changeTheLayout(playerChoice, computerChoice);

    const result = compere(playerChoice, computerChoice); 
    const [playerPoints, computerPoints] = result;

    //Who winner text
    let resultText = "";

    if(playerPoints > computerPoints){

        resultText = "You won!Сongrats🎉";
        resultPlace.style.color = "green";
        playerScore += 1;

    } else if (playerPoints < computerPoints) {

        resultText = "You lost!😥 Unlucky";
        resultPlace.style.color = "red";
        computerScore += 1;

    } else {
        resultText = "It's a draw!😒";
        resultPlace.style.color = "black";
        drawScore += 1;
    }
    // update the result text
    resultPlace.innerText = resultText;
    firstItemText.innerText = `You picked ${playerChoice}`;
    secondItemText.innerText = `Computer picked ${computerChoice}`;
    presentplayerScore.innerText = playerPoints;
    presentcomputerScore.innerText = computerPoints;

     // update the leaderboard
     playerScorePlace.innerText = playerScore; 
     computerScorePlace.innerText = computerScore; 
     drawScorePlace.innerText = drawScore; 
};

//computer selects a random element

const selectRandom = () => {
    const elements = ["rock", "paper", "scissors"]; 
    const randomNumber = Math.floor(Math.random() * 3); 
    const randomElement = elements[randomNumber]; 
    return randomElement; 
};

//Compere the choices
const compere = (playerChoice, computerChoice) =>{
    let computerPoints = 0;
    let playerPoints = 0;

//Draw
    if(playerChoice === computerChoice){
        return [playerPoints, computerPoints];
    }

    switch(playerChoice) {
        case "rock":
            computerChoice === "scissors" ? (playerPoints += 1) : (computerPoints += 1);
            break;
        case "paper":
            computerChoice === "rock" ? (playerPoints += 1) : (computerPoints += 1);
            break;
        case "scissors":
            computerChoice === "paper" ? (playerPoints += 1) : (computerPoints +=1 );
            break;
        default:
            console.log("Error");
    }

    return [playerPoints, computerPoints]; 

};

//add event listeners
rock.addEventListener("click", () => play("rock"));
paper.addEventListener("click", () => play("paper"));
scissors.addEventListener("click", () => play("scissors"));
replay.addEventListener("click", () => replayGame());

// Hide the element not selected by both
let changeTheLayout = (playerChoice, computerChoice) => {

    // show the result container
  resultContainer.style.display = "flex";

   // change the images
   firstItem.src = `./assests/images/${playerChoice}.png`;
   secondItem.src = `./assests/images/${computerChoice}.png`;

  // Scale down the container
  container.style.transform = "scale(0.5)";
  container.style.transition = "all 0.5 ease";
  container.style.pointerEvents = "none";
};

const replayGame = () => {

   // hide the result container 

   resultContainer.style.display = "none";

   //scale up the container 

   container.style.transform = "scale(1)";
   container.style.pointerEvents = "auto";
   container.style.marginTop = "0px";
};
