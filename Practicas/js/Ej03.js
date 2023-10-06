window.onload=comienzo;

function comienzo(){
    document.formulario.boton.onclick=tratar;
}
function tratar(){
    let VstResulto="";
    let VstUno=document.formulario.inicio.value;
    let VstDos=document.formulario.final.value;
    let VitUno=parseInt(VstUno,10);
    let VitDos=parseInt(VstDos,10/* El 10 es para ponerlo en decimal y el parseInt para convertir */);

    for(let indice=VitUno; indice<=VitDos; indice++)
                if(numeroPrimo(indice)){
                    VstResulto+=indice.toString() + "|";
                    }
    
    document.formulario.textarea.value=VstResulto;
}

function numeroPrimo(numero){
    let VboPrimo=true;
    for(let VitIndice=2; VitIndice<numero; VitIndice++)
        if (numero % VitIndice == 0){
            VboPrimo=false;
        }
    return VboPrimo;
}
