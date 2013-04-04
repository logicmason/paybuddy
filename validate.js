$(document).ready(function(){

  var formHandler = function(event){
    //console.log("submitted"); // fixme: validate form here
    var number = ($('form #number').val());
    var ccv = ($('form #ccv').val());
    var name = ($('form #name').val());
    var addy1 =($('form #address1').val());
    var addy2 =($('form #address2').val());
    var expiration = ($('form #expiration').val());
    var description =($(' form #desc').val());
    var amount =($('form #amount').val());
    //console.log ("CC number: " + number);

    // console.log ("Valid number: " + validateNumber(number));
    // console.log ("Valid CCV: " + validateCCV(ccv));
    // console.log ("Valid Name: " + validateName(name));
    // console.log ("Valid Address: " + validateAddress (addy1, addy2));
    // validateExpiration(expiration);
    // validateDescription(description);
    console.log("Amount: "+amount);
    console.log("Amount valid? "+ validateAmount(amount));
    
    event.preventDefault(); // prevents the page from reloading
  };

  var validateNumber = function (str) {
  	if (allDigits(str) !== true) {
   		console.log("CC number must be all digits!");
  		return false;
  	}
  	if (str.length !== 16) {
  		console.log("CC number length must be 16!");
  		return false;
  	}
  	return true;
  }

  var allDigits = function (str) {
  	return (/\D/.test(str) === false) ;
  }
  var validateCCV = function(str) {
  	if (allDigits(str) !== true) {
  		console.log("CCV Must be all numbers");
  		return false;
  	}
  	if (str.length !== 3) {
  		console.log("CCV is only 3 numbers");
  		return false;
  	}
  	return true;
  }

  var validateExpiration = function (str) {
  	if (str === "") {
  		console.log("Date cannot be blank!");
  		return false;
  	}

  	var expDate = new Date(str);
  	var now = new Date();

  	var expired = function (now, t) {
  		return (now.getTime() > t.getTime() );
  	}

  	if (expired(now, expDate)) {
  		console.log("Your card has expired!");
  		return false;
  	}
  	return true;
  }

  var validateName = function (str) {
  	if (str.length < 3) {
  		console.log("Name too short!");
  		return false;
  	}
  	if (/\w/.test(str) === false) {
  		console.log("Name must have word characters!");
  		return false;
  	}
  	return true;
  }

  var validateAddress = function (str, str2) {
  	if (str.length < 3) {
  		console.log("Address too short!");
  		return false;
  	}

  	return true;
  }

  var validateDescription = function(str) {
  	if (str === "") {
  		alert("Description can't be blank");
  	}
  }

  var validateAmount = function(str) {
  	if (isNaN(str)) {
  		alert("This is Not a valid Sum");
  		return false;
  	}
  	if (str === "") {
  		alert("You must enter an amount");
  		return false;
  	}
  	return true;
  }

  $("form").submit(formHandler); // register a callback
});