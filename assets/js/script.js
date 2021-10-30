// Assignment code here
var passwordCharacterOptions = ""
var userPasswordLength
// // Get references to the #generate element *Start*
var generateBtn = document.querySelector("#generate");


//How long would you like your password to be? (min 8 - max 128)
function passwordLength() {
   userPasswordLength = prompt('Password length? Min 8 characters - max 128');
  if (userPasswordLength === "" || userPasswordLength === null) {
    alert('You must enter a number between 8 and 128!');
    return passwordLength();

  } else if (userPasswordLength > 128) {
    alert('You must choose a number that is less than 128!');

    return passwordLength();

  } else if (userPasswordLength < 8) {
    alert('You must choose a number that is 8 or greater!');

    return passwordLength();

  } else {
    console.log("The user wants a password that is " + userPasswordLength + " character(s).")
    
    upperCase();
  }
}

//Would you like uppercase?
function upperCase() {
  var userUpperCase = window.confirm('Would you like upper case? Click OK for yes and CANCEL for no.');
  if(userUpperCase ) {
    console.log("The user wants a password with uppercase.")
    passwordCharacterOptions = (passwordCharacterOptions + "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    console.log("Options thus far " + passwordCharacterOptions);
    lowerCase();

  } else {
    console.log("The user wants a password without uppercase!")
    lowerCase();  
  }
}

//Would you like lowercase?
function lowerCase() {
  var userLowerCase = window.confirm('Would you like lower case? Click OK for yes and CANCEL for no.');
  if(userLowerCase) {
    console.log("The user wants a password with lowercase.")
    passwordCharacterOptions = (passwordCharacterOptions + "abcdefghijklmnopqrstuvwxyz");
    console.log("Options thus far " + passwordCharacterOptions);
    numberTrue();

  } else {
    console.log("The user wants a password without lowercase!");
    numberTrue();  
  }
}

//Would you like to include numbers?
function numberTrue() {
  var userNumberTrue = window.confirm('Would you like to include numbers? Click OK for yes and CANCEL for no.');
  if (userNumberTrue) {
    console.log("The user wants a password with numbers.")
    passwordCharacterOptions = (passwordCharacterOptions + "1234567890");
    console.log("Options thus far " + passwordCharacterOptions);
    specialCharacters();
    
  } else {
    console.log("The user wants a password without numbers!");
    specialCharacters();
  }
}

//Would you like to include special Characters?
function specialCharacters() {
  var userSpecialCharacters = window.confirm('Would you like to use special characters? Click OK for yes and CANCEL for no.');
  if (userSpecialCharacters) {
    console.log("The user wants a password with special characters.");
    passwordCharacterOptions = (passwordCharacterOptions + "!#$%&'()*+,-./:;<=>?@[^_`{|}~ ");
    console.log("Options thus far " + passwordCharacterOptions);
    writePassword();
  } 
} 


// add event listener for button
generateBtn.addEventListener("click", passwordLength);

// Write password to the #password input
function writePassword() {

  //convert string to numbers
  
  //random array selection
  
  var genPassword = '';
  var characters = passwordCharacterOptions.split('');

  for (var i = 0; i < userPasswordLength; i++) {
    genPassword += characters[(Math.floor(Math.random() * characters.length))];

  }

  var passwordText = document.querySelector("#password");
  console.log('Password: ' + genPassword)
  passwordText.value = genPassword;
};