let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userResult = document.querySelector("#user-score");
const computerResult = document.querySelector("#computer-score");


const computerChoice = () =>{
   const option = ["rock","paper","scissors"];
   const ranIdx = Math.floor(Math.random()*3);
   return option[ranIdx];
};

const drawGame = () =>{
       msg.innerText = "Game Draw !!! Play Again";
       msg.style.backgroundColor = "#3F88C5";
};


const playGame = (userChoice) =>{
    console.log("User Choice is : ",userChoice);

const genComputerChoice = computerChoice();
    
    if(userChoice === genComputerChoice){
        drawGame();

    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = genComputerChoice ==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            userWin = genComputerChoice ==="scissors" ? false : true;
        }

        else{
            userWin = genComputerChoice === "rock"? false:true;

        }

        showWinner(userWin,userChoice,genComputerChoice);
    }
};


const showWinner = (userWin,userChoice,genComputerChoice) =>{
    if(userWin){
        userScore++;
        userResult.innerText=userScore;
        msg.innerText = `You Win !!! Your ${userChoice} Beats Computer ${genComputerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        computerScore++;
        computerResult.innerText=computerScore;
        msg.innerText =  `You Lost !!! Computer ${genComputerChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }

};



choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);

    });
});