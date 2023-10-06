window.onload=comienzo;

function comienzo(){
    document.formulario.boton.onclick=tratar;
}
function tratar(){
    let VstUno=document.formulario.decimal.value;
    let VitOgt=parseInt(VstUno,10);
    let VitUno=decToBi(VitOgt);
    let VitDos=decToOc(VitOgt);
    let VitTres=decToHex(VitOgt);

    document.formulario.binario.value=VitUno;
    document.formulario.octal.value=VitDos;
    document.formulario.hexadecimal.value=VitTres;
}

function decToBi(num){
    return num.toString(2)
}

function decToOc(num){
    return num.toString(8)
}

function decToHex(num){
    return num.toString(16)
}