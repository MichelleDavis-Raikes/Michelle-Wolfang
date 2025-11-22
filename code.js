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