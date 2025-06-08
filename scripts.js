// Wait for the DOM to be loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all reveal buttons
    const revealButtons = document.querySelectorAll('.revealButton');

    // Add an event listener to each reveal button
    revealButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Get the corresponding revealed section
            const revealedSection = button.nextElementSibling;
            // Toggle the visibility of the revealed section
            if (revealedSection.style.display === 'none') {
                revealedSection.style.display = 'block';
                button.textContent = 'Hide Section';
            } else {
                revealedSection.style.display = 'none';
                button.textContent = 'Reveal Section';
            }
        });
    });

    // Select the navLinks element
    var navLinks = document.getElementById("navLinks");

    // Function to show the menu
    function showMenu() {
        navLinks.style.right = "0";
    }

    // Function to hide the menu
    function hideMenu() {
        navLinks.style.right = "-200px";
    }

    // Add event listeners to the menu buttons
    document.querySelector('.fa-bars').addEventListener('click', showMenu);
    document.querySelector('.fa-times').addEventListener('click', hideMenu);
});