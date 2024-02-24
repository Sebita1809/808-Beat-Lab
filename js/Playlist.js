const titulo = document.getElementById('Titulo');
const artista = document.getElementById('Artista');

const ProgresoContainer = document.getElementById('BarraProgreso');
const Progreso = document.getElementById('Progreso');
const TiempoActual = document.getElementById('TiempoActual');
const Duracion = document.getElementById('TiempoDuracion');
const Musica = document.getElementById('audio');
const Anterior = document.getElementById('Anterior');
const Play = document.getElementById('Play');
const Pausa = document.getElementById('Pausa');
const Siguiente = document.getElementById('Siguiente');
const PausaBoton = document.getElementsByClassName('Pausa');
const PlayBoton = document.getElementsByClassName('Play');
////// PlayList ///////
const canciones = [
    {
        name: 'RAGEMETALBEAT',
        displayName: 'RAGE METAL BEAT',
        artista: 'Nico',
    },
    {
        name: 'SinTi',
        displayName: 'Sin Ti',
        artista: 'Joaco71 y Alex',
    },
    {
        name: 'LLAMADASBEAT',
        displayName: 'LLAMADAS BEAT',
        artista: 'Nico',
    },
    {
        name: 'DETROIT2BEAT',
        displayName: 'DETROIT2 BEAT',
        artista: 'Nico',
    },
    {
        name: 'RAGE1400BEAT',
        displayName: 'RAGE 1400 BEAT',
        artista: 'Nico',
    },
]; 

//// Verificar si la cancion se estan reproduciendo /////
let EstanSonando = false;

///// Funcion Play /////
function ReproducirCancion () {
    EstanSonando = true;
    Play.setAttribute('name','Pausa');
    Play.setAttribute('titulo', 'Pausa');
    Musica.play();
    var img1 = document.getElementById("Play");
    var img2 = document.getElementById("Pausa");
    
    
    img1.style.display = "none";
    img2.style.display = "inline";
}

//// Funcion Pausa ////
function PausarCancion () {
    EstanSonando = false;
    Play.setAttribute('name','Play');
    Play.setAttribute('titulo', 'Play');
    Musica.pause();
    var img1 = document.getElementById("Play");
    var img2 = document.getElementById("Pausa");
    
    
    img1.style.display = "inline";
    img2.style.display = "none";
}

///// Sirve para que al hacer click, active las funciones play o pausa //////
Play.addEventListener('click', () => (EstanSonando ? ReproducirCancion() : PausarCancion()));

//// Funcion leer cancion /////
function CargarCancion (canciones) {
    titulo.textContent = canciones.displayName;
    artista.textContent = canciones.artista;
    Musica.src = `css/Audios/${canciones.name}.wav`;
}

//// Cancion actual /////
let cancionIndex = 0;

//// Cancion anterior ////
function CancionAnterior (){
    cancionIndex--;
    if(cancionIndex < 0){
        cancionIndex = canciones.length - 1;
    }

    CargarCancion(canciones[cancionIndex]);
    ReproducirCancion();

}

//// Cancion siguiente /////
function CancionSiguiente (){
    cancionIndex++;
    if(cancionIndex > canciones.length - 1){
        cancionIndex = 0;
    }

    CargarCancion(canciones[cancionIndex]);
    ReproducirCancion();
}

//// Al cargar la cancion, se leerá la primera cancion ////
CargarCancion(canciones[cancionIndex]);

//// Aumentar la barra de progreso ////
 function CargarBarraProgreso (e){
    if(EstanSonando) {
        const { duration, currentTime } = e.srcElement;
        const progresoPorcentaje = (currentTime / duration) * 100;
        Progreso.style.width = `${progresoPorcentaje}%`;
        const DuracionMinuto = Math.floor(duration / 60);
        let DuracionSegundo = Math.floor(duration % 60);
    }
    if(DuracionSegundo < 10) {
        DuracionSegundo = `0${DuracionSegundo}`;
    }
    if(DuracionSegundo) {
        Duracion.textContent = `${DuracionMinuto} : ${DuracionSegundo}`;
    }
    const MinutoActual = Math.floor(currentTime / 60);
    let SegundoActual = Math.floor(currentTime % 60);
    if(SegundoActual) {
        TiempoActual.textContent = `${MinutoActual} : ${SegundoActual}`;
    }
}

// //// Mostrar brarra de progreso ////
function MostrarBarraProgreso (e){
     const width = this.clientWidth;
     const clickX = e.offsetX;
     const { duration } = Musica;
     Musica.TiempoActual = (clickX / width) * duration;
}




Pausa.addEventListener('click', PausarCancion);
Play.addEventListener('click', ReproducirCancion);
Anterior.addEventListener('click', CancionAnterior);
Siguiente.addEventListener('click', CancionSiguiente);
Musica.addEventListener('ended', CancionSiguiente);
Musica.addEventListener('timeupdate', CargarBarraProgreso);
ProgresoContainer.addEventListener('clickX', MostrarBarraProgreso);
 


