//Finish the code below to make the counter increment everytime you press the button
//Also, write the listener for the decrement button so that the counter decrements when you click it

let incrementButton = document.getElementById('increment');
let decrementButton = document.getElementById('decrement');
let counter = document.getElementById('counter');

// Initialize count

let count = 0;

// on click, increment count

incrementButton.addEventListener('click', function () {
  counter.innerHTML = ++count
})

// on click, decrement count

decrementButton.addEventListener('click', function () {
  counter.innerHTML = --count
})