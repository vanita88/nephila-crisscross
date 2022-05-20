var nombreError = document.getElementById('nombre-error');
var telefonoError = document.getElementById('telefono-error');
var mailError = document.getElementById('mail-error');
var mensajeError = document.getElementById('mensaje-error');
var enviarError = document.getElementById('enviar-error');

function validateName(){
    var name = document.getElementById('nombre').value;
    
    if(name.length == 0){
        nombreError.innerHTML = 'Complete su nombre';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nombreError.innerHTML = 'Complete su nombre';
        return false;
    }
    nombreError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateNumber(){
    var number = document.getElementById('telefono').value;
    
    if(number.lenght == 0){
        telefonoError.innerHTML = 'Complete su número telefónico';
        return false;
    }
    if(!number.match(/^[0-9]{10}$/)){
        telefonoError.innerHTML = 'Sólo números, por favor';
        return false;
    }
    telefonoError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMail(){
    var mail = document.getElementById('mail').value;

    if(mail.lenght == 0){
        mailError.innerHTML = 'Complete su E-mail';
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML = 'Coloque un E-mail válido';
        return false;
    }
    mailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    var message = document.getElementById('mensaje').value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        mensajeError.innerHTML = 'se requieren '+ left + ' más caractéres';
        return false;
    }

    mensajeError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateForm(){
    if(!validateName()|| !validateNumber() || !validateMail() || !validateMessage()){
        enviarError.style.display = 'block';
        enviarError.innerHTML = "Por favor, Complete todos los campos";
        setTimeout(function(){enviarError.style.display = 'none';}, 3000);
        return false;
    }
    enviarError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}