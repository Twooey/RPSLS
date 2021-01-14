let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span =document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
let result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("Rock")
const paper_div = document.getElementById("Paper")
const scissors_div = document.getElementById("Scissors")
const lizard_div = document.getElementById("Lizard")
const spock_div = document.getElementById("Spock")

function getComputerChoice(){
    const choices =['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
    return choices[Math.floor(Math.random() * 5)]
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = userChoice + action(userChoice, computerChoice) + computerChoice + ". You win!";
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = computerChoice + action(computerChoice, userChoice) + userChoice + ". You lose!";
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = "Draw!"

}

function action(userChoice, computerChoice){
    if (userChoice == "Rock") {
        switch (computerChoice) {
            case "Scissors":
                return " Crushes ";
            case "Lizard":
                return " Crushes ";
        }
    }
    if (userChoice == "Scissors") {
        switch (computerChoice) {
            case "Paper":
                return " Cuts ";
            case "Lizard":
                return " Decapitates ";
        }
    }

    if (userChoice == "Paper"){
        switch(computerChoice) {
            case "Rock":
                return " Covers ";
            case "Spock":
                return " Disproves ";

        }
    }

    if (userChoice == "Lizard"){
        switch(computerChoice){
            case "Spock":
                return " Poisons ";
            case "Paper":
                return " Eats "
        }
    }

    if (userChoice == "Spock"){
        switch(computerChoice){
            case "Rock":
                return " Vaporizes "
            case "Scissors":
                return " Smashes "
        }
    }
}

function game(userChoice){
    const computerChoice = getComputerChoice()
    if (userChoice == "Rock") {
        switch (computerChoice) {
            case "Scissors":
                win(userChoice, computerChoice);
                break;
            case "Paper":
                lose(userChoice, computerChoice);
                break;
            case "Lizard":
                win(userChoice, computerChoice);
                break;
            case "Spock":
                lose(userChoice,computerChoice);
                break;
            default:
                draw(userChoice, computerChoice);
                break;
        }
    }
    if (userChoice == "Scissors") {
        switch (computerChoice) {
            case "Paper":
                win(userChoice, computerChoice);
                break;
            case "Rock":
                lose(userChoice, computerChoice);
                break;
            case "Lizard":
                win(userChoice, computerChoice);
                break;
            case "Spock":
                lose(userChoice, computerChoice);
                break;
            default:
                draw(userChoice, computerChoice);
                break;
        }
    }
    if (userChoice == "Paper"){
        switch(computerChoice) {
            case "Rock":
                win(userChoice, computerChoice);
                break;
            case "Scissors":
                lose(userChoice, computerChoice);
                break;
            case "Lizard":
                lose(userChoice, computerChoice);
                break;
            case "Spock":
                win(userChoice, computerChoice)
            default:
                draw(userChoice, computerChoice);
                break;
        }
    }
    if (userChoice == "Lizard"){
        switch(computerChoice){
            case "Rock":
                lose(userChoice, computerChoice);
                break;
            case "Scissors":
                lose(userChoice, computerChoice);
                break;
            case "Spock":
                win(userChoice, computerChoice);
                break;
            case "Paper":
                win(userChoice,computerChoice);
                break;
            default:
                draw();
                break;
        }
    }
    if (userChoice == "Spock"){
        switch(computerChoice){
            case "Rock":
                win(userChoice, computerChoice);
                break;
            case "Scissors":
                win(userChoice, computerChoice);
                break;
            case "Lizard":
                lose(userChoice, computerChoice);
                break;
            case "Paper":
                lose(userChoice, computerChoice);
                break;
            default:
                draw();
                break;
        }
    }
}

function main() {

    rock_div.addEventListener('click', function () {
        game("Rock");
    })

    paper_div.addEventListener('click', function () {
        game("Paper");
    })

    scissors_div.addEventListener('click', function () {
        game("Scissors");
    })

    lizard_div.addEventListener('click', function () {
        game("Lizard");
    })

    spock_div.addEventListener('click', function () {
        game("Spock");
    })
}
main();
