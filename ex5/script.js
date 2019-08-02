// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp


let myButton = document.getElementById('myButton')
let boxContainer = document.getElementById('boxContainer')

myButton.addEventListener('click', function () {

  // create new div
  var newDiv = document.createElement('div') 

  // add box class to new div
  newDiv.classList.add('box') 

  // append the new div to boxContainer
  boxContainer.appendChild(newDiv) 
});
