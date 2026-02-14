let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#com");


const gencomputerchoice=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const playgame=(userchoice)=>{
    const comchoice=gencomputerchoice();
    console.log("comp choice= ",comchoice);
    let userwin=true;
    if(userchoice===comchoice){
        drawGame();
    }  
    else{
        
        if(userchoice=="rock"){ //scissors,paper
             userwin=comchoice==="paper"?false:true;}
        else if(userchoice=="paper"){
            //rock ,scissor
            userwin= comchoice ==="scissor"?false:true;
        }
        else {
            //rock,paper
            userwin=comchoice==="rock"?false:true;
        }
     showwinner(userwin,userchoice,comchoice);  
    }       
};


const showwinner=(userwin,userChoice,comChoice)=>{
if (userwin) {
    userscore++;
    userScorePara.innerText = userscore;
    msg.innerText = `You win! Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    compScorePara.innerText = compscore;
    msg.innerText = `You lost. ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};



choices.forEach((choice)=>
{    choice.addEventListener("click",()=>{
    const userchoice=choice.getAttribute("id");
    console.log("choice was clicked ",userchoice);
    playgame(userchoice); 
    });
});