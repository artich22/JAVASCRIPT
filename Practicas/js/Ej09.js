window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = Comprobar;
}

function Comprobar() {
    let VstUno = document.formulario.Email.value;
    let VstF = VstUno;
    let VboPrueba = true;
    let VitComprobar = 0;
    let VstArray = "abcdefghijklmnñopqrstuvwxyz";
    let VstArrayNum = "abcdefghijklmnñopqrstuvwxyz0123456789";
    let VstArrayguion = "abcdefghijklmnñopqrstuvwxyz.-1234567890";
    VstUno = VstUno.toLowerCase();
    var VstDos = VstUno.split("@");
    var VstTres = VstDos[1].split(".");

    if (VstUno.charAt(VstDos[0].length) == "@") {
        VitComprobar++;
    }

    if (VstArray.includes(VstDos[0].charAt(0))) {
        VitComprobar++;
    }
    
    for (let i = 0; i < VstDos[0].length; i++) {
        if (VstArrayguion.includes(VstDos[0].charAt(i))) {
            VboPrueba = true;
        } else {
            VboPrueba = false;
            break;
        }
    }
    if (VboPrueba == true) {
        VitComprobar++;
    }

    if (VstArrayNum.includes(VstTres[0].charAt(0))) {
        VitComprobar++;
    }

    for (let i = 0; i < VstTres[0].length; i++) {
        if (VstArray.includes(VstTres[0].charAt(i))) {
            VboPrueba = true;
        } else {
            VboPrueba = false;
            break;
        }
    }
    if (VboPrueba == true) {
        VitComprobar++;
    }

    if (VstTres[1].length >= 2 && VstTres[1].length <= 4) {
        VitComprobar++;
    }

    let VstComprobar = "";
    if (VitComprobar == 6) {
        VstComprobar = "Email valido";
        document.formulario.Mensaje.value = VstComprobar;
    } else {
        VstComprobar = "Email incorrecto";
        document.formulario.Mensaje.value = VstComprobar;
    }
}
