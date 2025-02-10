'use-strict';

const chefs = [
    "./assets/images/chef_1.jpg",
    "./assets/images/chef_2.jpg",
    "./assets/images/chef_3.jpg",
];

const restaurant = [
    "./assets/images/restaurant_1.jpg",
    "./assets/images/restaurant_2.jpg",
    "./assets/images/restaurant_3.jpg",
];

function switchBgImages(containerId, imageUrls, interval) {
    let currentIndex = 0;
    const container = document.getElementById(containerId);

    if (!container) {
        console.error("Container not found");
        return;
    }

    // Create a fade container if not already present
    const fadeContainer = document.createElement('div');
    fadeContainer.classList.add('fade-container');
    container.appendChild(fadeContainer);

    const imageElements = imageUrls.map((url, index) => {
        const img = document.createElement('div');
        img.classList.add('background-image');
        img.style.backgroundImage = `url(${url})`;
        img.style.opacity = (index === currentIndex) ? 1 : 0; // Only show the first image initially
        fadeContainer.appendChild(img);
        return img;
    });

    function updateBgImage() {
        // Fade out the current image
        imageElements[currentIndex].style.opacity = 0;

        // Move to the next image
        currentIndex = (currentIndex + 1) % imageUrls.length;

        // Fade in the new image
        imageElements[currentIndex].style.opacity = 1;
    }

    // Set interval to switch images
    setInterval(updateBgImage, interval);
}

// Call the function and set interval to switch the background images every 2 seconds
switchBgImages("about-us-4", chefs, 30000);
switchBgImages("about-us-1", restaurant,90000)
