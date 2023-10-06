window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = Comprobar;
}

function Comprobar() {
    let VstUno = document.formulario.Palindromo.value.toLowerCase().replace(/\s/g, '');
    let VstDos = VstUno.split('').reverse().join('');
    
    if (VstUno === VstDos) {
        let VstComprobar = "Es un palíndromo válido";
        document.formulario.Mensaje.value = VstComprobar;
    } else {
        let VstComprobar = "No es un palíndromo";
        document.formulario.Mensaje.value = VstComprobar;
    }
}
                