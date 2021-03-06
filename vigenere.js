/*
 * vigenere.js (originally in C for CS50x pset2)
 * Lisa Vogt 2015
 * lisavogt.sf@gmail.com
 *
 * - encrypt a message using Vigenere's cipher
 * - accept one command-line argument, key
 *  -- given different handling of command-line input between
 *     node and browser console, I'm doing this as a parameter
 * - prompt for string of plaintext, plaintext
 * - encrypt plaintext via Vigenere's ciphyer using key
 *  -- use numeric value 0-25 of keyword letter, add to plaintext letter
 *     advance to next keyword letter 
 *  -- where  c[i] = (p[i] + k[j] % 26) 
 * - print ciphertext
 */

function vigenere (key) {
	var keyLength,
		regExpAlpha,
		plaintext,
		p,
		tmp;
	var ciphertext = "";
	var keyNumeric = [];
	var keyNumber = null;
;
	// validate key exists, is a string, is only alphabetical characters
	if (!key || typeof key !== "string") {
		console.log("Please supply exactly one keyword.");
		return 1;
	}

	regExpAlpha = /^[a-zA-Z]+$/;
	if (regExpAlpha.test(key) === false) {
		console.log("The keyword must only have alphabetical characters.");
		return 1;
	}
	// store key as array of equivalent numbers, first making all lower case
	// and setting char code so a == 0
	key = key.toLowerCase();
	keyLength = key.length;
	for (var k = 0; k < keyLength; k++) {
		keyNumeric[k] = key[k].charCodeAt() - 'a'.charCodeAt();
	}

	// prompt for plaintext, set cipher as equal initially
	plaintext = window.prompt();

	// encrypt plaintext with key -> ciphertext
	for (var i = 0, j = 0; i < plaintext.length; i++) {

		// set the keyNumber based on conversion to earlier numeric
		// conversion, loop at end of word
		keyNumber = keyNumeric[j % keyLength];
		p = plaintext[i].charCodeAt();


		// for uppercase letters
		if (/[A-Z]/.test(plaintext[i]) === true) {
			ciphertext += String.fromCharCode((p - "A".charCodeAt() + keyNumber) % 26 + "A".charCodeAt());
			j++;

		} else if (/[a-z]/.test(plaintext[i]) === true) {
			
			// lowercase letters
			ciphertext += String.fromCharCode((p - 'a'.charCodeAt() + keyNumber) % 26 + 'a'.charCodeAt());
			j++;

		} else {
			// punctuation and numbers (non-alpha) in plaintext will pass through unchanged
			ciphertext += plaintext[i];
		}
	}

	// print ciphertext
	console.log("Plaintext:  ", plaintext);
	console.log("Ciphertext: ", ciphertext);

	return 0;
}

vigenere('bacon');