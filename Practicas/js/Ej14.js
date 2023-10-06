window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = Comprobar;
}

function Comprobar() {
    let codigoInput = document.formulario.Codigo.value;
    let messageInput = document.formulario.Mensaje;
    let regex = /^[0-9]{3,6}(AN|ES|DL|US)[#@\$&][a-zA-Z]{4,7}[0-9]{2}[a-zA-Z]{3}[a-zA-Z0-9%\/?!]{5}$/;

    if (regex.test(codigoInput)) {
        messageInput.value = "Código válido";
    } else {
        messageInput.value = "Código incorrecto";
    }
}

