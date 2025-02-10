document.addEventListener("DOMContentLoaded", function () {
    let targetNumber = 499239; // Número real de peregrinos (ejemplo)
    let counter = document.getElementById("count");
    let currentNumber = 0;
    let speed = 15; // Velocidad de la animación

    function updateCounter() {
        if (currentNumber < targetNumber) {
            let increment = Math.ceil((targetNumber - currentNumber) / 20);
            currentNumber += increment;
            counter.textContent = currentNumber.toLocaleString();
            setTimeout(updateCounter, speed);
        } else {
            counter.textContent = targetNumber.toLocaleString();
            setTimeout(() => {
                document.getElementById("preloader").style.opacity = "0";
                setTimeout(() => {
                    document.getElementById("preloader").style.display = "none";
                    document.getElementById("content").classList.remove("hidden");
                }, 1000);
            }, 1000);
        }
    }

    updateCounter();
});