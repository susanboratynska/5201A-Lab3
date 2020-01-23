//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE UNIT TEST ==========
//alert("lab 3 UNIT TEST");//please delete this line once connected.
function PageLoad(){
	function test__checkHumberId(valueIn, expected) {
		"use strict";
		//Call the test function
		let result = checkHumberld(valueIn);
		//Create the display message
		let msg = "Value tested: " + valueIn + " Expected result: " + expected + " ";
		if (result == expected) {
			msg += "==PASSED==";
		}
		else {
			msg += "xxFAILEDxx";
		}
		//Display the message
		let msgBox = document.getElementById("msgs");
		msgBox.innerHTML += msg + "<br>";
	}

	function ProcessForm(event){
		event.preventDefault(); //BUILT IN FUNCTION THAT PREVENTS PAGE FROM SUBMITTING
	 	
	 	var formhandle = document.forms.login;
 		var userInput = formhandle.humberLogin.value;
 		//console.log(userInput);
 		// alert("test"); //CONFIRM SUBMIT FORM WORKS
		
		//Test to pass for valid input Upper case
		test__checkHumberId("N12345678", true);
		//Test to pass for valid input Lower case
		test__checkHumberId("n12345678", true);
		//Test to fail for missing "n"
		test__checkHumberId("12345678", false);
		//Test to fail for missing digit
		test__checkHumberId("n1234567", false);
		//Test to fail for missing digit and "n"
		test__checkHumberId("1234567", false);
		//Test to fail for incorrect letter
		test__checkHumberId("a12345678", false);
		//Test to fail for extra digit
		test__checkHumberId("n123456789", false);
		//Test to test
		test__checkHumberId("N12345678", false);
	}

	var loginForm = document.querySelector("form");

	loginForm.addEventListener("submit", ProcessForm);

 }

window.onload = PageLoad; 