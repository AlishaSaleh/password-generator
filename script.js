// Assignment Code
var generateBtn = document.querySelector("#generate");



// User prompts
// function userPrmpt() {
//   var passLegnth = prompt("How long should the password be?");
//   var userLower = confirm("Do you need a lower case character?");
//   var userUpper = confirm("Do you need an upper case character?");
//   var userNum = confirm("Do you need a number?");
//   var userSpecial = confirm("Do you need a special character?");
// };

// generateBtn.addEventListener("click", userPrmpt);






function generatePassword(len, low, up, sc, nu) {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789";
  var specialChar = "!£$%^&*()<>?:@~{}[];'#,./-=_+";
  var passLegnth ="";
  var charset = "";
  if (up) charset += upperCase;
  if (low) charset += lowerCase;
  if (nu) charset += number;
  if (sc) charset += specialChar;
  if (len) passLegnth;
  charset.split();

  password = upperCase + lowerCase + number + specialChar;

  


  retVal = "";
    for (var i = 0, n = charset.len; i < len; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    // shuffle(retVal);
    return retVal;
    
  
  //needs to include len somehow
  // after this then throw in for loop
  
   
}

// Write password to the #password input
function writePassword() {
  var password;
  var passLegnth = prompt("How long should the password be?");
  var userLower = confirm("Do you need a lower case character?");
  var userUpper = confirm("Do you need an upper case character?");
  var userNum = confirm("Do you need a number?");
  var userSpecial = confirm("Do you need a special character?");

  if ((passLegnth <= 128 && passLegnth >= 8) && (userSpecial || userUpper || userNum || userLower)) {
    password = generatePassword(passLegnth, userLower, userUpper, userSpecial, userNum);
  } else {
    alert("Not a valid password legnth or at least one type needs to be checked!");
    return false;
  }



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
