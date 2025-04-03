// Smooth scrolling for navbar links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Assignment display function
function showAssignment(num) {
    const content = document.getElementById('assignment-content');
    content.innerHTML = `<h3>Assignment ${num}</h3><p>Details about Assignment ${num} will go here.</p>`;
    content.style.display = 'block';
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('form-response').innerText = 'Message sent successfully!';
    this.reset();
});
