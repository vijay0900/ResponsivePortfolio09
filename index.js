let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >=offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
      });

      let header = documents.querySelector('header');
      header.classList.toggle('sticky', window.scrollY > 100);

      menuIcon.classList.remove('fa-xmark');
      navbar.classList.remove('active');

    };

ScrollReveal({
        distance:'80px',
        duration: 2000,
        delay: 200,
      });


ScrollReveal().reveal('.home-content, heading', {orgin: 'top'  });
ScrollReveal().reveal('.home-img, .service-container, .portfolio-box, .contact form', {origin: 'button'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});  
ScrollReveal().reveal('.home-contact p, .about-content', { orgin: 'right'});


const typed = new Typed('.multiple-text', {
    strings: ['Frontend developer','Web Designer','Data Analyst','ML Engineer'],
    typedSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

// Get the form element
const form = document.getElementById('myForm');
const fullName = document.getElementById('fullName');
  const emailAddress = document.getElementById('emailAddress');
  const mobileNumber = document.getElementById('mobileNumber');
  const emailSubject = document.getElementById('emailSubject');
  const message = document.getElementById('message');


// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the input values
  
  // Display a pop-up message
  alert("Thank you for sending a message! We will get back to you soon.");

  // Clear the form fields
  document.getElementById('fullName').value = '';
  document.getElementById('emailAddress').value = '';
  document.getElementById('mobileNumber').value = '';
  document.getElementById('emailSubject').value = '';
  document.getElementById('message').value = '';
});