window.onload = comienzo;

function comienzo() {
    document.formulario.boton.onclick = Comprobar;
}

function Comprobar() {
    let VstUno = document.formulario.Localidad.value;
    let VstF = VstUno;
    let VboPrueba = true;
    let VitComprobar = 0;
    let VstArray = "abcdefghijklmnñopqrstuvwxyz";
    let VstArrayNum = "abcdefghijklmnñopqrstuvwxyz0123456789";
    let VstArrayguion = "abcdefghijklmnñopqrstuvwxyz 1234567890";
    VstUno = VstUno.toLowerCase();
    

    if(VstUno.length >= 7 && VstUno.length <= 35){
        for (let index = 0; index < 3; index++) {
            if (VstArray.includes(VstUno.charAt(index))) {
                VitComprobar++;
            }
        }
        if(VitComprobar==3){
            VitComprobar=0;
            for (let index = 3; index <= (VstUno.length-3); index++) {
                if (VstArrayguion.includes(VstUno.charAt(index))) {
                    VitComprobar++;
                }
            }
            if (VitComprobar==(VstUno.length-5)) {
                VitComprobar=0;
                for (let index = (VstUno.length-1); index <= (VstUno.length); index++) {
                    if (VstArray.includes(VstUno.charAt(index))) {
                        VitComprobar++;
                    }
                }
                if(VitComprobar==2){
                    let VstComprobar = "Localidad valida";
                    document.formulario.Mensaje.value = VstComprobar;
                }
                else{
                    let VstComprobar = "Error4";
                    document.formulario.Mensaje.value = VstComprobar;
                }
            }else{
                let VstComprobar = "Error3";
                document.formulario.Mensaje.value = VstComprobar;
            }
        }else{
            let VstComprobar = "Error2";
            document.formulario.Mensaje.value = VstComprobar;
        }
    }else{
        let VstComprobar = "Minimo 7 caracteres - Maximo 35";
        document.formulario.Mensaje.value = VstComprobar;
    }
}
