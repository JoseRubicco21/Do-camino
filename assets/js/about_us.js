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

// Syncs the time between the images and the content of the page.
const chefTimeSync = 3000;

const chefsInfo = [
    {
      name: "Pepe Linares",
      origin: "Sevilla",
      yearOfSantiago: 2012,
      specialty: "Cocina tradicional andaluza y gallega",
      dish: "Pulpo a la gallega",
      story: "Pepe comenzó su carrera como chef tras caminar el Camino de Santiago en 2012. Durante su peregrinaje, se inspiró en los sabores sencillos pero intensos de la comida tradicional española. A su regreso, abrió Do Camiño, donde ofrece recetas clásicas gallegas con un toque personal andaluz."
    },
    {
      name: "Juan Carlos de la Rosa",
      origin: "Valladolid",
      yearOfSantiago: 2015,
      specialty: "Cocina de autor, fusionando técnica francesa y comida gallega",
      dish: "Empanada gallega rellena de pularda en salsa de vino tinto",
      story: "Juan Carlos vivió una transformación personal durante su paso por el Camino de Santiago en 2015. Tras completar su peregrinaje, abrió Do Camiño, un restaurante que fusiona técnicas modernas con los sabores de Galicia."
    },
    {
      name: "Zaria Ferro",
      origin: "Brasil",
      yearOfSantiago: 2018,
      specialty: "Bacalhau à Bras",
      dish: "Tarta de Santiago con base de coco rallado",
      story: "Zaria, originaria de Brasil, hizo el Camino de Santiago en solitario en 2018. Durante su experiencia, descubrió el poder de la gastronomía para unir a las personas. Ahora, en  Do Camiño, ofrece platos que fusionan los sabores de Galicia con un toque brasileño."
    }
];

let currentChefIndex = 0;

function displayChefInfo() {
    const chefInfoElement = document.getElementById('chefInfo');
    
    // Remove the previous chef info (without clearing the entire HTML)
    while (chefInfoElement.firstChild) {
      chefInfoElement.removeChild(chefInfoElement.firstChild);
    }
    
    const chef = chefsInfo[currentChefIndex];
    
    // Create the h2 (chef's name) outside of the flex container
    const name = document.createElement('h2');
    name.textContent = chef.name;
    name.classList.add('fade-in');
    chefInfoElement.appendChild(name); // Append it directly to the chefInfoElement
    
    // Create a container for the chef info using flexbox layout (left side and right side)
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'space-between'; // Spread out the content
    container.style.alignItems = 'flex-start'; // Align items to the top
    
    // Create the left side for the chef details (origin, year, specialty, dish)
    const leftSide = document.createElement('div');
    leftSide.style.flex = '1'; // Allow it to take up available space
  
    const origin = document.createElement('p');
    origin.textContent = `Origen: ${chef.origin}`;
    origin.classList.add('fade-in');
    leftSide.appendChild(origin);
  
    const yearOfSantiago = document.createElement('p');
    yearOfSantiago.textContent = `Año en el que hizo el camino: ${chef.yearOfSantiago}`;
    yearOfSantiago.classList.add('fade-in');
    leftSide.appendChild(yearOfSantiago);
  
    const specialty = document.createElement('p');
    specialty.textContent = `Especialidad: ${chef.specialty}`;
    specialty.classList.add('fade-in');
    leftSide.appendChild(specialty);
  
    const dish = document.createElement('p');
    dish.textContent = `Plato Famoso: ${chef.dish}`;
    dish.classList.add('fade-in');
    leftSide.appendChild(dish);
    
    // Create the right side for the chef's story
    const rightSide = document.createElement('div');
    rightSide.style.flex = '0 1 40%'; // Fix width of right side to 40%
  
    const story = document.createElement('p');
    story.textContent = chef.story;
    story.classList.add('fade-in');
    rightSide.appendChild(story);
  
    // Append the left and right side containers to the main container
    container.appendChild(leftSide);
    container.appendChild(rightSide);
  
    // Append the main container to the chefInfo element
    chefInfoElement.appendChild(container);
  
    // After a slight delay, add the "show" class to trigger the fade-in effect
    setTimeout(() => {
      const fadeInElements = document.querySelectorAll('.fade-in');
      fadeInElements.forEach(element => {
        element.classList.add('show');
      });
    }, 50); // Short delay to ensure elements are in the DOM before transition starts
    
    // Move to the next chef
    currentChefIndex = (currentChefIndex + 1) % chefsInfo.length;
}

function changeChefInfo() {
    // Display info initially
    displayChefInfo();
  
    // Change chef information every 5 seconds (5000ms)
    setInterval(displayChefInfo, chefTimeSync);
}

changeChefInfo();

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
switchBgImages("about-us-4", chefs, chefTimeSync);
switchBgImages("about-us-1", restaurant,90000);
