document.addEventListener('DOMContentLoaded', function() {
    // Create and insert the burger menu
    const burgerMenu = document.createElement('div');
    burgerMenu.classList.add('burger-menu');
    burgerMenu.innerHTML = '☰'; // Icon can be replaced with SVG if preferred
    document.body.insertBefore(burgerMenu, document.body.firstChild);

    // Toggle navigation display and burger menu icon visibility
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('toggle');
        const navigation = document.querySelector('.navigation');
        navigation.style.display = navigation.style.display === "none" || navigation.style.display === "" ? "flex" : "none";
    });

    // Show portfolio list functionality
    const portfolioLink = document.getElementById('portfolio-link');
    const subprojectsContainer = document.querySelector('.subprojects-container');
    if (portfolioLink && subprojectsContainer) {
        portfolioLink.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            if (subprojectsContainer.classList.contains('open')) {
                window.location.href = '../portfolio.html'; // Redirect if submenu is open
            } else {
                subprojectsContainer.classList.toggle('open'); // Toggle submenu
            }
        });
    }

    // Open the submenu by default on page load, if not already open
    if (subprojectsContainer && !subprojectsContainer.classList.contains('open')) {
        subprojectsContainer.classList.add("open");
    }

    // Update title dynamically
    var currentSubpage = window.location.pathname.split('/').pop();
    var subpageWithoutExtension = currentSubpage.split('.').shift();
    var capitalizedSubpageTitle = subpageWithoutExtension.charAt(0).toUpperCase() + subpageWithoutExtension.slice(1);
    document.title = "Luisa Bußmann | " + capitalizedSubpageTitle;

    // Add class based on aspect ratio for gallery images
    document.querySelectorAll('.gallery img').forEach(img => {
        if (img.complete) {
            addClassBasedOnAspectRatio(img);
        } else {
            img.onload = () => addClassBasedOnAspectRatio(img);
        }
    });

    function addClassBasedOnAspectRatio(img) {
        if (img.naturalHeight > img.naturalWidth) {
            // Image is vertical
            img.classList.add('vertical');
        }
    }
});