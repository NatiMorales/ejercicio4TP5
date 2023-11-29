const reloj = document.querySelector("main");

// const crearFechaYHora = () => { 
// }

const mostrarFechaHora = () => {
    const fecha = new Date();
    const diasSemanas = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
    const mesesAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Juliio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let numeroDia = fecha.getDay();
    let numeroMes = fecha.getMonth();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    if(hora < 10 ){
        hora = "0"+hora;
    }
    if(minutos < 10 ){
        minutos = "0"+minutos;
    }
    if(segundos < 10 ){
        segundos = "0"+segundos;
    }
    
    //const etiquetaFecha = document.createElement("h4");
    let parrafoFecha = document.querySelector("#fecha");
    parrafoFecha.innerHTML = `${diasSemanas[numeroDia]} ${fecha.getDate()} de ${mesesAño[numeroMes]} del ${fecha.getFullYear()}`;
    reloj.appendChild(parrafoFecha);

    let etiquetaHora = document.querySelector("#horaMinSeg");
    etiquetaHora.innerHTML = `${hora}: ${minutos}: ${segundos}`
    reloj.appendChild(etiquetaHora);
    
}


// setInterval
const idInterval = setInterval(mostrarFechaHora,1000);
