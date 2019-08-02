// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp



// Section header and button

let sectionHeader = document.getElementById('section-header');

console.dir(sectionHeader)
console.log(sectionHeader)

// Section

let section =document.getElementById('section');
console.log(section)

// Add event listener to section header

sectionHeader.addEventListener('click', function () {

    if (section.style.display !== 'none') {
        section.style.display = 'none';
    }
    else {
        section.style.display = 'block';
    }
    
})

