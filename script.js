let outputValue = document.getElementById("outputValue");
let clear = document.getElementById("clear");
let calculate = document.getElementById("calculate");
let number = document.getElementsByClassName("number");

//for number key
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    outputValue.innerHTML += number[i].innerHTML;
  });
}

//clear key
clear.addEventListener("click", function () {
  outputValue.innerHTML = "";
});

// calculate function
calculate.addEventListener("click", function () {
  if (outputValue.innerHTML == "") {
    outputValue.innerHTML = "";
  } else {
    let result = eval(outputValue.innerHTML);
    outputValue.innerHTML = result;
  }
});
