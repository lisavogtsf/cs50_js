/*
 * caesar.js (originally in C for CS50x pset2)
 * Lisa Vogt 2015
 * lisavogt.sf@gmail.com
 *
 * - from command line take in an integer key
 *  -- given different handling of command-line input between
 *     node and browser console, I'm doing these as parameters
 * - prompt the user for a string of plaintext to encode
 * - using "Caesar's cipher" with key, rotate all letters
 *  -- maintain case
 *  -- if not a letter do not change
 * - print ciphertext
 */

 function caesar(key, plaintext) {

 	var plainCharCode;
 	var zeroedCharCode;
 	var cipherCharCode;
 	var ciphertext = [];

 	// TODO/lv command line implementation need to check for
 	// valid number of command line arguments (2)
 	// then do a separate prompt for plaintext

 	// make sure k is an integer not a string/character
 	key = parseInt(key);

 	// make sure key is non-negative
	if (key < 0) {
		console.log("Key must be a non-negative integer.\n");
		return 1;
	}

 	// make sure plaintext is a valid string
 	if ( typeof plaintext !== "string" || plaintext.length === 0) {
 		console.log("Please provide a valide plaintext string.\n");
 		return 1;
 	}

 	// using ASCII math rotate characters by k
 	// preserving caplitalization and only changing alphabetical chars
 	// zero out the ascii so we can control going off the end of the
 	// alphabet with just % 26, then put back in place
	for (var i = 0; i < plaintext.length; i++) {

		plainCharCode = plaintext[i].charCodeAt();

		if (plaintext[i] >= "A" && plaintext[i] <= "Z") {
			zeroedCharCode = plainCharCode - "A".charCodeAt();
			cipherCharCode = ((zeroedCharCode + key) % 26) + "A".charCodeAt();

		} else if (plaintext[i] >= "a" && plaintext[i] <= "z") {
			zeroedCharCode = plainCharCode - "a".charCodeAt();
			cipherCharCode = ((zeroedCharCode + key) % 26) + "a".charCodeAt();
		} else {
			// if not alphabetical, no change
			cipherCharCode = plainCharCode;
		}
		
		// after transformation, add to ciphertext
		ciphertext.push(String.fromCharCode(cipherCharCode));
	}

 	// print plaintext and ciphertext
 	console.log("Plaintext message: \n", plaintext);
	console.log("Encrypted message: \n", ciphertext.join(""));
	return 0;
 }

var key = 13;
var plaintext = "Be sure to drink your Ovaltine!";

caesar(key, plaintext);