let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function () {
    let Despla_actual = window.pageYOffset;
    if (ubicacionPrincipal >= Despla_actual) {
        document.getElementById('navbar').style.top = '0';
    }else{
        document.getElementById('navbar').style.top = '-100px'
    }
    ubicacionPrincipal = Despla_actual;
}


/////////////////////////////////////////
/////////Validacion del documento///////
////////////////////////////////////////
// const expresiones = {
//     nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,              //letras
//     email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//     cuit: /^\d{11,13}$/, // de 11 a 13 numeros.
//     asunto: /^[a-zA-Z0-9\_\-]{2,40}$/, // Letras, numeros, guion y guion_bajo
//     mensaje: /^[a-zA-Z0-9\_\-]{4,800}$/ 
// }


// let nombre =  document.getElementById('nombre');
//     email =  document.getElementById('email');
//     cuit =  document.getElementById('cuit');
//     asunto =  document.getElementById('asunto');
//     mensaje =  document.getElementById('mensaje');
//     error = document.getElementById('error');
// error.style.color = 'red';
// function enviarFormulario() {
//     let mensajeError = [];

//     if (nombre.value === null || nombre.value === '') {
//         mensajeError.push('Ingesa tu nombre');
//     }
//     if (email.value === null || email.value === '') {
//         mensajeError.push('Ingesa tu email');
//     }
//     if (mensaje.value === null || mensaje.value === '') {
//         mensajeError.push('Se le solicita ingresar su consulta en el campo de mensje');
//     }
//     alert(mensajeError.join("\n"));

//     return false;
// }