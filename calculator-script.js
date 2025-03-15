//JS CODE//

const display = document.getElementById("display");

function displayTxt(input){
  display.value += input;
}

function clearDisplay(){
  display.value = "";
}

function backspaceDisplay() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  let calculate = display.value;

  try {
    eval(calculate);

    display.value = `i miss you guys :(`;

    setTimeout(() => {
      window.open("https://youtu.be/wk4dkPf08zw?si=sS1eGYtiOReRHINL&t=4", "_blank");
    }, 2000);
  } catch (error) {
    display.value = "invalid calculations";
  }
}

/**
function calculate() {
  let calculation = display.value;

  try {
    eval(calculation);

    display.value = `I miss you guys :(`;
  } catch (error) {
  display.value = "Invalid Calculation"
  }
}
**/
//working calculator//
/**
function calculate(){
  try{
  display.value = eval(display.value);
  }
  catch(error){
    display.value = "error";
  }
}
**/
