document.addEventListener('DOMContentLoaded', function() {
  let sections = document.querySelectorAll('.job-details > div');
  let currentSection = 0;

  function showSection(index) {
    if (index < 0 || index >= sections.length) return;

    sections.forEach((section, i) => {
      section.classList.remove('visible');
    });

    sections[index].classList.add('visible');
  }

  function nextSection() {
    currentSection = (currentSection + 1) % sections.length;
    showSection(currentSection);
  }

  // Initially show the first section
  showSection(currentSection);

  // Show the next section every 5 seconds (5000 milliseconds)
  setInterval(nextSection, 5000);
});
