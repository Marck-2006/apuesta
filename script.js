let wins = 0;
let losses = 0;
let draws = 0;  // Contador de empates
let jugando = false;

// Preguntar si el usuario quiere jugar
window.onload = function() {
    let jugar = confirm("¿quieres apostar algo?");
    if (!jugar) {
        alert("¡pues ni modo byes💜💜💜!");
        document.querySelector('.choices').style.display = 'none';  // Ocultar botones del juego
        return;  // Finalizar ejecución
    } else {
        document.querySelector('.choices').style.display = 'block';  // Mostrar botones del juego
        jugando = true;  // Iniciar el juego
    }
};

// Función de juego
function jugar(eleccionUsuario) {
    if (!jugando) return;

    // Opciones posibles para el usuario y la máquina
    const opciones = ['piedra', 'papel', 'tijera'];
    
    // Elección aleatoria de la máquina
    const eleccionMaquina = opciones[Math.floor(Math.random() * 3)];

    // Mostrar la elección de la máquina
    document.getElementById('machine-choice').innerHTML = `La máquina eligió: ${eleccionMaquina}`;

    // Determinar el resultado del juego
    let resultado = '';
    if (eleccionUsuario === eleccionMaquina) {
        resultado = "¡Es un empate!";
        draws++;  // Incrementar el contador de empates
    } else if (
        (eleccionUsuario === 'piedra' && eleccionMaquina === 'tijera') ||
        (eleccionUsuario === 'papel' && eleccionMaquina === 'piedra') ||
        (eleccionUsuario === 'tijera' && eleccionMaquina === 'papel')
    ) {
        resultado = "¡Ganaste!";
        wins++;  // Incrementar el contador de victorias
    } else {
        resultado = "¡Perdiste!";
        losses++;  // Incrementar el contador de derrotas
    }

    // Mostrar el resultado
    document.getElementById('result').innerHTML = resultado;
    document.getElementById('wins').innerText = wins;
    document.getElementById('losses').innerText = losses;
    document.getElementById('draws').innerText = draws;  // Mostrar el contador de empates

    // Ocultar las opciones de juego y mostrar las opciones de continuar o salir
    document.querySelector('.choices').style.display = 'none';
    document.getElementById('options').style.display = 'block';
}

// Función para continuar
function continuar() {
    document.querySelector('.choices').style.display = 'block';  // Mostrar los botones de nuevo
    document.getElementById('options').style.display = 'none';  // Ocultar las opciones de continuar
    document.getElementById('result').innerHTML = '';  // Limpiar resultado
    document.getElementById('machine-choice').innerHTML = '';  // Limpiar elección de la máquina
}

// Función para salir
function salir() {
    document.getElementById('image').style.display = 'block';  // Mostrar el video
    document.getElementById('options').style.display = 'none';  // Ocultar las opciones de continuar
    document.getElementById('result').innerHTML = '';  // Limpiar el resultado
    document.getElementById('machine-choice').innerHTML = '';  // Limpiar elección de la máquina
    jugando = false;  // Detener el juego
}
