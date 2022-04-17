let choice1 = document.querySelector('#choice1');
let choice2 = document.querySelector('#choice2');
let choice3 = document.querySelector('#choice3');

let computerWin = 0;
let playerWin = 0;

choice1.addEventListener('click', () => {
    playRound("rock", computerSelection());
})
choice2.addEventListener('click', () => {
    playRound("paper", computerSelection());
})
choice3.addEventListener('click', () => {
    playRound("scissors", computerSelection());
})



function computerSelection(){
    let outcome = Math.floor(Math.random()*3)+1;
    if (outcome == 1){
        return "rock";
    }else if(outcome == 2){
        return "paper";
    }else{
        return "scissors";
    }}

let result = document.querySelector('#result');
let result2 = document.querySelector('#result2');




function playRound ( string,  computerSelection){

    const player = string;
    const computer = computerSelection;

    if ( computer === player){
        result2.textContent = "It is a TIE!";}
    else if ( computer == "paper" && player ==  "rock"){
        result2.textContent = "You Lose! Paper beats Rock.";
        computerWin++;}
    else if ( computer == "scissors" && player == "paper"){
        result2.textContent = "You Lose! Scissors beats Paper.";
        computerWin++;}
    else if ( computer == "rock" && player == "scissors"){
        result2.textContent = "You Lose! Rock beats Scissors.";
        computerWin++;}
    else if ( player == "rock" && computer == "scissors"){
        result2.textContent = "You Win! Rock beats Scissors.";
        playerWin++;}
    else if ( player == "paper" && computer == "rock"){
        result2.textContent = "You Win! Paper beats Rock.";
        playerWin++;}
    else if ( player == "scissors" && computer == "paper"){
        result2.textContent = "You Win! Scissors beats Paper.";
        playerWin++;}
    
    result.textContent = `Computer Wins: ${computerWin} , Player Wins: ${playerWin}`;

    if(playerWin == 5){
        result.textContent = 'Congratulation! You won!'
        playerWin = 0;
        computerWin = 0;
    }
    if(computerWin == 5){
        result.textContent = 'The computer won!';
        result2.textContent = 'Try again!';
        playerWin = 0;
        computerWin = 0;
    }
}




//The outcome of the game happens here  
//for (let i = 0; i < 5; i++){
//playRound(playerSelection(), computerSelection());
//console.log(`Computer Wins: ${computerWin} ,Player Wins: ${playerWin}`);
//}


//Player been asked about choice and return value
//function playerSelection(){
//    answer = prompt("Rock, Paper or Scissors:  ");
//    return answer.toLowerCase();
//}
//Computer chooses randomly about the three options