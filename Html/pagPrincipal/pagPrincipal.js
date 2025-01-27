document.addEventListener('DOMContentLoaded', function() {
    const resultadoFinalDiv = document.getElementById('resultadoFinal');

    // Recuperar el valor de resultadoFinal desde localStorage
    const resultadoFinal = localStorage.getItem('resultadoFinal');

    if (resultadoFinal !== null) {
        // Si hay un valor almacenado, actualizar el contenido de resultadoFinalDiv
        resultadoFinalDiv.textContent = `Resultado: ${resultadoFinal}`;

        // Cambiar el color según el valor
        if (parseFloat(resultadoFinal) >= 0) {
            resultadoFinalDiv.style.color = 'green';
        } else {
            resultadoFinalDiv.style.color = 'red';
        }
    } else {
        // Si no hay valor guardado en localStorage, mostrar un mensaje por defecto
        resultadoFinalDiv.textContent = 'No hay resultado guardado';
    }
});
