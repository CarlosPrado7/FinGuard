// Variables 
const saldoMensualInput = document.getElementById('saldo-mensual');
const saldoTotalInput = document.getElementById('saldoTotal');

const viviendaInput = document.getElementById('vivienda');
const alimentosInput = document.getElementById('alimentos');
const transporteInput = document.getElementById('transporte');
const serviciosInput = document.getElementById('servicios');
const entretenimientoInput = document.getElementById('entretenimiento');
const otrosInput = document.getElementById('otros');
const totalGastosInput = document.getElementById('total-gastos');

const resultadoInput = document.getElementById('resultado');
const resultadoFinalDiv = document.getElementById('resultadoFinal');
const calcularButton = document.getElementById('calcular');


saldoMensualInput.addEventListener('input', () => {

    const saldoMensual = saldoMensualInput.value;

    saldoTotalInput.value = saldoMensual;

});

function calcularTotalGastos() {

    const vivienda = parseFloat(viviendaInput.value) || 0; 
    const alimentos = parseFloat(alimentosInput.value) || 0;
    const transporte = parseFloat(transporteInput.value) || 0;
    const servicios = parseFloat(serviciosInput.value) || 0;
    const entretenimiento = parseFloat(entretenimientoInput.value) || 0;
    const otros = parseFloat(otrosInput.value) || 0;

    const total = vivienda + alimentos + transporte + servicios + entretenimiento + otros;

    totalGastosInput.value = total.toFixed(2); 

}

viviendaInput.addEventListener('input', calcularTotalGastos);
alimentosInput.addEventListener('input', calcularTotalGastos);
transporteInput.addEventListener('input', calcularTotalGastos);
serviciosInput.addEventListener('input', calcularTotalGastos);
entretenimientoInput.addEventListener('input', calcularTotalGastos);
otrosInput.addEventListener('input', calcularTotalGastos);

function calcularDiferencia() {

    const totalGastos = parseFloat(totalGastosInput.value) || 0; 
    const saldoTotal = parseFloat(saldoTotalInput.value) || 0; 

    const diferencia = saldoTotal - totalGastos;

    resultadoInput.value = diferencia.toFixed(2);
    resultadoFinalDiv.textContent = `Resultado: ${diferencia.toFixed(2)}`;

    localStorage.setItem('resultado', diferencia.toFixed(2));

    if (diferencia >= 0) {
        resultadoFinalDiv.style.color = 'green'; 
    } else {
        resultadoFinalDiv.style.color = 'red'; 
    }

}

calcularButton.addEventListener('click', calcularDiferencia);
