// wk1-2 countdown timer.
// 10 to 1 then BLASTOFF
function startCountdown() {
    var count = 10; // sets count to 10

    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1;

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // After one second code in here will execute
        // waits one seoond and outputs 9
    }, 1000);

    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 2 seconds and outputs 8
    }, 2000);
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 3 seconds and outputs 7
    }, 3000)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 4 seconds and outputs 6
    }, 4000)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 5 seconds and outputs 5
    }, 5000)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 6 seconds and outputs 4
    }, 6000)
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 7 seconds and outputs 3
    }, 7000);
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 8 seconds and outputs 2
    }, 8000);
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1;
        // waits 9 seconds and outputs 2
    }, 9000);
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "BLASTOFF";
        // Outputs blastoff after 10 seconds
    }, 10000);
}

// Play Craps function
function playCraps() {
    console.log("playCraps has started"); // lets console know the game has began
    var die1; // creating a variable for the first die
    die1 = Math.ceil(Math.random() * 6); // random die roll 1-6 rounded up using ceil
    console.log("The value of die1 is :" + die1); // tells the console the value of the die
    document.getElementById("die1Results").innerHTML = "The value of die1 is: " + die1; // prints the value of the die to the user
    var die2; // variable for the second die
    die2 = Math.ceil(Math.random() * 6); // random die roll 1-6 rounded up using ceil
    console.log("The value of die2 is" + die2); // console getting die value
    document.getElementById("die2Results").innerHTML = "The value of die2 is: " + die2; // die value output to user
    var dieSum = die1 + die2; // sum of die 
    document.getElementById("sumResults").innerHTML = "The sum of the die is: " + dieSum; // output of sum of die
    if (dieSum == 7 || dieSum == 11) { // tests for a 7 or 11 roll
        document.getElementById("crapsResults").innerHTML = " Sorry, You crapped out!!!"; // will output if 7 or 11 is rolled

    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("crapsResults").innerHTML = "Doubles you win!!!"; // tests for even doubles
    }
    else {
        document.getElementById("crapsResults").innerHTML = "Please try again!"; // will output for all other outcomes.

    }
}
// Sandbox Area Function
function sandboxArea() {
    console.log("Sandbox Test Started");
    var i = 0;
    while (i < 10) {
        setTimeout(function () {
            document.getElementById("sandRes").innerHTML = i;
            i++;
        }, 1000 * i);

    }
}


