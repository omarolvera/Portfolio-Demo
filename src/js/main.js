// This file contains the main functionality of the personal portfolio single-page application.

// Function to fetch project data from the JSON file and populate the project gallery
function loadProjects() {
    fetch('js/projects.json')
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('project-gallery');
            gallery.innerHTML = '';
            data.projects.forEach((project, idx) => {
                // Create a new card for each project
                const card = document.createElement('div');
                card.className = 'col-md-4 mb-4';
                card.innerHTML = `
                    <div class="card project-card h-100" data-idx="${idx}">
                        <img src="${project.image}" class="card-img-top project-image" alt="${project.title}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${project.title}</h5>
                            <p class="card-text">${project.description}</p>
                        </div>
                    </div>
                `;
                gallery.appendChild(card);
            });
            // Add click event to show modal with details
            Array.from(document.querySelectorAll('.project-card')).forEach(card => {
                card.addEventListener('click', function() {
                    const idx = this.getAttribute('data-idx');
                    showProjectModal(data.projects[idx]);
                });
            });
        })
        .catch(error => console.error('Error loading projects:', error));
}

// Show Bootstrap modal with project details
function showProjectModal(project) {
    const modal = document.getElementById('projectModal');
    modal.querySelector('.modal-title').textContent = project.title;
    modal.querySelector('.modal-body img').src = project.image;
    modal.querySelector('.modal-body img').alt = project.title;
    modal.querySelector('.modal-body .project-details').textContent = project.details;
    $('#projectModal').modal('show');
}

// Function to validate the contact form and show errors with red border
function validateAndSendEmail(event, singleField, fieldId) {
    if (event) event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const messagesDiv = document.getElementById('form-messages');
    let valid = true;
    // Reset validation states
    [name, email, phone, message].forEach(input => {
        input.classList.remove('is-invalid');
        input.classList.remove('is-valid');
        const feedback = input.nextElementSibling;
        if (feedback && feedback.classList.contains('invalid-feedback')) feedback.textContent = '';
    });
    // Name validation
    if (!name.value.trim()) {
        if (!singleField || fieldId === 'name') {
            name.classList.add('is-invalid');
            name.nextElementSibling.textContent = 'Name is required.';
        }
        valid = false;
    } else if (!singleField || fieldId === 'name') {
        name.classList.add('is-valid');
    }
    // Email validation
    if (!validateEmail(email.value.trim())) {
        if (!singleField || fieldId === 'email') {
            email.classList.add('is-invalid');
            email.nextElementSibling.textContent = 'Please enter a valid email address.';
        }
        valid = false;
    } else if (!singleField || fieldId === 'email') {
        email.classList.add('is-valid');
    }
    // Phone validation (optional, but if present must be valid)
    if (phone.value.trim() && !/^\d{10,15}$/.test(phone.value.replace(/\D/g, ''))) {
        if (!singleField || fieldId === 'phone') {
            phone.classList.add('is-invalid');
            phone.nextElementSibling.textContent = 'Please enter a valid phone number (10-15 digits).';
        }
        valid = false;
    } else if (phone.value.trim() && (!singleField || fieldId === 'phone')) {
        phone.classList.add('is-valid');
    }
    // Message validation
    if (!message.value.trim()) {
        if (!singleField || fieldId === 'message') {
            message.classList.add('is-invalid');
            message.nextElementSibling.textContent = 'Message is required.';
        }
        valid = false;
    } else if (!singleField || fieldId === 'message') {
        message.classList.add('is-valid');
    }
    if (!valid && !singleField) {
        messagesDiv.textContent = '';
        return;
    }
    if (!singleField) {
        // If validation passes, simulate sending the email
        messagesDiv.textContent = 'Thank you for reaching out! Your message has been sent (simulated).';
        messagesDiv.style.color = '#27ae60';
        document.getElementById('contact-form').reset();
        [name, email, phone, message].forEach(input => {
            input.classList.remove('is-valid');
        });
    }
}

// Helper function to validate email format
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Smooth scroll for nav and hero button
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 30,
                    behavior: 'smooth'
                });
            }
        });
    });
    loadProjects();
});

// Event listener for form submission
document.getElementById('contact-form').addEventListener('submit', validateAndSendEmail);

// Add real-time validation on blur for each input
['name', 'email', 'phone', 'message'].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) {
        el.addEventListener('blur', function() {
            // Simulate a submit for this field only
            const fakeEvent = { preventDefault: function(){} };
            validateAndSendEmail(fakeEvent, true, id);
        });
    }
});