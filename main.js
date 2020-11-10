var elResultAlert = document.querySelector(".js-result-alert");
var elJoggingForm = document.querySelector(".js-jogging-form");
var elGymCheckbox = document.querySelector(".js-is-gym-open");
var elTemperatureInput = document.querySelector(".js-temperature-input");
var elRainCheckbox = document.querySelector(".js-is-raining");

var jog = function (evt) {
  evt.preventDefault();

  var userInput = elTemperatureInput.value.trim();
  if (userInput === "") {
    elTemperatureInput.classList.add("is-invalid");
    return;
  }
  elTemperatureInput.classList.remove("is-invalid");
  var temperature = parseFloat(userInput, 10);
  if (isNaN(temperature)) {
    elTemperatureInput.classList.add("is-invalid");
    return;
  }

  elTemperatureInput.classList.remove("is-invalid");


  var isTemperatureOk = temperature > 5 && temperature < 30;
  if (isTemperatureOk && elGymCheckbox.checked) {
    elResultAlert.classList.remove("alert-success", "alert-danger");
    elResultAlert.classList.add("alert-success");
    console.log("boramiz");
    elResultAlert.textContent = "Boramiz Katta og'a :)";
  } else if (isTemperatureOk && !elRainCheckbox.checked && !elGymCheckbox.checked) {
    elResultAlert.classList.remove("alert-success", "alert-danger");
    elResultAlert.classList.add("alert-success");
    console.log("boramiz");
    elResultAlert.textContent = "Boramiz";
  }

  else {
    elResultAlert.classList.remove("alert-success", "alert-danger");
    elResultAlert.classList.add("alert-danger");
    console.log("yoq");
    elResultAlert.textContent = "Borolmaymiz"
  }







};

elJoggingForm.addEventListener("submit", jog);
elGymCheckbox.addEventListener("change", jog);
elRainCheckbox.addEventListener("change", jog);
elTemperatureInput.addEventListener("input", jog);