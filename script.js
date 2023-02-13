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
            return('rock');
            break;
        case 1:
            return('paper');
            break;
        case 2:
            return('scissors');
            break;
    }
}

function playRound(p){
    let c_choice = getComputerChoice();
    console.log(c_choice + " " + p);
    
    //Check if user choice matches cpu choice return 0 if so.
    if(c_choice === p){
        console.log("You tied! Repeat the round!")
        return  0;
    }

    //Check winner
    switch (p){
        case 'rock':
            if(c_choice === 'paper'){
                console.log("Paper covers rock! You lose!")
                return -1;
            }
            else{
                console.log("Rock beats scissors! You win!")
                return 1;
            }
            break;
        case 'paper':
            if(c_choice === 'scissors'){
                console.log("Scissors covers paper! You lose!")
                return -1;
            }
            else{
                console.log("Paper covers rock! You win!")
                return 1;
            }
            break;
        case 'scissors':
            if(c_choice === 'rock'){
                console.log("Rock beats scissors! You lose!")
                return -1;
            }
            else{
                console.log("Scissors cuts paper! You win!")
                return 1;
            }
            break;
    }

}

function game() {
    // let win_loss = 0;
    // for(let i = 1; i < 6; i++){
    //Play the round
    let pchoice = this.value;
    let res = playRound(pchoice);

    switch(res){
        case 0:
            console.log("Tie.");
            break;
        case 1:
            console.log("You win.");
            break;
        case -1:
            console.log("You lost.");
            break;
        default:
            console.log("I just don't know what went wrong.");
    }

    return;

    // if(res === 0){
    //     i--;
    //     continue;
    // }
    //win_loss += res;

    //win_loss > 0 ? console.log("You win!") : console.log("You lost! Try again!");
}

function testfunc(e) {
    console.log(this.value);
}

let btns = document.querySelectorAll(".gamebtn");

btns.forEach(btn => btn.addEventListener('click', game));