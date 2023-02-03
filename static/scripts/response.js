function getBotResponse(input) {
    //rock paper scissors
    if (input == "Bonjour") {
        return "Bonjour";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "bonjour") {
        return "yo !";
        console.log("reponse mais peut pas la voir");
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}