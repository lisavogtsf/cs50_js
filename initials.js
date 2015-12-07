/*
 * initials.js for CS50 pset2
 * Lisa Vogt 2015
 * - take in name (2+ names with spaces, no special characters, any case)
 * - print initials (uppercase, two letters, newline)
 */

var initials = function () {
  // get user input, can assume it's safe per CS50x specs
  var fullname = window.prompt();

  // break full name into array of individual name stirngs
  var nameArray = fullname.split(' ');
  var result = "";

  // iterate over name array, print first letter of each name
  // in upper case
  for (var i = 0; i < nameArray.length; i++) {
    result += nameArray[i].toUpperCase()[0];
  }
  
  // console.log will automatically print a newline
  // that's why we need to concatenate the results into a string
  // rather than logging each letter one by one
  console.log(result);
};
initials();