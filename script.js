const contactForm = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        successMessage.textContent = 'Please fill out form';
        successMessage.style.color = 'red';
    } else {
        successMessage.textContent = 'Your message has been sent. Thank you!';
        successMessage.style.color = 'green';

        contactForm.reset();
    }
});

document.addEventListener('DOMContentLoaded', () => {

const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');

        const category = this.getAttribute('data-category');
        projects.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});

//theme chnaging, 
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

let isTheme1 = false; 

themeToggle.addEventListener('click', () => { 
    if (isTheme1) {
        body.classList.remove('theme-1');
        themeToggle.textContent = "Switch Theme";
    } else {
        body.classList.add('theme-1');
        themeToggle.textContent = "Switch Theme";
    }

    isTheme1 = !isTheme1;
});


const showButtons = document.querySelectorAll('.showButton');
    showButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            const isVisible = details.style.display === 'block';
            details.style.display = isVisible ? 'none' : 'block';
            button.textContent = isVisible ? 'Details' : 'Hide Details';
        });
    });

    
});
