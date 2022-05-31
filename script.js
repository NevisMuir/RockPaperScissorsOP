const RPS = ['rock', 'paper', 'scissors']
//randomly generating rock, paper or scissors
function computerPlay(){
  num = Math.floor(Math.random()*3);
  return RPS[num];
}


//single round
function playRound(playerSelection){
  const computerSelection=computerPlay();
  console.log('Computer chose '+computerSelection)
  if (playerSelection==computerSelection){
    return 'It\'s a draw! Both players chose '+playerSelection;
  } else if(playerSelection==="rock" && computerSelection==="scissors" || playerSelection==="paper" && computerSelection==="rock" || playerSelection==="scissors" && computerSelection==="paper"){
    return 'You Win! '+playerSelection+' beats '+computerSelection
  }else if(playerSelection==="rock" && computerSelection==="paper" || playerSelection==="paper" && computerSelection==="scissors" || playerSelection==="scissors" && computerSelection==="rock"){
     return 'You Lose! '+computerSelection+' beats '+playerSelection;
}}

//button select all query variable
const buttons = document.querySelectorAll('button');
///button event listener, button choice should replace variable playerSelection
buttons.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log(playRound(button.id))
    })})


