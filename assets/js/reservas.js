'use strict';
let dataSeleccionada = document.getElementById('dataSeleccionada');
let tablaCalendario = document.getElementById('tablaCalendario');
let enviarReserva = document.getElementById('buttonForm')

tablaCalendario.addEventListener('click', mostrarData);
enviarReserva.addEventListener('click', limpiarFormulario)

// Código que modifica el valor del día dependiendo de cuál pulse el usuario

function mostrarData(event) {
	if (event.target.classList.contains('dayAvaliable')) {
		console.log('check');
		let dia = parseInt(event.target.innerText);
		console.log(dia);
		dataSeleccionada.value = `${dia}/02/2025`;
	}
}

// Código que limpia los inputs del formulario después de enviar

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