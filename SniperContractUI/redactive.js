function setActiveLink() {
    // Get the current path from the URL
    var currentPath = window.location.pathname.split("/").pop(); // Get the current page name

    // Get all links in the menu
    var links = document.querySelectorAll('.menu a');

    // Loop through each link
    links.forEach(function(link) {
        // Get the href attribute of the link (just the file name, not the full path)
        var linkPath = link.getAttribute('href').split("/").pop();
        
        // Compare the current path with the link path
        if (linkPath === currentPath) {
            // Add 'active' class if they match
            link.classList.add('active');
        }
    });
}

// Call the function to set the active link
window.onload = setActiveLink;
