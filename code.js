
// functions are a nice way to organize our code and make our code reusable
// use a descriptive function name - functions do something, so make it a verb/action
// () can hold function argument - if you need to pass information to the function
function playDice(){
    // log that the function was called
    console.log("playDice() function was called");

    // roll die 1
    let roll1 = rollDice();

    // roll die 2
    let roll2 = rollDice();

    console.log("roll1=" + roll1)
    console.log("roll2=" + roll2)

    // calculate the rolls
    let sum = roll1 + roll2;

    // see if the user lost - if they rolled a sum of 7 or 11
    // || - means or
    // && - means and
    if(sum == 7 || sum == 11){
        console.log("you lost")
    }
    // checkl if we rolled for an even number
    // modulus - do a division problem and we get a remainder as the results
    // 2/2 = 1 with no remainder = even numbers;
    // 4/2 = 2 with no remainder = even numbers;
    // 5/2 = 2 with a remainder of 1 = odd number
    // roll1 % 2 == 0 - this checks will be true if we have an even number
    else if(roll1 % 2 == 0){
    
    }

    document.getElementById("divSum").textContent = sum;
}

// craete a functions to generate a random number
function rollDice(){
    // create a varibale to hold a random number
    // Math.random() is a built in JavaScript function which generates a random number
    let die = Math.random() * 6; // I want to replicate a 6 sided die

    // round the number and return the value
    return Math.ceil(die);
}

function testPalin()
{
    // get the value that the user entered in the textbox
    let userInput = document.getElementById("txtInput").value.trim();
    
    // console.log("user Input: " + userInput);
    
    isPalindrome(userInput);
    
    // this statement implies == true, you could write it out
    // isPalindrome(userInput) == true
    if(isPalindrome(userInput))
    {
        document.getElementById("divResult").textContent = "Yes, " + 
        userInput + " is a palindrome."
    }
    else
    {
        document.getElementById("divResult").textContent = "No, " + 
        userInput + " is not a palindrome."
    }

}
function isPalindrome(wordToTest)
{
    // remove any spaces inside of the word(s)
    let cleanedWord = wordToTest.replace(/\s/g, "");

    cleanedWord = cleanedWord.toLowerCase();

    // console.log("cleanedWord= " + cleanedWord);

    // convert the cleaned string to an array
    let arrCleaned = cleanedWord.split("");

    //reverse the array contant
    arrCleaned = arrCleaned.reverse("");

    // take our reversed array and convert it back to a string
    let reversedWord = arrCleaned.join("");

    console.log("Test= " + reversedWord);

    // compare if the cleaned word and the reversed words are the same
    return cleanedWord == reversedWord;
}
function addAudio()
{
    let audioElem = document.createElement("audio");

    audioElem.setAttribute("id", "myAudio");

    //
    audioElem.setAttribute("src", "us-lab-background.mp3");

    //
    audioElem.setAttribute("controls", "controls");

    //
    document.getElementById("divAudio").appendChild(audioElem)

    //
    document.getElementById("btnAddAudio").hidden = true

    document.getElementById("btnPlayAudio").hidden = false
    document.getElementById("btnPauseAudio").hidden = false
}

function playAudio()
{
    let audio = document.getElementById("myAudio");
    audio.play();
}

function pauseAudio()
{
    let audio = document.getElementById("myAudio");
    audio.pause();
}