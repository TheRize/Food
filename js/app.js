function changePage(event, page) {
  event.preventDefault(); // Prevent the default link behavior

  // Hide the current active section
  const currentSection = document.querySelector('section.active');
  if (currentSection) {
    currentSection.classList.remove('active');
  }

  // Show the selected section
  const selectedSection = document.getElementById(page + '-us');
  selectedSection.classList.add('active');
}
