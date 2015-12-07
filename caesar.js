/*
 * caesar.js for CS50 pset2
 * Lisa Vogt 2015
 * - from command line take in an integer key 'k'
 *  -- given different handling of command line input between
 *     node and browser console, doing these as parameters
 * - prompt the user for a string of plaintext to encode
 * - using "Caesar's cipher" with key, rotate all letters
 *  -- maintain case
 *  -- if not a letter do not change
 * - print ciphertext
 */

 function caesar(k, plaintext) {

 	// if do command line implementation need to check for
 	// valid number of command line arguments (2)
 	// then do a separate prompt for plaintext

 	// make sure k is an integer not a string/character
 	k = parseInt(k);

 	// make sure plaintext is a valid string
 	if ( typeof plaintext !== "string" || plaintext.length === 0) {
 		console.log("Please provide a valide plaintext string");
 		return;
 	}

 	// using ASCII math rotate characters by k 
 	// preserving caplitalization and only changing alphabetical chars

	console.log(ciphertext);
 }

var k = 5;
var plaintext = "Round and round the ragged rock";

caesar(k, plaintext);