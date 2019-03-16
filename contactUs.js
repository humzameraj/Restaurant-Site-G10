//Created by Humza Meraj Last Date of revision: 3/15/19


function validateForm() {
  var errormessage = "";

  if(document.getElementById('name').value == "")
  {
    errormessage += "Enter your name \n";
  }
  if(document.getElementById('email').value == "")
  {
    errormessage += "Enter your email address \n";
  }
  if(document.getElementById('phone').value == "")
  {
    errormessage += "Enter your phone number \n";
  }
  if(document.getElementById('info').value == "")
  {
    errormessage += "Enter a brief description for your request in the Additional Information textarea \n"
  }
  if(document.querySelectorAll('input[type="checkbox"]:checked').length < 1)
  {
    errormessage += "Please select the day(s) for us to reach you \n"
  }
  if(errormessage != "")
  {
    alert(errormessage);
    return false;
  }
  if(errormessage == "")
  {
    alert("Your request has been successfully submitted. One of our managers will be in contact with you shortly. ");
  }


}
