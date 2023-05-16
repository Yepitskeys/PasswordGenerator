// Password Characters
var SpecialCharacters = ['@', '#', '!', '$', '%', '^', '&', '*', '(', ')', '-', '+', ];

var Numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ];

var UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ];

var LowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ];

// PROVIDED STARTER CODE: Variable to store length of password from user input
function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // PROVIDED STARTER CODE: Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }
  // Password minimum length
  if (length < 8) {``
    alert('Password is not long enough. Must use at least 8 characters');
    return null;
  }

  // ** Added Password maximum length
  if (length > 128) {
    alert('Password is too long. Cannot use no more than 128 characters');
    return null;
  }

  // PROVIDED STARTER CODE: Variable to store boolean regarding the inclusion of special characters
  // **Added variable for numbers, lower case and capital letters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );
  var hasNumbers = confirm(
    'Click OK to confirm including number characters.'
  );
  var hasUpperCase = confirm(
    'Click OK to confirm including Uppercase characters.'
  );
  var hasLowerCase = confirm(
    'Click OK to confirm including Lowercase characters.'
  );

    //Created conditional statement to check for characters
  if (
    hasSpecialCharacters === false &&
    hasNumbers === false &&
    hasUpperCase === false &&
    hasLowerCase === false
  ) {
    alert('Password is missing required characters');
    return null;
  }

  // PROVIDED STARTER CODE: Object to store user input
  // **Added the variable to check for the Number character, UpperCase and LowerCase,
   var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumbers: hasNumbers,
    hasUpperCase: hasUpperCase,
    hasLowerCase: hasLowerCase,
   }

   return passwordOptions;
}

// PROVIDED STARTER CODE: Function for getting a random element from an array(all instances of arr will be replaced by an ACTUAL VALUE when we do our callback.)
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

// PROVIDED STARTER CODE: Function to generate password with user input
 // ***Added code for the number, Uppercase and Lowercase characters if statements
function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];
  if (!options) return null;

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(SpecialCharacters);
    guaranteedCharacters.push(getRandom(SpecialCharacters));
  }
  
  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(Numbers);
    guaranteedCharacters.push(getRandom(Numbers));
  }
  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(LowerCase);
    guaranteedCharacters.push(getRandom(LowerCase));
  }
  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(UpperCase);
    guaranteedCharacters.push(getRandom(UpperCase));
  }

// **Added forloops for password length
  for (var i = 0; i < options.length; i++){
    var possibleCharacters = getRandom(possibleCharacters);

    result.push(possibleCharacters);
  }
  for (var i = 0; i < guaranteedCharacters.length; i++){
    result[i] = guaranteedCharacters[i];
  }

// PROVIDED STARTER CODE: Transform the result into a string and pass into writePassword
    return result.join('');
}

// PROVIDED STARTER CODE:
var generateBtn = document.querySelector("#generate");

// PROVIDED STARTER CODE: Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// PROVIDED STARTER CODE: Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

