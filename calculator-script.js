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

    display.value = `i miss you :(`;

    setTimeout(() => {
      window.open("https://www.youtube.com/watch?v=nw2sWyUIw1o&autoplay=1&mute=0", "_blank");
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
