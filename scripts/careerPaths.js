// JavaScript: Adds interactive effect by dynamically controlling height
const careerPaths = document.querySelectorAll('.career-path');

careerPaths.forEach(path => {
    path.addEventListener('mouseover', function() {
        this.style.maxHeight = '250px'; // Expand on hover
    });

    path.addEventListener('mouseout', function() {
        this.style.maxHeight = '50px'; // Collapse when not hovered
    });
});