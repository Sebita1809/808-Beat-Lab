const audio = document.getElementById('audio');
const tiempoTotal = document.getElementById('TiempoDuracion');
const tiempoActual = document.getElementById('TiempoActual');

// Actualizar los tiempos cada segundo
setInterval(actualizarTiempos, 1000);

// Función para actualizar los tiempos
function actualizarTiempos() {
    // Obtener la duración total de la canción
    const duracionTotal = audio.duration;
    
    // Verificar si la duración total es un número válido
    if (!isNaN(duracionTotal)) {
        // Convertir la duración total a formato de tiempo (minutos:segundos)
        const minutosTotal = Math.floor(duracionTotal / 60);
        const segundosTotal = Math.floor(duracionTotal % 60);
        const tiempoTotalFormato = `${minutosTotal}:${segundosTotal < 10 ? '0' : ''}${segundosTotal}`;
        
        // Mostrar la duración total en el elemento HTML correspondiente
        tiempoTotal.textContent = tiempoTotalFormato;
    }
    
    // Obtener el tiempo actual de reproducción de la canción
    const tiempoActualReproduccion = audio.currentTime;
    
    // Convertir el tiempo actual a formato de tiempo (minutos:segundos)
    const minutosActual = Math.floor(tiempoActualReproduccion / 60);
    const segundosActual = Math.floor(tiempoActualReproduccion % 60);
    const tiempoActualFormato = `${minutosActual}:${segundosActual < 10 ? '0' : ''}${segundosActual}`;
    
    // Mostrar el tiempo actual de reproducción en el elemento HTML correspondiente
    tiempoActual.textContent = tiempoActualFormato;
}




