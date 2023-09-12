//get a reference to the button and the target section
const contactButton =document.getElementById("contactButton");
const contactSection = document.getElementById("contact");

// add an event listener to the button
contactButton.addEventListener("click", function() {

  // scroll to the section when the button is clicked
  contactSection.scrollIntoView({behavior: "smooth"});
});

// Smooth scrolling for anchor links in the navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
  e.preventDefault();

  const targetId = this.getAttribute('href').substring(1); // Get the target section ID
  const targetSection = document.getElementById(targetId);

  if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
  }
});
});