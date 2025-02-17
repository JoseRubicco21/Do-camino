// Este archivo hace que desde la pagina principal, al darle a VER MENU, 
// nos lleva a otra pagina desplegando la carta de forma automatica

document.addEventListener('DOMContentLoaded', function () {
    // Obtén el hash de la URL (por ejemplo, "#flush-collapseOne")
    let hash = window.location.hash;

    // Si hay un hash en la URL
    if (hash) {
        // Selecciona el elemento del acordeón usando el hash
        let targetCollapse = document.querySelector(hash);

        // Si el elemento existe, despliégalo usando Bootstrap
        if (targetCollapse && targetCollapse.classList.contains('custom-button')) {
            let collapse = new bootstrap.Collapse(targetCollapse, {
                toggle: true // Esto fuerza el despliegue
            });
        }
    }
});