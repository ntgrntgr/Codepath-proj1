// Script for preparation tips.html
function visitOcu() {
    // Redirect to Oklahoma Christian University's Computer Science program page
    window.location.href = 'https://www.oc.edu/academics/majors/computer-science'; // Replace with the actual URL
}

function visitFreeCodeCamp() {
    window.location.href = 'https://www.freecodecamp.org'; // Redirect to FreeCodeCamp
}

document.addEventListener('DOMContentLoaded', function() {
    const step2 = document.querySelector('.step:nth-child(2)'); // Select the second step element
    step2.addEventListener('click', function() {
        visitFreeCodeCamp(); // Redirect to FreeCodeCamp on click
    });
});