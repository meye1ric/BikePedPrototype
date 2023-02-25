	savedMessage = "Saved!";
	date = new Date();
	day = date.getDate();
	month = date.getMonth() + 1;
	year = date.getFullYear();

	currentDate = `${year}-${month}-${day}`;
  //console.log(currentDate);

$(document).ready(function() {
	
	$("#savedMessage").empty(); // Clear previous message.

  $("#savePageData").click(function() {
    //console.log("saved fired");
  	showSavedMessage();
  });
  
  $("#sendNoticeDiv").click(function() {
  	var emailSentConfirmed = "<label style=\"float:left; margin-left:20px; font-weight:bold; color:green; padding-top:10px;\">Email sent!</label>";
  	var emailSentCanceled = "<label style=\"float:left; margin-left:20px; font-weight:bold; color:red; padding-top:10px;\">Email canceled!</label>";

  	if (confirm("Send email notification to impute?") == true) {
  		$("#sendNoticeConfirmedLabel").html(emailSentConfirmed).fadeIn().delay(10000).fadeOut(3000);
  	} else {
  		$("#sendNoticeConfirmedLabel").html(emailSentCanceled).fadeIn().delay(10000).fadeOut(3000);
  	}  });

});


function showSavedMessage() {
  $("#savedMessage").html(savedMessage).fadeIn().delay(10000).fadeOut(3000);
}


function setVerifiedDate() {
	//console.log('verifiedCheckbox function fired');
  
	// Evaluate each DOM element and make the following changes.
  for (let i = 1; i < 5; i++) {
  	//console.log('i = ' + i);
    
  	if ($('#verifiedCheckbox' + i).prop('checked')) { // Is the checkbox checked?
      $('#verifiedDateLabel' + i).text(currentDate); // Attach the current date to this DOM element.
      $('#verifiedDateLabel' + i).show(); // Show the contents of this DOM element.
  	} else {
  		$('#verifiedDateLabel' + i).hide(); // Hide the contents of this DOM element.
  		$('#imputeCheckbox' + i).prop('checked', false); // Uncheck this checkbox.
  	}
  }
}


function impute() {
	//console.log('impute function fired');
  
	// Evaluate each DOM element and make the following changes.
  for (let i = 1; i < 5; i++) {
  	//console.log('i = ' + i);
    
  	if ($('#imputeCheckbox' + i).prop('checked')) { // Is the checkbox checked?
    	//console.log('imputeCheckbox = ' + i + ' is checked');
  		
  		$('#verifiedCheckbox' + i).prop('checked', true);  // Check this checkbox.
      $('#verifiedDateLabel' + i).text(currentDate); // Attach the current date to this DOM element.
      $('#verifiedDateLabel' + i).show(); // Show the contents of this DOM element.
  	}
  }
}
