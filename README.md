#E-LEARNING PLATFORM UI

COMPANY:CODETECH IT SOLUTION

NAME:SUSANTA DASH

INTERN ID:CT04DM1286

DOMAIN:FRONTED WEB DEVELOPMENT

DURATION:4WEEKS

MENTOR:NEELA SONTOSH

##The HTML code defines four distinct pages: home.html, about.html, course.html, and profile.html. Each page shares a common navigation bar and footer, promoting consistency across the site.
Common Elements
 * Navigation Bar (<nav>): This section includes a logo (though the src attribute is empty), and navigation links for "Home," "My Profile," "Courses," and "About." It also features Font Awesome icons (fa-times and fa-bars) for a responsive mobile menu, controlled by JavaScript.
 * Footer (<section class="footer">): A consistent footer across all pages provides "About Us" information, a tagline, social media icons (Facebook, Twitter, Instagram, LinkedIn), and a "Made by SUSANTA DASH" credit.
Specific Page Contents
 * home.html: This is the landing page with a prominent "WELCOME TO E-LEARNING PLATFORM" heading, a "Learn and Grow with us!" tagline, and a "Start Learning" button that directs users to the course.html page.
 * about.html: This page is dedicated to information about the platform. It has a "About Us" sub-header and a main content area proclaiming "We are the world's best e-learning platform" along with a placeholder paragraph (Lorem ipsum...) and an "EXPLORE NOW" button.
 * course.html: This page lists various courses offered by the platform, including "Frontend development," "Backend development," "Database management," "Python programming," "Java programming," and "C++ programming." Each course has a description and a "Start Course" button. Clicking this button reveals an embedded YouTube video player (currently set to a placeholder https://www.youtube.com/embed/LXb3EKWsInQ?si=gDysjAz1OO6FrWtE).
 * profile.html: This page displays user profile information. It includes a profile picture, name ("SUSANTA DASH"), and contact details. Importantly, it showcases course progress and time spent through interactive circular progress bars. It also lists "Your Courses" with individual progress bars for each, indicating whether a course is "Completed" or showing a percentage, along with a "Resume" button that navigates to the course.html page.
CSS Styling (style.css)
The CSS file is responsible for the visual presentation and responsiveness of the e-learning platform. It utilizes the "Poppins" font and Font Awesome for icons.
Layout and General Styling
 * * (Universal Selector): Resets default margin and padding, and sets the base font.
 * .header: Styles the main header section with a full-height background image and an overlay gradient.
 * nav: Styles the navigation bar using Flexbox for alignment of the logo and navigation links.
 * .nav-links: Styles the navigation links, including a hover effect that creates an animated underline.
 * .text-box: Centers and styles the main heading and paragraph on the home page.
 * .hero-btn: Styles the call-to-action buttons with a border and a hover effect that changes background color.
 * @media (max-width: 700px): Implements responsive design for smaller screens. It hides the default navigation links and displays a hamburger icon (fa-bars) to toggle a mobile-friendly side menu.
Page-Specific Styling
 * Course Page:
   * .course-listing: Uses Flexbox to arrange course items in a responsive grid.
   * .course-item: Styles individual course cards with background color, padding, borders, and shadows.
 * Profile Page:
   * .container: Arranges the profile information boxes using Flexbox.
   * .profile-box: Styles individual profile information sections with background, text alignment, and shadows.
   * .profile_pic: Styles the user's profile image.
   * .info: Styles the information details within the profile boxes.
   * Progress Circles: A significant part of the profile page styling involves creating the animated circular progress bars. This is achieved using nested div elements (.outer, .inner) and an SVG circle element.
     * circle: The SVG circle is styled with a gradient stroke, stroke-dasharray, and stroke-dashoffset to control the visible portion of the circle.
     * @keyframes anim and @keyframes anim1: These CSS animations dynamically change the stroke-dashoffset property, creating the visual effect of the progress bar filling up.
   * Course Progress Section:
     * .CourseProgress and .yourCourses: Styles the overall section and the container for individual course progress.
     * .progress-bar and .progress-bar-fill: Styles the linear progress bars for each course, with specific classes (.frontend, .backend, etc.) to control their fill percentage.
 * About Page:
   * .sub-header: Similar to the main header but with a different background image and height.
   * .about-us, .about-col: Styles the layout and content within the "About Us" section.
   * .red-btn: A specific style for the "EXPLORE NOW" button on the About page.
JavaScript Functionality (scripts.js)
The JavaScript code adds interactivity to the website.
 * DOMContentLoaded Listener: Ensures the script runs only after the entire HTML document has been loaded.
 * Reveal Sections on Course Page:
   * It selects all elements with the class revealButton (the "Start Course" buttons).
   * For each button, it adds an event listener. When clicked, it toggles the display style of the next sibling element (the revealedSection containing the iframe) between 'none' (hidden) and 'block' (visible). It also changes the button text between "Start Course" and "Hide Section".
 * Mobile Menu Toggle:
   * navLinks: Gets a reference to the navigation links container.
   * showMenu(): Sets the right CSS property of navLinks to "0", making the menu visible.
   * hideMenu(): Sets the right CSS property of navLinks to "-200px", hiding the menu off-screen.
   * Event listeners are attached to the fa-bars (hamburger) and fa-times (close) icons to call showMenu() and hideMenu() respectively.
In summary, this code provides a foundational e-learning platform with multiple content pages, a responsive navigation system, dynamic course content display, and visual progress tracking

#OUTPUT

![Image](https://github.com/user-attachments/assets/bc743fa8-2e8e-458c-aafc-855e4a4c3ce2)
![Image](https://github.com/user-attachments/assets/35893e49-86c7-43cd-b378-b5cfc59e1423)
![Image](https://github.com/user-attachments/assets/1e412268-6ba5-4f45-a8d7-32e7fa5935f2)
![Image](https://github.com/user-attachments/assets/39081d51-ce60-45b7-a560-a7ff00f3214f)
![Image](https://github.com/user-attachments/assets/20bde3f5-285b-4b6c-8cbf-61dc9d195b83)
