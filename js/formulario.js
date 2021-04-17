// const formulario = document.getElementById('formulario');
// const inputs = document.querySelectorAll('#formulario input');

// const expresiones = {
//         nombre: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,
//         email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
//         cuit: /^(27|30)\d{2}[\s-.]?\d{8}[\s-.]?\d{1}$/,
//         asunto: /^[a-zA-Z0-9\_\-]{2,40}$/,
//         mensaje: /^[a-zA-Z0-9\_\-]{4,800}$/
//     }
    
    
// let nombre =  document.getElementById('nombre');
//     email =  document.getElementById('email');
//     cuit =  document.getElementById('cuit');
//     asunto =  document.getElementById('asunto');
//     mensaje =  document.getElementById('mensaje');
    
// var form = document.getElementById('formulario');
//     form.addEventListener('submit', function (ev){
//         ev.preventDefault();
//         let mensajeError = [];

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
//     });


function validar() {
    let nombre, expresionNombre, email, expresionEmail, cuit, expresionCuit, asunto , expresionAsunto, mensaje, expresionMensaje, error;
    nombre = document.getElementById("nombre").value;
    email =  document.getElementById("email").value;
    cuit =  document.getElementById("cuit").value;
    asunto =  document.getElementById("asunto").value;
    mensaje =  document.getElementById("mensaje").value;
    expresionNombre = /^[a-zA-ZÀ-ÿ\s]{3,20}$/;
    expresionEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    expresionCuit = /^(20|23|27|30|33)[\s-.]?\d{8}[\s-.]?\d{1}$/;
    expresionAsunto = /^[a-zA-Z0-9\_\-]{2,40}$/;
    expresionMensaje = /^[a-zA-Z0-9\_\-]{4,1200}$/;
    error = "";


    // if (nombre === "" || nombre.length < 3 || nombre.length > 20) {
    //     error += "El nombre es obligatorio y tiene que tener mas de 3 caracteres y menos de 20";
    // }
    if (!expresionNombre.test(nombre)) {
        error += "El nombre es obligatorio y tiene que tener mas de 3 caracteres y menos de 20";
    }



    if (email === "" || email.length < 7 || email.length > 40) {
        if (error !== "") {
            error += "\n";
        }
        error += "El email es obligatorio y tiene que contener entre 7 y 40 caracteres";
    }else if (!expresionEmail.test(email)) {
        if (error !== "") {
            error += "\n";
        }
        error += "El email no es valido";
    }



    if(cuit === ""){
        error += "";
    }else if (!expresionCuit.test(cuit)){
        if (error !== "") {
            error += "\n";
        }
        error += "El cuit tiene que tener mas de 11 nros e iniciar con 27 o 30";   
    }
    // else if (cuit.length < 11 || cuit.length > 13) {
    //     if (error !== "") {
    //         error += "\n";
    //     }
    //     error += "El cuit tiene que tener mas de 11 nros y contener solo numeros";
    // }

    // if (asunto.length < 2 ||asunto.length > 40) {
    //     if (error !== "") {
    //         error += "\n";
    //     }
    //     error += "El asunto tiene que tener menos de 40 caracteres";
    // }
    if(asunto === ""){
        error += "";
    }else if (!expresionAsunto.test(asunto)){
        if (error !== "") {
            error += "\n";
        }
        error += "El asunto tiene que tener entre 2 y 40 caracteres";
    }



    // if (mensaje === "" || mensaje.length < 7 || mensaje.length > 800) {
    //     if (error !== "") {
    //         error += "\n";
    //     }
    //     error += "El mensaje es obligatorio y tiene que tener entre 4 y 800 caracteres";
    // }
    if (!expresionMensaje.test(mensaje)){
        if (error !== "") {
            error += "\n";
        }
        error += "El mensaje es obligatorio y tiene que tener entre 4 y 1200 caracteres";
    }




    if (error !== "") {
        alert(error);
        return false;
    }
}
