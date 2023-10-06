window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = Comprobar;
}

function Comprobar() {
    let urlInput = document.formulario.URL.value;
    let messageInput = document.formulario.Mensaje;
    let regex = /^(https?:\/\/)?(www\.)?[a-zA-Z][a-zA-Z0-9-]*[a-zA-Z0-9]\.[a-zA-Z]{2,4}$/;

    if (regex.test(urlInput)) {
        messageInput.value = "URL válida";
    } else {
        messageInput.value = "URL incorrecta";
    }

}
