var day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama"];

function dayOfBirth() {
  var birthDate = document.getElementById("datepicker").value;
  var date = new Date(birthDate);
  var dayOfBirth = date.getDay();
  //get gender
  var genders = document.getElementsByName("gender");
  var gender_value;
  for (var i = 0; i < genders.length; i++) {
    if (genders[0].checked) {
      gender_value = "male";
    }
    if (genders[1].checked) {
      gender_value = "female";
    }
  }


  switch (gender_value) {
    case "male":
      if (dayOfBirth == 0) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[0] +
          "</span> and your Akan name is <span>" +
          maleNames[0];
      }
      if (dayOfBirth == 1) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[1] +
          "</span> and your Akan name is <span>" +
          maleNames[1];
      }
      if (dayOfBirth == 2) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[2] +
          "</span> and your Akan name is <span>" +
          maleNames[2];
      }
      if (dayOfBirth == 3) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[3] +
          "</span> and your Akan name is <span>" +
          maleNames[3];
      }
      if (dayOfBirth == 4) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[4] +
          "</span> and your Akan name is <span>" +
          maleNames[4];
      }
      if (dayOfBirth == 5) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[5] +
          "</span> and your Akan name is <span>" +
          maleNames[5];
      }
      if (dayOfBirth == 6) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[6] +
          "</span> and your Akan name is <span>" +
          maleNames[6];
      }

      break;
    case "female":
      if (dayOfBirth == 0) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[0] +
          "</span> and your Akan name is <span>" +
          femaleNames[0];
      }
      if (dayOfBirth == 1) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[1] +
          "</span> and your Akan name is <span>" +
          femaleNames[1];
      }
      if (dayOfBirth == 2) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[2] +
          "</span> and your Akan name is <span>" +
          femaleNames[2];
      }
      if (dayOfBirth == 3) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[3] +
          "</span> and your Akan name is <span>" +
          femaleNames[3];
      }
      if (dayOfBirth == 4) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[4] +
          "</span> and your Akan name is <span>" +
          femaleNames[4];
      }
      if (dayOfBirth == 5) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[5] +
          "</span> and your Akan name is <span>" +
          femaleNames[5];
      }
      if (dayOfBirth == 6) {
        document.getElementById("display").innerHTML =
          "You Were you born on <span>" +
          day[6] +
          "</span> and your Akan name is <span>" +
          femaleNames[6];
      }

      break;
  }

  var form = document.getElementById("myForm");
  function handleForm(event) {
    event.preventDefault();
  }
  form.addEventListener("submit", handleForm);

}
 function clearOutput() {
document.getElementById('display').innerHTML = "";
}





