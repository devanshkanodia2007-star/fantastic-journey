// Check that JavaScript is connected

console.log("Portfolio is working!");


// Contact form

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thanks for your message! ✦");

        form.reset();

    });

}