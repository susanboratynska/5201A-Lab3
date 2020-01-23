//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */
var humberRegex = /^N\d{8}$/i;
function checkHumberld(userIn){
	"use strict";
	let validId = false;

	if (humberRegex.test(userIn)) {
		validId = true;
	}

	return validId;

}
 