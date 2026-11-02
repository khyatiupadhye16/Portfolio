# Khyati's Portfolio

A responsive personal portfolio website for Khyati Upadhye, a blockchain technology student and cybersecurity enthusiast.

The site presents Khyati's introduction, technical skills, featured projects, education, and contact information in a single scrolling page.

## Features

- Responsive single-page portfolio layout
- Hero section with profile image and calls to action
- About, skills, projects, education, and contact sections
- Smooth scrolling navigation
- Active navigation link highlighting while scrolling
- Scroll-triggered reveal animations
- Animated button ripple effect
- Custom cursor effect for desktop users
- External links to LinkedIn and GitHub

## Project Structure

```text
Web tech/
├── Portfolio.html   # Main portfolio page
├── portfolio.css    # Layout, theme, responsive styles, and animations
├── portfolio.js     # Navigation and interactive effects
└── README.md        # Project documentation
```

## Getting Started

### Option 1: Open directly

Open `Portfolio.html` in a modern web browser.

### Option 2: Run a local server

From this folder, run one of the following commands:

```bash
# Python
python -m http.server 8000

# Node.js, if the serve package is installed
npx serve .
```

Then visit `http://localhost:8000` for the Python server, or the URL shown by `npx serve`.

No build step or package installation is required.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts: Space Grotesk and Inter

## Customization

1. Edit the text, links, and sections in `Portfolio.html`.
2. Update colors, spacing, typography, and responsive rules in `portfolio.css`.
3. Adjust scroll behavior and visual interactions in `portfolio.js`.
4. Replace the external profile image URL with a local image if offline support is needed.

## Notes

- The profile image and Google Fonts are loaded from external URLs, so an internet connection is needed for those assets to appear correctly.
- Contact details and social links are currently defined directly in `Portfolio.html`.
- The project cards are static content and can be updated as new projects are added.

## Author

**Khyati Upadhye**

- LinkedIn: [khyati-upadhye-6a1671381](https://www.linkedin.com/in/khyati-upadhye-6a1671381/)
- GitHub: [khyatiupadhye16](https://github.com/khyatiupadhye16)