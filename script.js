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

// let rpsRound = (p_choice) => {
//     let c_choice = getComputerChoice();
//     console.log(`You chose:  ${(p_choice === 0 ? "Rock!" : p_choice === 1 ? "Paper!" : "Scissors!")}`);
//     console.log(`CPU chose:  ${(c_choice === 0 ? "Rock!" : c_choice === 1 ? "Paper!" : "Scissors!")}`);

//     if(p_choice === c_choice){
//         console.log("You tied!");
//         return p_choice;
//     }

//     switch (p_choice){
//         case 0:
//             if(c_choice === 1){
//                 console.log("Paper beats rock! You lose!");
//             }
//             else{
//                 console.log("Rock beats scissors! You win!");
//             }
//             break;
//         case 1:
//             if(c_choice === 2){
//                 console.log("Scissors beats paper! You lose!");
//             }
//             else{
//                 console.log("Paper beats rock! You win!");
//             }
//             break;
//         case 2:
//             if(c_choice === 0){
//                 console.log("Rock beats scissors! You lose!");
//             }
//             else{
//                 console.log("Scissors beats paper! You win!");
//             }  
//             break;
//     }
//     return p_choice;   
// }

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

let game = () => {
    let win_loss = 0;
    for(let i = 1; i < 6; i++){
        let pchoice = prompt(`Round: ${i}! Pick your weapon!`);
        pchoice = pchoice.toLowerCase();
        
        //Validate the input. Repeat round if not valid.
        if(pchoice != 'rock' && pchoice != 'paper' && pchoice != 'scissors'){
            i--;
            alert("Please enter rock, paper or scissors.");
            continue;
        }
        //Play the round
        let res = playRound(pchoice);
        //if tied...
        if(res === 0){
            //Repeat the round
            i--;
            continue;
        }
        //Add result to win/loss record.
        win_loss += res;
    }
    //Determine the winnwe using the win/loss record.
    if(win_loss > 0){
        console.log("You win!")
    }
    else{
        console.log("You lose!")
    }
}

game()