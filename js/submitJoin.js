function ValidateEmail(emailAddress) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress))
  {
    console.log("emailAddress:" + emailAddress);
    return (true)
  }
    console.log("emailAddress:" + emailAddress)
    console.log("You have entered an invalid email address!")
    return (false)
}

function submitJoinButton()
{ 
    //Set to local variables to convert value to string.
    var _emailAddress = document.getElementById("emailAddress").value;
    var _emailLength = String(_emailAddress);
    var _validEmail = ValidateEmail(_emailAddress);

    if(_validEmail == false)
    {
        var _errorMsgLabel = document.getElementById("errorMsgLabel");
        _errorMsgLabel.innerHTML = "<span style='color: red;'>Please fill in or validate email address before submitting.</span>";
    }
    else if(_validEmail == true)
    {
        var _errorMsgLabel = document.getElementById("errorMsgLabel");
        _errorMsgLabel.innerHTML = "";

        //Retrieve data from form
        var _longitude = document.getElementById("Longitude").value;
        var _latitude = document.getElementById("Latitude").value;
        var _locationStatus = document.getElementById("locationStatus").value;

        //stringify json
        var jsonData = {emailAddress: _emailAddress, Longitude: _longitude, Latitude: _latitude, locationStatus: _locationStatus}
        var prayerJSON = JSON.stringify(jsonData);
        console.log("Data serialized:" + prayerJSON);

        var http_request;
        http_request = new XMLHttpRequest();
        http_request.onreadystatechange = function () { /* .. */ };
        http_request.open("POST", "https://tscbj12e4a.execute-api.us-east-1.amazonaws.com/add-prayer-warrior-daily-notification");
        http_request.send(prayerJSON);

        var _finishMsgLabel = document.getElementById("finishMsgLabel");
        _finishMsgLabel.innerHTML = "<span style='color: green;'>Your email address was submitted.  You'll need to confirm!</span>"

        //Clear fields
        ClearJoinForm();
    }
}