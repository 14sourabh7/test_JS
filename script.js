function submitData() {
  var name = document.getElementById("name").value; //variable for name
  var mobile = document.getElementById("mobile").value; //variable for mobile
  var hasNumber = /^[a-zA-Z ]{2,30}$/; //exp for string check
  document.getElementById("success").innerHTML = ""; //hiding message incase of error

  // block to validate name
  if (name) {
    if (!hasNumber.test(name)) {
      document.getElementById("errorName").innerHTML =
        "*Name should contain only string";
      document.getElementById("name").style.borderColor = "red";
      document.getElementById("wrapper").style.boxShadow =
        "rgba(255, 10, 31, 0.616) 0px 7px 29px 0px";
    } else {
      document.getElementById("name").style.borderColor = "black";
      document.getElementById("errorName").innerHTML = "";
    }
  } else {
    document.getElementById("errorName").innerHTML = "*Name can't be empty.";
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("wrapper").style.boxShadow =
      "rgba(255, 10, 31, 0.616) 0px 7px 29px 0px";
  }

  // block to validate mobile
  if (mobile) {
    if (isNaN(mobile)) {
      document.getElementById("errorMobile").innerHTML =
        "*Mobile number should be numeric";

      document.getElementById("mobile").style.borderColor = "red";
      document.getElementById("wrapper").style.boxShadow =
        "rgba(255, 10, 31, 0.616) 0px 7px 29px 0px";
    } else {
      if (mobile.length == 0) {
        document.getElementById("mobile").style.borderColor = "black";
        document.getElementById("errorMobile").innerHTML = "";
      } else {
        document.getElementById("mobile").style.borderColor = "red";
        document.getElementById("errorMobile").innerHTML =
          "*Mobile number must be of 10 digits.";

        document.getElementById("wrapper").style.boxShadow =
          "rgba(255, 10, 31, 0.616) 0px 7px 29px 0px";
      }
    }
  } else {
    document.getElementById("errorMobile").innerHTML =
      "*Mobile number can't be empty.";
    document.getElementById("mobile").style.borderColor = "red";
    document.getElementById("wrapper").style.boxShadow =
      "rgba(255, 10, 31, 0.616) 0px 7px 29px 0px";
  }

  // final output block
  if (name && mobile) {
    if (hasNumber.test(name) && !isNaN(mobile)) {
      //validating mobile number
      if (mobile.length == 10) {
        document.getElementById("errorMobile").innerHTML = "";
        document.getElementById("errorName").innerHTML = "";
        document.getElementById("name").style.borderColor = "black";
        document.getElementById("mobile").style.borderColor = "black";
        document.getElementById("wrapper").style.boxShadow =
          "rgba(105, 226, 81, 0.822) 0px 7px 29px 0px";

        document.getElementById("success").innerHTML =
          "Submitted Successfully - " + name + ":" + mobile + "."; //final result
      }
    }
  }
}
