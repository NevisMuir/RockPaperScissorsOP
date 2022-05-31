const RPS = ['Rock', 'Paper', 'Scissors']
const result = document.querySelector('#result');
const computer = document.querySelector('#computer');
const computerScoreBoard = document.querySelector('#computerScore')
const playerScoreBoard = document.querySelector('#playerScore')

//randomly generating Rock, Paper or Scissors
function computerPlay(){
  num = Math.floor(Math.random()*3);
  return RPS[num];
}
let computerScore = 0
let playerScore = 0

//single round
function playRound(playerSelection){
  const computerSelection=computerPlay();
  computer.textContent = 'Computer chose '+computerSelection
  if (playerSelection==computerSelection){
    return 'It\'s a draw! Both players chose '+playerSelection;
  } else if(playerSelection==="Rock" && computerSelection==="Scissors" || playerSelection==="Paper" && computerSelection==="Rock" 
  || playerSelection==="Scissors" && computerSelection==="Paper"){
    playerScore++;
    return 'You Win! '+playerSelection+' beats '+computerSelection
  }else if(playerSelection==="Rock" && computerSelection==="Paper" || playerSelection==="Paper" && computerSelection==="Scissors" 
  || playerSelection==="Scissors" && computerSelection==="Rock"){
    computerScore++;  
     return 'You Lose! '+computerSelection+' beats '+playerSelection;
}}

//button select all query variable
const buttons = document.querySelectorAll('button');
///button event listener, button choice should replace variable playerSelection
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        result.textContent = playRound(button.id)
        computerScoreBoard.textContent= computerScore
        playerScoreBoard.textContent= playerScore
    })})


