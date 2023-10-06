window.onload=comienzo;

function comienzo(){
    document.formulario.boton.onclick=Comprobar;
}
function Comprobar(){
    let VstUno=document.formulario.Nombre.value;
    let VstABC="abcdefghijklmnñopqrstuvwxyz";
    VstUno=VstUno.lowerCase();
    

    if(ValidaciónA(VstUno,VstABC)==true&ValidaciónB(VstUno)==true&ValidaciónD(VstUno)==true){

    }

}

function ValidaciónA(VstUno,VstABC){
    let cont =0;
    cont=VstUno.length;
    if(VstABC.includes(VstUno.charAt(0))&VstABC.includes(VstUno.charAt(cont))){    return true;
    }else{return false}
    
}

function ValidaciónB(VstUno){
    let cont =0;
    cont=VstUno.length;
    if(cont>3){    return true;
    }else{return false}
    
}

function ValidaciónD(VstUno){
    let cont =0;
    cont=VstUno.length; 
    if(cont>3&cont<28){    return true;
    }else{return false}
    
}



