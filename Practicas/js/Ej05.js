window.onload=comienzo;

function comienzo(){
    document.formulario.boton.onclick=Comprobar;
}
function Comprobar(){
    let VstUno=document.formulario.Cadena.value;
    let VitLong = VstUno.length;
    ContarTodo(VitLong,VstUno);
    ContarA(VitLong,VstUno);
    ContarE(VitLong,VstUno);
    ContarI(VitLong,VstUno);
    ContarO(VitLong,VstUno);
    ContarU(VitLong,VstUno);
    ContarConsonantes(VitLong,VstUno);
    ContarVocales(VitLong,VstUno);
    
}

function ContarTodo(VitLong,VstUno){
    let cont =0;
    for (let i =0; i<VitLong; i++){
        if(VstUno.charAt(i)=="a"|VstUno.charAt(i)=="e"|VstUno.charAt(i)=="i"|VstUno.charAt(i)=="o"|VstUno.charAt(i)=="u"){
            cont++;
        }
    }
    document.formulario.NúmeroV.value = cont;
}
function ContarVocales(VitLong,VstUno){
    let cont =0;
    for (let i =0; i<VitLong; i++){
        if(VstUno.charAt(i)=="a"|VstUno.charAt(i)=="e"|VstUno.charAt(i)=="i"|VstUno.charAt(i)=="o"|VstUno.charAt(i)=="u"){
            cont++;
        }
    }
    document.formulario.NúmeroVo.value = cont;
}

function ContarA(VitLong,VstUno){
    let cont =0;
    for (let i =0; i<VitLong; i++){
        if(VstUno.charAt(i)=="a"){
            cont++;
        }
    }
    document.formulario.VecesA.value = cont;
}
function ContarE(VitLong,VstUno){
    let cont =0;
    for (let i =0; i<VitLong; i++){
        if(VstUno.charAt(i)=="e"){
            cont++;
        }
    }
    document.formulario.VecesE.value = cont;
}
function ContarI(VitLong,VstUno){
    let cont =0;
    for (let i =0; i<VitLong; i++){
        if(VstUno.charAt(i)=="i"){
            cont++;
        }
    }
    document.formulario.VecesI.value = cont;
}
function ContarO(VitLong,VstUno){
    let cont =0;
    for (let i =0; i<VitLong; i++){
        if(VstUno.charAt(i)=="o"){
            cont++;
        }
    }
    document.formulario.VecesO.value = cont;
}
function ContarU(VitLong,VstUno){
    let cont =0;
    for (let i =0; i<VitLong; i++){
        if(VstUno.charAt(i)=="u"){
            cont++;
        }
    }
    document.formulario.VecesU.value = cont;
}
function ContarU(VitLong,VstUno){
    let cont =0;
    for (let i =0; i<VitLong; i++){
        if(VstUno.charAt(i)=="u"){
            cont++;
        }
    }
    document.formulario.VecesU.value = cont;
}
function ContarConsonantes(VitLong,VstUno){
    let cont =0;
    for (let i =0; i<VitLong; i++){
        if(VstUno.charAt(i)!="a"&VstUno.charAt(i)!="e"&VstUno.charAt(i)!="i"&VstUno.charAt(i)!="o"&VstUno.charAt(i)!="u"&VstUno.charAt(i)!=" "){
            cont++;
        }
    }
    document.formulario.Consonantes.value = cont;
}

