//console.log("hello");
var uname = prompt("Enter your name to start the Game..");
var userScore = 0;
var compScore = 0;

var userdisplay_span = document.getElementById("userscore");
var compdisplay_span = document.getElementById("compscore");

var scoreboard_div = document.querySelector(".scoreboard");
var result_p = document.querySelector(".result > p");

var rock_div = document.getElementById("r");
var paper_div = document.getElementById("p");
var scissors_div = document.getElementById("s");
var actionMsg = document.getElementById("action-message");
var userDisp = document.getElementById("userTag");
var head = document.querySelector(".heading");


userDisp.innerHTML = uname;
head.innerHTML = "Hey @"+uname+". Welcome to "+head.textContent;
actionMsg.innerHTML= " @"+uname+". Please "+ actionMsg.textContent;


function getCompChoice(){
    const options = ["r","p","s"];
    const randomNum = Math.floor(Math.random()*3);
    return options[randomNum];
}
function convertWord(str){
    if (str === "r") return "Rock";
    if (str === "p") return "Paper";
    return "Scissors";
}
function win(userchoice,compchoice){
    userScore++;
    userdisplay_span.innerHTML=userScore;
    compdisplay_span.innerHTML=compScore;
  // const smallUser =
    result_p.innerHTML=`${convertWord(userchoice)} beats ${convertWord(compchoice)}. You win!!`;
    document.getElementById(userchoice).classList.add('green-display');
    setTimeout(function(){document.getElementById(userchoice).classList.remove('green-display')},500);
    
    
}

function lose(userchoice,compchoice){
    compScore++;
    userdisplay_span.innerHTML=userScore;
    compdisplay_span.innerHTML=compScore;
   
    result_p.innerHTML=`${convertWord(userchoice)} lost ${convertWord(compchoice)}. You lose!!`;
    document.getElementById(userchoice).classList.add('red-display');
    setTimeout(function(){document.getElementById(userchoice).classList.remove('red-display')},500);
}

function draw(userchoice,compchoice){
    userdisplay_span.innerHTML=userScore;
    compdisplay_span.innerHTML=compScore;
    result_p.innerHTML=`${convertWord(compchoice)} equals ${convertWord(userchoice)}. It's a draw!!`;
    document.getElementById(userchoice).classList.add('gray-display');
    setTimeout(function(){document.getElementById(userchoice).classList.remove('gray-display')},500);
}
    


function playGame(userchoice){
    var compchoice = getCompChoice();
    //console.log(userchoice+compchoice);
    switch(userchoice+compchoice){
        case "pr":
        case "sp":
        case "rs":
            win(userchoice,compchoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userchoice,compchoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,compchoice);
            break;
    }
}


function main(){
rock_div.addEventListener('click',function(){
    //console.log("rock clicked")
    playGame("r");
    
});

paper_div.addEventListener('click',function(){
    //console.log("paper clicked")
    playGame("p");
});

scissors_div.addEventListener('click',function(){
    //console.log("scissor clicked")
    playGame("s");
});

}

main();












