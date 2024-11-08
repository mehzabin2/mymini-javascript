let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");
const gencomputer=()=>{
    const options=["rock","paper","scissor"];
    const ranId=Math.floor(Math.random()*3);
    return options[ranId];
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw";
}
const showwinner=(userwin)=>{
    if(userwin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win!");
        msg.innerText="Congratulations! You Win";
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("you lose");
        msg.innerText=" You lose";
    }
}
const playGame= (userchoice)=> {
    console.log("user choice =", userchoice);
    const compChoice=gencomputer();
    console.log("computer choice =", compChoice);
    if(userchoice===compChoice){
       drawgame();
    } else{
        let userwin=true;
        if(userchoice==="rock" ){
            userwin= compChoice === "paper"?false :true;
        }else if(userchoice==="paper" ){
            userwin= compChoice === "scissor"?false :true;
        }else{
            userwin=compChoice==="rock"?false:true;
        }
        showwinner(userwin);
        }         
    };
choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});