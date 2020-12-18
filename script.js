// Assignment Code
var generateBtn = document.querySelector("#generate");



// determine user input
function userPrmpt() {
  var passLegnth = prompt("How long should the password be?");
  var userLower = confirm("Do you need a lower case character?");
  var userUpper = confirm("Do you need an upper case character?");
  var userNum = confirm("Do you need a number?");
  var userSpecial = confirm("Do you need a special character?");
};

generateBtn.addEventListener("click", userPrmpt);





// if (passLegnth <= 128 && passLegnth > 0) {


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //where does this go?
  // if (userLower === confirm) {


  //retrived from internet
  //   var length = passLegnth,
  //     charset = "abcdefghijklmnopqrstuvwxyz",
  //     retVal = "";
  //   for (var i = 0, n = charset.length; i < length; ++i) {
  //     retVal += charset.charAt(Math.floor(Math.random() * n));
  //   }
  //   return retVal;
  // }
  //retrived from internet

  passwordText.value = password;


}
    // }
// });

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
