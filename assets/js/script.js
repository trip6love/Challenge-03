// Assignment code here
var passwordCharacterOptions = ""
//How long would you like your password to be? (min 8 - max 128)
function passwordLength() {
  var userPasswordLength = prompt('Password length? Min 8 characters - max 128');
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
    return true

  }




//Would you like uppercase?
  function upperCase () {
    var userUpperCase = window.confirm('Would you like upper case? Click OK for yes and CANCEL for no.');
    if(userUpperCase ) {
      console.log("The user wants a password with uppercase.")
      passwordCharacterOptions = (passwordCharacterOptions + "ABCDEFGHIJKLMNOPQRSTUVWXYZ")
      console.log("Options thus far " + passwordCharacterOptions);
      lowercase();
      return true

    } else {
      console.log("The user wants a password without uppercase!")
      lowercase();
    }
  }

  //Would you like lowercase?
  function lowercase () {
    var userLowerCase = window.confirm('Would you like lower case? Click OK for yes and CANCEL for no.');
    if(userLowerCase) {
      console.log("The user wants a password with lowercase.")
      passwordCharacterOptions = (passwordCharacterOptions + "abcdefghijklmnopqrstuvwxyz");
      console.log("Options thus far " + passwordCharacterOptions);
      numberTrue();
      return true

    } else {
      console.log("The user wants a password without lowercase!");
      numberTrue();
    }
  }

  //Would you like to include numbers?
  function numberTrue () {
    var userNumberTrue = window.confirm('Would you like to include numbers? Click OK for yes and CANCEL for no.');
    if (userNumberTrue) {
      console.log("The user wants a password with numbers.")
      passwordCharacterOptions = (passwordCharacterOptions + "1234567890");
      console.log("Options thus far " + passwordCharacterOptions);
      specialCharacters();
      return true

    } else {
      console.log("The user wants a password without numbers!");
      specialCharacters();
    }
  }

  //Would you like to include special Characters?
  function specialCharacters () {
    var userSpecialCharacters = window.confirm('Would you like to use special characters? Click OK for yes and CANCEL for no.');
    if (userSpecialCharacters) {
      console.log("The user wants a password with special characters.");
      passwordCharacterOptions = (passwordCharacterOptions + "!#$%&'()*+,-./:;<=>?@[^_`{|}~ ");
      console.log("Options thus far " + passwordCharacterOptions);
      writePassword();
      return true

    } else {
      console.log("The user wants a password without special characters!");
      alert("You have to have characters!");
      upperCase();

    }
  }

}
//validate each input, make sure at least one character type is selected



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var genPassword = '';
  var genPassword = passwordCharacterOptions.split('');
  for (var i = 0; i < length; i++) {
    genPassword += characters.charAt(Math.floor(Math.random() = userPasswordLength));

  }
  
  
  var passwordText = document.querySelector("#password");

  passwordText.value = genPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordLength);

