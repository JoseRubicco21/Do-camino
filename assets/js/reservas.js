'use strict';
let dataSeleccionada = document.getElementById('dataSeleccionada');
let tablaCalendario = document.getElementById('tablaCalendario');

tablaCalendario.addEventListener('click', mostrarData);

function mostrarData(event) {
	if (event.target.classList.contains('dayAvaliable')) {
		console.log('check');
		let dia = parseInt(event.target.innerText);
		console.log(dia);
		dataSeleccionada.value = `${dia}/02/2025`;
	}
}
