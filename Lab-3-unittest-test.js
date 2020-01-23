//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.
function test__checkHumberId(valueIn, expected) {
    "use strict";
    //Call the test function
    let result = checkHumberId(valueIn);
	//Create the display message
    let msg = "Value tested: " + valueIn + " Expected result: xxFAILEDxx";
    if (expected) {
        msg = "Value tested: " + valueIn + " Expected result: ==PASSED==";
    }
	//Display the message
    let msgBox = document.getElementById("msgs");
    msgBox.innerHTML += msg;
}