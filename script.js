let getComputerChoice = () => {
    return(Math.floor(Math.random() * 3));
}

let rpsRound = () => {
    let c_choice = getComputerChoice();
    console.log(c_choice);
}