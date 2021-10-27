// Assignment code here

//How long would you like your password to be? (min 8 - max 128)
function passwordLength () {
  var userPasswordLength = window.prompt('Password length? Min 8 characters - max 128');
  console.log(userPasswordLength);
}

//Would you like uppercase?
function upperCase () {
  var userUpperCase = window.confirm('Would you like upper case? Click OK for yes and CANCEL for no.');
  console.log(userUpperCase);
}

//Would you like lowercase?
function lowercase () {
  var userLowerCase = window.confirm('Would you like lower case? Click OK for yes and CANCEL for no.');
  console.log(userLowerCase);
}

//Would you like to include numbers?
function numberTrue () {
  var userNumberTrue = window.confirm('Would you like to include numbers? Click OK for yes and CANCEL for no.');
  console.log(userNumberTrue);
}

//Would you like to include special Characters?
function specialCharacters () {
  var userSpecialCharacters = window.confirm('Would you like to use special characters? Click OK for yes and CANCEL for no.');
  console.log (userSpecialCharacters);
}

//validate each input, make sure at least one character type is selected

//generate password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
