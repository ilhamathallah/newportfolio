document.addEventListener("DOMContentLoaded", function() {
    const texts = [
        "Junior Software Engineer",
        "Web Developer",
        "UI Desaign",
        "Student"
    ];
    let currentIndex = 0;
    const typewriterElement = document.getElementById("typewriter");
    let charIndex = 0;
    let isDeleting = false;

    function typeWriter() {
        const currentText = texts[currentIndex];
        if (isDeleting) {
            typewriterElement.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.innerHTML = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 2000); // Pause at the end of the text
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % texts.length;
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(typeWriter, speed);
    }

    typeWriter();
});

// contact
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);

    fetch(url, {
        method: 'POST',
        body: formData,
        mode: "no-cors",
    })
    .then(() => {
        // url thank you
        window.location.href = "/thankyou.html"
    })
    .catch((e) => alert("Error occured"));
});

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});
