//LAB 3 - UNIT TESTING
//======== THIS FILE IS FOR THE checkHumbrId FUNCTION ==========
//alert("lab 3 Function");//please delete this line once connected.
/** checkHumbrId Function
 * Validate input as a Humber College Student number.
 * Returns true if input validates.
 * @param {string} idIn
 */

 function PageLoad(){

 	var humberRegex = /N\d{8}/i;



 	function checkHumbrld(userIn){
		"use strict";
		let validId = false;

		

		if (userIn === "" || !userIn.test(humberRegex)){
			validId = true;
			return validID; 
		}



	}



	function ProcessForm(event){
		event.preventDefault(); //BUILT IN FUNCTION THAT PREVENTS PAGE FROM SUBMITTING
	 	
	 	var formhandle = document.forms.login;
 		var userInput = formhandle.humberLogin.value;
 		//console.log(userInput);
 		// alert("test"); //CONFIRM SUBMIT FORM WORKS 
	}

	var loginForm = document.querySelector("form");

	loginForm.addEventListener("submit", ProcessForm);




	

 }

window.onload = PageLoad; 