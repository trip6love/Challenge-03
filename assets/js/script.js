// Assignment code here
var passwordOptions 
var userPasswordLength
// // Get references to the #generate element *start*
var generateBtn = document.querySelector("#generate");


//How long would you like your password to be? (min 8 - max 128)
function passwordLength() {
  passwordOptions=""
  userPasswordLength = prompt('Password length? Min 8 characters - max 128');
  if (userPasswordLength === "" || userPasswordLength === null) {
    alert('You must enter a number between 8 and 128!');
    return passwordLength();
    //making sure the user stays within the guidelines
  } else if (userPasswordLength > 128) {
    alert('You must choose a number that is less than 128!');
    //send back to if
    return passwordLength();

  } else if (userPasswordLength < 8) {
    alert('You must choose a number that is 8 or greater!');
    //send back to if
    return passwordLength();

  } else {
    //log the users password length
    console.log("The user wants a password that is " + userPasswordLength + " character(s).")

    // Call the next function
    upperCase();
  }
}

//Would you like uppercase?
function upperCase() {
  var userUpperCase = window.confirm('Would you like upper case? Click OK for yes and CANCEL for no.');
  if(userUpperCase ) {
    console.log("The user wants a password with uppercase.")
    //give password options access to UPPERCASE
    passwordOptions = (passwordOptions + "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    //log the currentOptions for password values
    console.log("Options thus far " + passwordOptions);
    lowerCase();

  } else {
    console.log("The user wants a password without uppercase!")
    // call the next function
    lowerCase();  
  }
}

//Would you like lowercase?
function lowerCase() {
  var userLowerCase = window.confirm('Would you like lower case? Click OK for yes and CANCEL for no.');
  if(userLowerCase) {
    console.log("The user wants a password with lowercase.")
    //give passwordOptions access to lowercase
    passwordOptions = (passwordOptions + "abcdefghijklmnopqrstuvwxyz");
    //log the current options for password values
    console.log("Options thus far " + passwordOptions);
    numberTrue();

  } else {
    console.log("The user wants a password without lowercase!");
    //call the next function
    numberTrue();  
  }
}

//Would you like to include numbers?
function numberTrue() {
  var userNumberTrue = window.confirm('Would you like to include numbers? Click OK for yes and CANCEL for no.');
  if (userNumberTrue) {
    console.log("The user wants a password with numbers.")
    //give passwordOptions access to numbers
    passwordOptions = (passwordOptions + "1234567890");
    //log the current options for password values
    console.log("Options thus far " + passwordOptions);
    specialCharacters();
    
  } else {
    console.log("The user wants a password without numbers!");
    //call the next function
    specialCharacters();
  }
}

//Would you like to include special Characters?
function specialCharacters() {
  var userSpecialCharacters = window.confirm('Would you like to use special characters? Click OK for yes and CANCEL for no.');
  if (userSpecialCharacters) {
    console.log("The user wants a password with special characters.");
    //give passwordOptions access to special characters
    passwordOptions = (passwordOptions + "!#$%&'()*+,-./:;<=>?@[^_`{|}~ ");
    //log the current options for password values
    console.log("Options thus far " + passwordOptions);
    writePassword();

  } else {
    console.log("The user wants a password without special characters!");
    //call the writePassword function to generate what user has input above
    writePassword();
  }
} 

// add event listener for button
generateBtn.addEventListener("click", passwordLength);

// Write the password to  #password input
function writePassword() {

  //Create Random selection from array
  var genPassword = '';
  var array = passwordOptions.split('');
  for (var i = 0; i < userPasswordLength; i++) {
    genPassword += array[(Math.floor(Math.random() * array.length))];

  }

  var passwordText = document.querySelector("#password");
  console.log('Password: ' + genPassword)
  passwordText.value = genPassword;
};

//END