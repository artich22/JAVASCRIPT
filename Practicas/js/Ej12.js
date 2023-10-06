window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = Comprobar;
}

function Comprobar() {
    let VstUno = document.formulario.Direccion.value;
    let VstF = VstUno;
    let VboPrueba = true;
    let VitComprobar = 0;
    let VstArray = "abcdefghijklmnñopqrstuvwxyz";
    let VstArrayNum = "abcdefghijklmnñopqrstuvwxyz0123456789";
    let VstArrayguion = "abcdefghijklmnñopqrstuvwxyzºª/-1234567890";
    VstUno = VstUno.toLowerCase();
    

    if(VstUno.length >= 8 && VstUno.length <= 42){
        if (VstArray.includes(VstUno.charAt(0))) {
            VitComprobar=0;
            for (let index = 1; index <= (VstUno.length-2); index++) {
                if (VstArrayguion.includes(VstUno.charAt(index))) {
                    VitComprobar++;
                }
            }
            if (VitComprobar==(VstUno.length-2)) {
                if (VstArray.includes(VstUno.charAt(VstUno.length))) {
                    let VstComprobar = "Direccion valida";
                    document.formulario.Mensaje.value = VstComprobar;
                }
            }
        }
    }else{
        let VstComprobar = "Minimo 8 caracteres - Maximo 42";
        document.formulario.Mensaje.value = VstComprobar;
    }
}
                