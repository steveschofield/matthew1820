function submitButton()
{ 

    //Set to local variables to convert value to string.
    var _msg = document.getElementById("Message").value;
    var _lengthMsg = String(_msg);

    var _fname = document.getElementById("firstName").value;
    var _lengthFName = String(_fname);

    var _lname = document.getElementById("lastName").value;
    var _lengthLName = String(_lname);

    //console.log("Length of message:" + _lengthMsg.length);

    if(_lengthMsg <= 10)
    {
        var _errorMsgLabel = document.getElementById("errorMsgLabel");
        _errorMsgLabel.innerHTML = "<span style='color: red;'>Please fill in prayer before submitting.</span>";
    }
    else if(_lengthMsg > 1000)
    {
        var _errorMsgLabel = document.getElementById("errorMsgLabel");
        _errorMsgLabel.innerHTML = "<span style='color: red;'>Prayer text box accepts 1000 charactors.</span>";
    }
    else if(_lengthFName > 250)
    {
        var _errorMsgLabel = document.getElementById("errorMsgLabel");
        _errorMsgLabel.innerHTML = "<span style='color: red;'>First name accepts 250 charactors.</span>";
    }
    else if(_lengthLName > 250)
    {
        var _errorMsgLabel = document.getElementById("errorMsgLabel");
        _errorMsgLabel.innerHTML = "<span style='color: red;'>Last name accepts 250 charactorss.</span>";
    }
    else
    {
        //Retrieve data from form
        //var _fname = document.getElementById("firstName").value;
        //var _lname = document.getElementById("lastName").value;
        //_msg = document.getElementById("Message").value;
        var _longitude = document.getElementById("Longitude").value;
        var _latitude = document.getElementById("Latitude").value;
        var _locationStatus = document.getElementById("locationStatus").value;
        //console.log("locationStatus:" + _locationStatus);

        //stringify json
        var jsonData = {firstName: _fname, lastName: _lname, Message: _msg, Longitude: _longitude, Latitude: _latitude, locationStatus: _locationStatus}
        var prayerJSON = JSON.stringify(jsonData);
        console.log("Data serialized:" + prayerJSON);

          var http_request;
          http_request = new XMLHttpRequest();
          http_request.onreadystatechange = function () { /* .. */ };
          http_request.open("POST", "https://bsky7spph0.execute-api.us-east-1.amazonaws.com/write-prayer-json");
          http_request.send(prayerJSON);

        var _finishMsgLabel = document.getElementById("finishMsgLabel");
        _finishMsgLabel.innerHTML = "<span style='color: green;'>Your prayer was submitted!</span>"

        //Clear fields
        ClearFields();
    }
}