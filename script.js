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
    
    if(!res_text){
        res_text = document.createElement("h2");
        res_text.classList.add("res_text");
    }

    let winner = "";
    let loser = "";
    
    //Check if user choice matches cpu choice return 0 if so.
    if(c_choice === p){
        console.log("You tied! Repeat the round!")
        res_text.textContent = "You tied! Repeat the round!";
        res_div.appendChild(res_text);
        return  0;
    }

    //Check winner
    switch (p){
        case 'Rock':
            if(c_choice === 'Paper'){
                console.log("Paper covers rock! You lose!");
                winner = c_choice;
                loser = p;
                return -1;
            }
            else{
                console.log("Rock beats scissors! You win!");
                winner = p;
                loser = c_choice;
                return 1;
            }
            break;
        case 'Paper':
            if(c_choice === 'Scissors'){
                console.log("Scissors covers paper! You lose!");
                winner = c_choice;
                loser = p;
                return -1;
            }
            else{
                console.log("Paper covers rock! You win!");
                winner = p;
                loser = c_choice;
                return 1;
            }
            break;
        case 'Scissors':
            if(c_choice === 'Rock'){
                console.log("Rock beats scissors! You lose!");
                winner = c_choice;
                loser = p;
                return -1;
            }
            else{
                console.log("Scissors cuts paper! You win!");
                winner = p;
                loser = c_choice;
                return 1;
            }
            break;
    }
    res_text.textContent = `${winner} beats ${loser}! ${(winner === p ? "You win!" : "You lose!")}`;
    res_div.appendChild(res_text);
    return;
}

function game() {
    // let win_loss = 0;
    //Play the round
    let pchoice = this.value;
    let res = playRound(pchoice);
    return;
}

let btns = document.querySelectorAll(".gamebtn");

btns.forEach(btn => btn.addEventListener('click', game));