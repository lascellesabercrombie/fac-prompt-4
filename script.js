//


let inputArray = document.getElementById("text-input");
let button1 = document.getElementById("radio1");
let button2 = document.getElementById("radio2");
let button3 = document.getElementById("radio3");
let button4 = document.getElementById("radio4");
let submit = document.getElementById("submit")
let output = document.getElementById("output");

//makes input readable as array of numbers

function inputConverter (array) {

  array = array.split(",");
  array = Array.from(array);
  array = array.map(element => parseInt(element));
  return array;
}

console.log(inputConverter(inputArray.value))


// Write a function which doubles the number it's given

function doubleNum(num) {
  return num * 2;
}

// Write a function which multiplies the first num, by the second

function multiply(num1, num2) {
  return num1 * num2;
}

// // Use the map method, to call the doubleNum function

function mapDouble () {
  let map1 = inputConverter(inputArray.value)
  map1 = map1.map(doubleNum);
  output.innerHTML = map1;
}

// Use the map method to multiply the element by its index

function mapMultiply (){
  let map2 = inputConverter(inputArray.value);
  map2 =map2.map(multiply);
  output.innerHTML = map2;
}

// Use the filter method to fill an array with the numbers which are divisible by two

function divisible (){
  let filter1 = inputConverter(inputArray.value);
  filter1 = filter1.filter(element => {return element % 2 === 0})
  output.innerHTML = filter1;
} 

// Use the reduce method to return the total of each array

function arraySum () {
  let sum = inputConverter(inputArray.value);
  const reduced = (el1, el2) => el1 + el2;
  sum = sum.reduce(reduced); 
  output.innerHTML = sum;
}
//
/*  
    const words = /\w/;
    if (words.test(inputArray.value) == true){
  output.innerHTML = "Input should be a list of numbers";
    }
    else{
*/

function radioSelector () {
  const regex = /[a-z]/gi;
  let yourArray = inputArray.value;
  if (yourArray.match(regex)) {
    output.innerHTML = "Your input should not contain words";
  }
  else{
  if (button1.checked){
    mapDouble();
  }
  else if (button2.checked){
    mapMultiply();
  }
  else if (button3.checked){
    divisible();
  }
  else if (button4.checked){
    arraySum();
  }
  else {
    output.innerHTML = "Please select an option";
  }
}
}

submit.addEventListener('click', radioSelector);

