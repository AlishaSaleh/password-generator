// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(len, low, up, sc, nu) {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var specialChar = "!£$%^&*()<>?:@~{}[];'#,./-=_+";
  var passLength = "";
  var charSet = "";

  if (up) charSet += upperCase;
  if (low) charSet += lowerCase;
  if (nu) charSet += number;
  if (sc) charSet += specialChar;
  if (len) passLength;

  retVal = "";
  for (i = 0, n = charSet.len; i < len; ++i) {
    retVal += charSet.charAt(Math.floor(Math.random() * n));

  }

  return retVal;
}



// Write password to the #password input
function writePassword() {
  var password;
  var passLength = prompt("How long should the password be?");
  var userLower = confirm("Do you need a lower case character?");
  var userUpper = confirm("Do you need an upper case character?");
  var userNum = confirm("Do you need a number?");
  var userSpecial = confirm("Do you need a special character?");

  if ((passLength <= 128 && passLength >= 8) && (userSpecial || userUpper || userNum || userLower)) {
    password = generatePassword(passLength, userLower, userUpper, userSpecial, userNum);
  
   
  } else {
    alert("Not a valid password length or at least one type needs to be checked!");
    return false;
  }

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
