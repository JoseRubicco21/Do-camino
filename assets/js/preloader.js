document.addEventListener("DOMContentLoaded", function () {
    let targetNumber = 499239; // Número real de peregrinos (ejemplo)
    let counter = document.getElementById("count");
    let preloader = document.getElementById("preloader");
    let content = document.getElementById("content");
    let currentNumber = parseInt(localStorage.getItem("currentCount")) || 0;
    let speed = 5; // Velocidad de la animación
    let preloaderShown = localStorage.getItem("preloaderShown");

    // Si el preloader ya se mostró antes, ocultar el preloader de inmediato
    if (preloaderShown) {
        preloader.classList.add("hidden"); // Asegurarnos que el preloader está oculto
        content.classList.remove("hidden"); // Mostrar el contenido
        counter.textContent = targetNumber.toLocaleString();
        return; // Salir para no ejecutar el contador
    }

    // Mostrar el preloader solo si es la primera vez
    preloader.classList.remove("hidden");

    function updateCounter() {
        if (currentNumber < targetNumber) {
            let increment = Math.ceil((targetNumber - currentNumber) / 20);
            currentNumber += increment;
            counter.textContent = currentNumber.toLocaleString();
            localStorage.setItem("currentCount", currentNumber); // Guardar progreso
            setTimeout(updateCounter, speed);
        } else {
            counter.textContent = targetNumber.toLocaleString();
            localStorage.setItem("currentCount", targetNumber); // Guardar número final
            localStorage.setItem("preloaderShown", true); // Marcar que el preloader ya se mostró
            setTimeout(() => {
                preloader.style.opacity = "0";
                setTimeout(() => {
                    preloader.classList.add("hidden"); // Ocultar preloader
                    content.classList.remove("hidden"); // Mostrar contenido
                }, 1000);
            }, 1000);
        }
    }

    updateCounter();
});
