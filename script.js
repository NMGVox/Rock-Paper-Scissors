/*Each weapon will be given a number. 
    0 = Rock
    1 = Paper
    2 = Scissors
Therefore: 1 beats 0, 2 beats 1, and 0 beats 2.
The player will have three buttons labeled rock, paper, and scissors. When the player presses the button, rpsRound receives a
number that coincides with the button. (see above).

rpsround will check if the player beats the CPU by running comparisons.
*/

// let getComputerChoice = () => {
//     return(Math.floor(Math.random() * 3));
// }

let player = 0;
let cpu = 0;

let clearText = () => {
    let res_div = document.querySelector(".results");
    let res_text = document.querySelector(".res_text");
    let score = document.querySelector(".score-board");
    let winner_text = document.querySelector(".announce-winner");
    res_div.removeChild(res_text);
    score.textContent = "0 - 0";
    return;
}

let checkWinner = (p, c) => {   
    //Check if user choice matches cpu choice return 0 if so.
    if(c === p){
        return  0;
    }

    //Check winner
    switch (p){
        case 'Rock':
            if(c === 'Paper'){
                return -1;
            }
            else{
                return 1;
            }
            break;
        case 'Paper':
            if(c === 'Scissors'){
                return -1;
            }
            else{
                return 1;
            }
            break;
        case 'Scissors':
            if(c === 'Rock'){
                return -1;
            }
            else{
                return 1;
            }
            break;
    }
}

let getComputerChoice = () => {
    let c = (Math.floor(Math.random() * 3));
    switch (c){
        case 0: 
            return('Rock');
            break;
        case 1:
            return('Paper');
            break;
        case 2:
            return('Scissors');
            break;
    }
}

function playRound(p){
    let c_choice = getComputerChoice();

    let res_div = document.querySelector(".results");
    let res_text = document.querySelector(".res_text");
    let score = document.querySelector(".score-board");
    
    if(!res_text){
        res_text = document.createElement("h2");
        res_text.classList.add("res_text");
    }

    let winner = "";
    let loser = "";
    
    let eval_result = checkWinner(p, c_choice);

    if(eval_result === 1){
        winner = p;
        loser = c_choice;
        ++player;
    }
    else if(eval_result === -1){
        loser = p;
        winner = c_choice;
        ++cpu;
    }
    else{
        res_text.textContent = "You tied!";
        res_div.appendChild(res_text);
        return;
    }

    score.textContent = `${player} - ${cpu}`;
    res_text.textContent = `${winner} beats ${loser}! ${(winner === p ? "You win!" : "You lose!")}`;
    res_div.appendChild(res_text);
    return;
}

function resetgame(e) {
    player = 0;
    cpu = 0;
    retry_div = document.querySelector(".retry-div");
    retry_div.removeChild(retry_div.firstChild)
    btns.forEach(btn => btn.disabled = false);
    clearText();
    this.classList.remove("gameover");
}

function game() {
    // let win_loss = 0;
    //Play the round
    let pchoice = this.value;
    let res = playRound(pchoice);

    if(player === 5 || cpu === 5){
        let winner_text = document.createElement("h3");
        winner_text.classList.add('announce-winner');
        retry_div = document.querySelector(".retry-div");
        winner_text.textContent = player === 5 ? "You won the game!" : "You have lost the game! Try again!";
        retry_div.insertBefore(winner_text, retry_div.firstChild);

        btns.forEach(btn => btn.disabled = true);
        
        retry_btn.classList.add("gameover");
    }
    return;
}

let btns = document.querySelectorAll(".gamebtn");
let retry_btn = document.querySelector(".retry");

retry_btn.addEventListener('click', resetgame);

btns.forEach(btn => btn.addEventListener('click', game));

