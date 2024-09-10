// script.js

document.getElementById('explore-btn').addEventListener('click', function() {
    window.location.href = 'why-computer-science.html'; // Update with the actual URL
});

//document.getElementById('get-started-btn').addEventListener('click', function() {
//    window.location.href = 'preparation-tips.html'; // Update with the actual URL
//});

// Add event listeners for feature sections
document.getElementById('career-paths').addEventListener('click', function() {
    window.location.href = 'career-paths.html'; // Update with the actual URL
});

document.getElementById('job-opportunities').addEventListener('click', function() {
    window.location.href = 'job-opportunities.html'; // Update with the actual URL
});

document.getElementById('preparation-tips').addEventListener('click', function() {
    window.location.href = 'preparation-tips.html'; // Update with the actual URL
});

// Script for preparation tips.html
function visitOcu() {
    // Redirect to Oklahoma Christian University's Computer Science program page
    window.location.href = 'https://www.oc.edu/academics/majors/computer-science'; // Replace with the actual URL
}
function findJobes() {
    //More career Job Opportunities
    window.location.href = 'https://www.indeed.com/jobs?q=computer+science&l=&from=searchOnHP&vjk=70afb95a7806db1a'; // Replace with the actual URL
}

document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.getElementById('get-started-btn');
    const hiddenContent = document.querySelector('.hidden-content');

    getStartedBtn.addEventListener('click', function() {
        hiddenContent.style.display = 'block';
        setTimeout(() => {
            hiddenContent.classList.add('show');
        }, 10);
    });
});

