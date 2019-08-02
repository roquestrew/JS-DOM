// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"


let myButton = document.getElementById("myButton");
let boxes = document.getElementsByClassName("box");

// Trying out the for-of protocl

myButton.addEventListener("click", function() {
  for (let box of boxes) {
    box.style.backgroundColor = 'blue';
  }
});