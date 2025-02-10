'use strict';
let dataSeleccionada = document.getElementById('dataSeleccionada');
let tablaCalendario = document.getElementById('tablaCalendario');
let enviarReserva = document.getElementById('buttonForm')

tablaCalendario.addEventListener('click', mostrarData);
enviarReserva.addEventListener('click', limpiarFormulario)

function mostrarData(event) {
	if (event.target.classList.contains('dayAvaliable')) {
		console.log('check');
		let dia = parseInt(event.target.innerText);
		console.log(dia);
		dataSeleccionada.value = `${dia}/02/2025`;
	}
}

function limpiarFormulario(event) {
	event.preventDefault();
	let inputs = document.querySelectorAll('.input')
	inputs.forEach((el) => {
			if (el.name == 'horaReserva') {
				el.value = '13:00';
			} else {
				el.value = '';
			}
		})

	
}