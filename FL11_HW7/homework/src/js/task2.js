let doYouWant = confirm('Do you want to play a game?');
let rightNumber, attempt, numberAttempt;
let numberAttemptMax = 3;
let magicNumber = 2;
let prizeAttempt = 0;
let questionToPlayAgain = true;

if (doYouWant === false) {
    alert(`You did not become a millionaire, but can.`);
} else {
    while (questionToPlayAgain === true) {
        let totalPrize = 0;
        let maxRange = 8;
        let maxPrize = 100;
        let questionToContinue = true;
        while (questionToContinue === true) {
            rightNumber = Math.floor(Math.random() * maxRange);
            numberAttempt = numberAttemptMax;
            prizeAttempt = maxPrize;
            for (numberAttempt; numberAttempt > 0; numberAttempt--) {
                attempt = parseInt(prompt(
                    `Enter a number from 0 to ${maxRange}\n` +
                    `Attempts left: ${numberAttempt}\n` +
                    `Total prize: ${totalPrize}$\n` +
                    `Possible prize on current attempt: ${prizeAttempt}$`
                ));
                if (attempt === rightNumber) {
                    totalPrize += prizeAttempt;
                    maxPrize *= magicNumber;
                    maxRange += magicNumber;
                    break;
                } else {
                    prizeAttempt /= magicNumber;
                }
            }
        questionToContinue = confirm(`Congratulation, you won! 
Your prize is: ${totalPrize}$. Do you want to continue?’`);
        } 
    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
    questionToPlayAgain = confirm(`Do you want to play again?`);
    } 
}
