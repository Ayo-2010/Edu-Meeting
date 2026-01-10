# UNIFY - Educational Meeting Platform

A modern, responsive educational meeting platform website built with HTML5, CSS3, and Vanilla JavaScript.

## Project Structure

```
Edu-Meeting/
│
├── index.html                 # Main HTML file
├── README.md                  # Project documentation
│
├── css/
│   └── style.css             # Main stylesheet
│
├── js/
│   ├── script.js             # Main JavaScript functionality
│   ├── index.js              # Legacy script (optional)
│   └── index1.js             # Legacy script (optional)
│
└── assets/
    ├── images/
    │   ├── backgrounds/       # Background images
    │   │   ├── apply-bg.jpg
    │   │   ├── facts-bg.jpg
    │   │   ├── heading-bg.jpg
    │   │   ├── meetings-bg.jpg
    │   │   ├── meetings-page-bg.jpg
    │   │   ├── service-item-bg.jpg
    │   │   └── video-item-bg.jpg
    │   │
    │   ├── icons/            # Icons and UI elements
    │   │   ├── service-icon-01.png
    │   │   ├── service-icon-02.png
    │   │   ├── service-icon-03.png
    │   │   ├── close.png
    │   │   ├── next.png
    │   │   ├── prev.png
    │   │   ├── play-icon.png
    │   │   └── loading.gif
    │   │
    │   ├── courses/          # Course images
    │   │   ├── course-01.jpg
    │   │   ├── course-02.jpg
    │   │   ├── course-03.jpg
    │   │   └── course-04.jpg
    │   │
    │   └── meetings/         # Meeting images
    │       ├── meeting-01.jpg
    │       ├── meeting-02.jpg
    │       ├── meeting-03.jpg
    │       ├── meeting-04.jpg
    │       └── single-meeting.jpg
    │
    └── videos/
        └── course-video.mp4
```

## Features

### 1. Responsive Design
- Mobile-first approach
- Hamburger menu on tablets and phones
- Optimized for all screen sizes

### 2. Modern UI/UX
- Gradient color scheme (purple/blue)
- Smooth animations and transitions
- Hover effects on interactive elements
- Scroll animations for visual interest

### 3. Key Sections
- **Header Navigation**: Sticky navigation with logo and links
- **Hero Section**: Eye-catching banner with CTA
- **Services**: 6 service cards with icons
- **Upcoming Meetings**: Showcase of scheduled meetings
- **Featured Courses**: Course cards with pricing
- **Contact Form**: Get in touch section
- **Application Modal**: User application form
- **Footer**: Links and company information

### 4. Functionality
- Smooth scroll navigation between sections
- Modal popup for applications
- Form validation and submission feedback
- Scroll animations on elements
- Active navigation highlighting
- Scroll-to-top button
- Responsive mobile menu
- Keyboard navigation support

## File Descriptions

### HTML (index.html)
- Semantic HTML5 structure
- Proper meta tags for responsiveness
- Accessibility considerations
- All asset paths relative to folder structure

### CSS (css/style.css)
- Modern CSS3 features (Flexbox, Grid)
- Responsive breakpoints at 768px and 480px
- Smooth transitions and animations
- Gradient backgrounds
- Custom button styles

### JavaScript (js/script.js)
- DOM manipulation
- Event listeners
- Form handling
- Smooth scrolling
- Modal management
- Intersection Observer for animations
- Keyboard navigation

## Installation

1. Clone or download the project
2. Ensure all files are in the correct folders as shown in the structure
3. Open `index.html` in a web browser

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Main colors are defined in CSS:
- Primary: `#667eea` (purple)
- Secondary: `#764ba2` (dark purple)
- Accent: `#ff6b6b` (red)

To change colors, edit the gradient and color values in `css/style.css`

### Content
Update content directly in `index.html`:
- Change service descriptions
- Update meeting information
- Modify course details
- Edit contact information

### Images
Replace images in respective asset folders while maintaining file names or update HTML image paths accordingly

## Performance Optimization

- Lazy loading for images
- Optimized animations
- Minimal JavaScript footprint
- CSS Grid and Flexbox for layout efficiency

## Future Enhancements

- Add backend integration for form submissions
- Implement user authentication
- Add course enrollment functionality
- Create meeting scheduling system
- Add payment integration
- Implement search functionality
- Add blog section

## License

This project is free to use and modify.

## Support

For issues or improvements, please check the project repository.
