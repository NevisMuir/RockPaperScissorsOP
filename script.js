const RPS = ['rock', 'paper', 'scissors']
        //randomly generating rock, paper or scissors
        function computerPlay(){
            num = Math.floor(Math.random()*3);
            return RPS[num];
         }
         //the computers decision is now a variable
         const computerSelection=computerPlay();
         //the player is prompted with a choice, and that choice is converted to lowercase
         

             //player is prompted
         let playerChoice=prompt("Do you choose Rock, Paper, or Scissors?");
                const playerSelection=playerChoice.toLowerCase()
                //single round
         function playRound(playerSelection,computerSelection){
             if (playerSelection==computerSelection){
                 return 'It\'s a draw! Both players chose '+playerSelection;
             } else if(playerSelection==="rock" && computerSelection==="scissors" || playerSelection==="paper" && computerSelection==="rock" || playerSelection==="scissors" && computerSelection==="paper"){
                 return 'You Win! '+playerSelection+' beats '+computerSelection
             }else if(playerSelection==="rock" && computerSelection==="paper" || playerSelection==="paper" && computerSelection==="scissors" || playerSelection==="scissors" && computerSelection==="rock"){
                 return 'You Lose! '+computerSelection+' beats '+playerSelection;
             }
            }
            //computer's choice
            console.log('Computer chose '+computerSelection)
            //result of round
            console.log(playRound(playerSelection,computerSelection))