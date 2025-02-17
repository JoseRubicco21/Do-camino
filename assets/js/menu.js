document.addEventListener('DOMContentLoaded', function () {
  // Obtener todas las tarjetas
  const tarjetas = document.querySelectorAll('.tarjeta');

  // Las imágenes de los menús
  const imagenesMenu = {
    menu1: {
      tarjeta2: 'assets/images/menu/menu1-1.jpg',
      tarjeta3: 'assets/images/menu/menu1-2.jpg',
    },
    menu2: {
      tarjeta1: 'assets/images/menu/menu2-1.jpg',
      tarjeta3: 'assets/images/menu/menu2-2.jpg',
    },
    menu3: {
      tarjeta1: 'assets/images/menu/menu3-1.jpg',
      tarjeta2: 'assets/images/menu/menu3-2.jpg',
    },
  };

  // Estado de las imágenes originales de las tarjetas
  const imagenesOriginales = {
    tarjeta1: 'assets/images/camino/camino_prata.jpg',
    tarjeta2: 'assets/images/camino/camino_norte.jpg',
    tarjeta3: 'assets/images/camino/camino_portugues.jpg',
  };

  // Inicializar las imágenes originales en las tarjetas al cargar la página
  const tarjeta1 = document.getElementById('tarjeta1');
  const tarjeta2 = document.getElementById('tarjeta2');
  const tarjeta3 = document.getElementById('tarjeta3');

  tarjeta1.style.backgroundImage = `url(${imagenesOriginales.tarjeta1})`;
  tarjeta2.style.backgroundImage = `url(${imagenesOriginales.tarjeta2})`;
  tarjeta3.style.backgroundImage = `url(${imagenesOriginales.tarjeta3})`;

  // Variable para hacer seguimiento de la tarjeta seleccionada
  let tarjetaSeleccionada = null;

  // Función para manejar los clics
  function seleccionarTarjeta(idSeleccionado) {
    // Si se hace clic en la misma tarjeta, permitir la actualización de las imágenes del menú
    const esMismaTarjeta = tarjetaSeleccionada === idSeleccionado;

    // Si ya había una tarjeta seleccionada previamente, volver a su imagen original
    if (tarjetaSeleccionada) {
      const tarjetaAnterior = document.getElementById(tarjetaSeleccionada);
      tarjetaAnterior.style.backgroundImage = `url(${imagenesOriginales[tarjetaSeleccionada]})`;
      tarjetaAnterior.classList.remove('flipped'); // Volver a deshacer el giro
      tarjetaAnterior.removeAttribute('disabled'); // Habilitar la tarjeta anterior para que pueda ser clickeada
    }

    // Cambiar las imágenes de las otras tarjetas según el menú seleccionado
    switch (idSeleccionado) {
      case 'tarjeta1':
        tarjeta2.style.backgroundImage = `url(${imagenesMenu.menu1.tarjeta2})`;
        tarjeta3.style.backgroundImage = `url(${imagenesMenu.menu1.tarjeta3})`;
        break;
      case 'tarjeta2':
        tarjeta1.style.backgroundImage = `url(${imagenesMenu.menu2.tarjeta1})`;
        tarjeta3.style.backgroundImage = `url(${imagenesMenu.menu2.tarjeta3})`;
        break;
      case 'tarjeta3':
        tarjeta1.style.backgroundImage = `url(${imagenesMenu.menu3.tarjeta1})`;
        tarjeta2.style.backgroundImage = `url(${imagenesMenu.menu3.tarjeta2})`;
        break;
    }

    // Asignar la tarjeta seleccionada para realizar el seguimiento
    tarjetaSeleccionada = idSeleccionado;
    const tarjetaSeleccionadaElement = document.getElementById(idSeleccionado);
    tarjetaSeleccionadaElement.setAttribute('disabled', 'true'); // Deshabilitar la tarjeta seleccionada

    // Asegurarse de que las imágenes del menú se actualicen incluso si se hace clic en la misma tarjeta
    if (esMismaTarjeta) {
      switch (idSeleccionado) {
        case 'tarjeta1':
          tarjeta2.style.backgroundImage = `url(${imagenesMenu.menu1.tarjeta2})`;
          tarjeta3.style.backgroundImage = `url(${imagenesMenu.menu1.tarjeta3})`;
          break;
        case 'tarjeta2':
          tarjeta1.style.backgroundImage = `url(${imagenesMenu.menu2.tarjeta1})`;
          tarjeta3.style.backgroundImage = `url(${imagenesMenu.menu2.tarjeta3})`;
          break;
        case 'tarjeta3':
          tarjeta1.style.backgroundImage = `url(${imagenesMenu.menu3.tarjeta1})`;
          tarjeta2.style.backgroundImage = `url(${imagenesMenu.menu3.tarjeta2})`;
          break;
      }
    }
  }

  // Añadir los eventos de clic en cada tarjeta
  tarjeta1.addEventListener('click', function () {
    seleccionarTarjeta('tarjeta1');
  });

  tarjeta2.addEventListener('click', function () {
    seleccionarTarjeta('tarjeta2');
  });

  tarjeta3.addEventListener('click', function () {
    seleccionarTarjeta('tarjeta3');
  });

  // Agregar evento de hover para aumentar el tamaño de la tarjeta solo en pantallas grandes
  tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener('mouseenter', () => {
      // Verificar si el tamaño de pantalla es mayor a 768px
      if (window.innerWidth > 768) {
        tarjeta.style.transform = 'scale(1)'; // Aumentar el tamaño
      }
    });

    tarjeta.addEventListener('mouseleave', () => {
      // Restaurar tamaño original al salir del hover
      tarjeta.style.transform = 'scale(1)'; // Volver a su tamaño original

      // Restaurar la imagen original al hacer mouseout
      const tarjetaId = tarjeta.id;
      tarjeta.style.backgroundImage = `url(${imagenesOriginales[tarjetaId]})`;

      // Volver a las imágenes originales de todas las tarjetas
      tarjetas.forEach((t) => {
        t.style.backgroundImage = `url(${imagenesOriginales[t.id]})`;
        t.classList.remove('flipped'); // Quitar la clase flipped
      });

      // Volver a las imágenes originales de las otras tarjetas si no están seleccionadas
      if (tarjetaSeleccionada && tarjetaSeleccionada !== tarjetaId) {
        switch (tarjetaSeleccionada) {
          case 'tarjeta1':
            tarjeta2.style.backgroundImage = `url(${imagenesOriginales.tarjeta2})`;
            tarjeta3.style.backgroundImage = `url(${imagenesOriginales.tarjeta3})`;
            break;
          case 'tarjeta2':
            tarjeta1.style.backgroundImage = `url(${imagenesOriginales.tarjeta1})`;
            tarjeta3.style.backgroundImage = `url(${imagenesOriginales.tarjeta3})`;
            break;
          case 'tarjeta3':
            tarjeta1.style.backgroundImage = `url(${imagenesOriginales.tarjeta1})`;
            tarjeta2.style.backgroundImage = `url(${imagenesOriginales.tarjeta2})`;
            break;
        }
      }
    });

    tarjeta.addEventListener('click', () => {
      if (!tarjeta.classList.contains('flipped')) {
        tarjeta.classList.add('flipped'); // Al hacer clic, agrega la rotación
      }
    });
  });
});
