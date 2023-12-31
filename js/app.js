const mostrarFechaHora = () => {
    const fecha = new Date();
    const diasSemanas = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
    const mesesAño = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let numeroDia = fecha.getDay();
    let numeroMes = fecha.getMonth();
    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let ampm;

    if(hora < 12){
        ampm = "AM";
    } else {
        ampm = "PM";
    }
    if(hora > 12){
        hora = hora - 12;
    }
    if(hora < 10 ){
        hora = "0"+hora;
    }
    if(minutos < 10 ){
        minutos = "0"+minutos;
    }
    if(segundos < 10 ){
        segundos = "0"+segundos;
    }

    let parrafoFecha = document.querySelector("#fecha");
    parrafoFecha.innerHTML = `${diasSemanas[numeroDia]} ${fecha.getDate()} de ${mesesAño[numeroMes]} del ${fecha.getFullYear()}`;
    

    let parrafoHorasMinutos = document.querySelector("#horaMinutos");
    parrafoHorasMinutos.innerHTML = `${hora}: ${minutos}: `
    

    let parrafoAmPm = document.querySelector("#ampm");
    parrafoAmPm.innerHTML = `${ampm}`
    

    let parrafoSegundos = document.querySelector("#segundos");
    parrafoSegundos.innerHTML = `${segundos}`
    
}

setInterval(mostrarFechaHora,1000);
