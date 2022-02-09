function submitData() {
  var name = document.getElementById("name").value;
  var mobile = document.getElementById("mobile").value;
  console.log(name, mobile);
  var hasNumber = /\d/;

  if (name) {
    if (hasNumber.test(name)) {
      document.getElementById("errorName").style.display = "block";
      document.getElementById("errorName").innerHTML = "Enter string";
      document.getElementById("name").style.borderColor = "red";
    } else {
      document.getElementById("name").style.borderColor = "black";
      document.getElementById("errorName").style.display = "none";
    }
  } else {
    document.getElementById("errorName").innerHTML = "*name field is empty";
    document.getElementById("name").style.borderColor = "red";
    document.getElementById("errorName").style.display = "block";
  }
  if (mobile) {
    if (isNaN(mobile)) {
      document.getElementById("errorMobile").style.display = "block";
      document.getElementById("errorMobile").innerHTML = "Enter numeric digits";
      document.getElementById("mobile").style.borderColor = "red";
      return;
    } else {
      document.getElementById("mobile").style.borderColor = "black";
      document.getElementById("errorMobile").style.display = "none";
    }
  } else {
    document.getElementById("errorMobile").style.display = "block";
    document.getElementById("errorMobile").innerHTML = "*mobile field is empty";
    document.getElementById("mobile").style.borderColor = "red";
  }

  if (name && mobile) {
    if (!hasNumber.test(name) && !isNaN(mobile)) {
      if (mobile.length == 10) {
        document.getElementById("errorMobile").style.display = "none";
        document.getElementById("errorName").style.display = "none";
        document.getElementById("name").style.borderColor = "black";
        document.getElementById("mobile").style.borderColor = "black";

        document.getElementById("success").innerHTML = "submitted successfully";
      } else {
        document.getElementById("mobile").style.borderColor = "red";
        document.getElementById("errorMobile").style.display = "block";
        document.getElementById("errorMobile").innerHTML = "enter 10 digits";
      }
    }
  }
}
