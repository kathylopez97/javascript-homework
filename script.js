var characterLength = 8;
var choiceArr =[];


var specialCharArray =['!','@','#','$','*','(',')','-','=','+','[',']','{','}','?','>','<']
var lowercaseArray= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercaseArray= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numberArray = ['1','2','3','4','5','6','7','8','9','0'];



// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Prompt the user for the password criteria 
// 1. Password 8<128
// 2.lower case
// 3.upper case numbers , 
// 4.special characters, 
// 5.validate the input
// 6.display password to the page
// Write password to the #password input
function writePassword() {
  console.log = "Great job! you clicked on the button!"
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

if (correctPrompts) {
  var newPassword = generatePassword();
  passwordText.value = newPassword;
} else {
  passwordText.value = "";

}
}

function generatePassword() {
// write the generate password based on the prompt
var password = "";
for (var i = 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[randomIndex];
}
return password;
}



 function getPrompts() {
  choiceArr = [];

  characterLength= parseInt(prompt("How many characters would you like your password to be? Choose between 8-128 characters"));
 

 if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
  alert("Please try again, character length has the number, between 8 - 128 digits.");
  return false;
 }

if (confirm ("Do you want you password to have lowercase letter?")) {
  choiceArr =choiceArr.concat (lowercaseArray);
 }

if (confirm ("Do you want you password to have uppercase letter?")) {
  choiceArr =choiceArr.concat (uppercaseArray); 
 }

if (confirm("Do you want your password to have special characters?")) {
    choiceArr =choiceArr.concat (specialCharArray); 
}
if (confirm ("Do you want to add numbers to your password?")) {
  choiceArr = choiceArr.concat (numberArray);
}

return true ;
}