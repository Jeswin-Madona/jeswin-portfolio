


// Navbar Active Script
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.nav-link');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach((sec) => {
        let offset = sec.offsetTop - 120; // adjust for fixed navbar height
        let height = sec.offsetHeight;
        let sectionId = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });

            // ✅ Safe null-check before using classList
            const currentLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            if (currentLink) {
                currentLink.classList.add('active');
            }
        }
    });
};

// imp! Email JS Script
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let params = {
            from_name: document.getElementById('full_name')?.value || "",
            email_id: document.getElementById('email_id')?.value || "",
            message: document.getElementById('message')?.value || ""
        };
        console.log(params);
const spinner = document.getElementById('loading-spinner');
if (spinner) spinner.style.display = "block";
        emailjs.send("service_u7p87y8", "template_6nb4xzr", params)
  .then(() => {
    // success logic
    if (spinner) spinner.style.display = "none";

    const thankYouMsg = document.querySelector('.thank-you-msg');
           /*if (thankYouMsg) {
                thankYouMsg.style.display = "block";
                setTimeout(() => {
                    thankYouMsg.style.display = "none";
                }, 2500);
            }*/
            if (thankYouMsg) {
          thankYouMsg.classList.add('show');
          setTimeout(() => {
            thankYouMsg.classList.remove('show');
          }, 2500);
        }



            // Clear form fields safely
            if (document.getElementById('full_name')) document.getElementById('full_name').value = "";
            if (document.getElementById('email_id')) document.getElementById('email_id').value = "";
            if (document.getElementById('message')) document.getElementById('message').value = "";
  })
  .catch((error) => {
    if (spinner) spinner.style.display = "none";

    console.error("EmailJS error:", error);
  });

        /*emailjs.send("service_u7p87y8", "template_cwr4ppj", params).then(() => {
            
        });*/
    });
}   





