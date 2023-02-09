/*Each weapon will be given a number. 
    0 = Rock
    1 = Paper
    2 = Scissors
Therefore: 1 beats 0, 2 beats 1, and 0 beats 2.
The player will have three buttons labeled rock, paper, and scissors. When the player presses the button, rpsRound receives a
number that coincides with the button. (see above).

rpsround will check if the player beats the CPU by running comparisons.
*/

let getComputerChoice = () => {
    return(Math.floor(Math.random() * 3));
}

let rpsRound = (p_choice) => {
    let c_choice = getComputerChoice();
    console.log(`You chose:  ${(p_choice === 0 ? "Rock!" : p_choice === 1 ? "Paper!" : "Scissors!")}`);
    console.log(`CPU chose:  ${(c_choice === 0 ? "Rock!" : c_choice === 1 ? "Paper!" : "Scissors!")}`);

    if(p_choice === c_choice){
        console.log("You tied!");
        return p_choice;
    }

    switch (p_choice){
        case 0:
            if(c_choice === 1){
                console.log("Paper beats rock! You lose!");
            }
            else{
                console.log("Rock beats scissors! You win!");
            }
            break;
        case 1:
            if(c_choice === 2){
                console.log("Scissors beats paper! You lose!");
            }
            else{
                console.log("Paper beats rock! You win!");
            }
            break;
        case 2:
            if(c_choice === 0){
                console.log("Rock beats scissors! You lose!");
            }
            else{
                console.log("Scissors beats paper! You win!");
            }  
            break;
    }
    return p_choice;   
}