window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = Comprobar;
}

function Comprobar() {
    let VstUno = document.formulario.Uerrel.value;
    let VboPrueba = true;
    let VitComprobar = 0;
    let VstArray = "abcdefghijklmnñopqrstuvwxyz";
    let VstArrayNum = "abcdefghijklmnñopqrstuvwxyz0123456789";
    let VstArrayguion = "abcdefghijklmnñopqrstuvwxyz-1234567890";
    VstUno = VstUno.toLowerCase();
    var VstDos = VstUno.split(".");


    if(VstDos[0].length>3){
        if(VstDos[0]=="https://www" || VstDos[0]=="http://www"){
        VitComprobar++;}
    } if (VstDos[0].length==3) {
        if(VstDos[0]=="www"){
            VitComprobar++;}
    }

    if (VstArray.includes(VstDos[1].charAt(0))) {
        VitComprobar++;
    }

    for (let i = 0; i < VstDos[1].length; i++) {
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

    if (VstArrayNum.includes(VstDos[1].charAt(VstDos[1].length-1))) {
        VitComprobar++;
    }

    if (VstDos[2].length >= 2 && VstDos[2].length <= 4) {
        VitComprobar++;
    }



    let VstComprobar = "";
    if (VitComprobar = 5) {
        VstComprobar == "URL valido";
        document.formulario.Mensaje.value = VstComprobar;
    } else {
        VstComprobar == "URL incorrecto";
        document.formulario.Mensaje.value = VstComprobar;
    }
}
