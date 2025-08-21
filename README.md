# Personal Portfolio SPA

## Overview
This project is a single-page application (SPA) personal portfolio built using HTML, CSS, Bootstrap, and JavaScript. It showcases the developer's skills, projects, and provides a contact form for inquiries.

## Project Structure
```
personal-portfolio-spa
├── src
│   ├── index.html          # Main HTML document for the SPA
│   ├── css
│   │   └── styles.css      # Custom styles for the portfolio
│   ├── js
│   │   ├── main.js         # Main functionality for the application
│   │   ├── helpers.js      # Helper functions for validation
│   │   └── projects.json    # JSON data for project gallery
│   └── assets              # Directory for images and other assets
├── README.md               # Documentation for the project
```

## Features
- **About Me Section**: A brief introduction about the developer.
- **Project Gallery**: Dynamically populated project gallery using JSON data.
- **Contact Form**: A form for users to send inquiries, with input validation for email and phone number.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd personal-portfolio-spa
   ```
3. Open `src/index.html` in a web browser to view the portfolio.

## Usage
- The About Me section provides information about the developer.
- The Project Gallery displays projects with images and descriptions loaded from `projects.json`.
- Users can fill out the contact form to send messages. Input validation ensures that the email and phone number are correctly formatted before submission.

## Technologies Used
- HTML
- CSS
- Bootstrap
- JavaScript
- JSON

## Future Enhancements
- Add more projects to the gallery.
- Implement backend functionality for sending emails from the contact form.
- Enhance the design with additional CSS styles and animations.