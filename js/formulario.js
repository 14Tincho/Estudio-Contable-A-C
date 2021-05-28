function validar() {
    let nombre, expresionNombre, email, emailDos, expresionEmail, cuit, expresionCuit, asunto , expresionAsunto, mensaje, expresionMensaje, error;
    nombre = document.getElementById("nombre").value;
    email =  document.getElementById("email").value;
    emailDos =  document.getElementById("emailDos").value;
    cuit =  document.getElementById("cuit").value;
    asunto =  document.getElementById("asunto").value;
    mensaje =  document.getElementById("mensaje").value;
    expresionNombre = /^[a-zA-ZÀ-ÿ\s]{3,20}$/;
    expresionEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    expresionCuit = /^(20|23|27|30|33|34)[\s-.]?\d{8}[\s-.]?\d{1}$/;
    expresionAsunto = /^[a-zA-Z0-9\_\-\D]{2,40}$/;
    expresionMensaje = /^[a-zA-Z0-9\_\-\D]{4,1200}$/;
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


    if (emailDos === "" || emailDos.length < 7 || emailDos.length > 40) {
        if (error !== "") {
            error += "\n";
        }
        error += "Debe repetir el email";
    }else if (!expresionEmail.test(emailDos)) {
        if (error !== "") {
            error += "\n";
        }
        error += "El email no es valido";
    }


    if (email !== emailDos) {
        if (error !== "") {
            error += "\n";
        }
        error += "Los mails no coinciden";
    }


    if(cuit === ""){
        error += "";
    }else if (!expresionCuit.test(cuit)){
        if (error !== "") {
            error += "\n";
        }
        error += "El cuit tiene que tener mas de 11 caracteres e iniciar con alguno de los siguientes Números: 20,23,27,30,33 o 34";   
    }



    if(asunto === ""){
        error += "";
    }else if (!expresionAsunto.test(asunto)){
        if (error !== "") {
            error += "\n";
        }
        error += "El asunto tiene que tener entre 2 y 40 caracteres";
    }


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
