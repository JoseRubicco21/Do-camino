'use strict';
let dataSeleccionada = document.getElementById('dataSeleccionada');
let tablaCalendario = document.getElementById('tablaCalendario');

tablaCalendario.addEventListener('click', mostrarData);

function mostrarData(event) {
	if (event.target.classList.contains('dayAvaliable')) {
		console.log('check');
		let dia = parseInt(event.target.innerText);
		console.log(dia);

		switch (dia) {
			case 19:
				dataSeleccionada.value = '19/02/2025';
				break;
			case 20:
				dataSeleccionada.value = '20/02/2025';
				break;

			case 26:
				dataSeleccionada.value = '26/02/2025';
				break;

			case 27:
				dataSeleccionada.value = '27/02/2025';
				break;

			case 28:
				dataSeleccionada.value = '28/02/2025';
				break;
		}
	}
}
