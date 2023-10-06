window.onload=comienzo;

function comienzo(){
    document.formulario.boton.onclick=Comprobar;
}
function Comprobar(){
    let VstUno=document.formulario.Cadena.value;
    let VstDos=document.formulario.Subcadena.value;
    let VitLong= VstUno.length;
    ContarTodo(VstUno,VstDos,VitLong);
    
}

function ContarTodo(VstUno,VstDos,VitLong){
    let cont =0;
    if(VstDos.length>1){
        if(VstUno.includes(VstDos)==true){
            cont++;
        }
    }else{
    for (let i =0; i<VitLong; i++){
        if(VstUno.charAt(i)==VstDos){
            cont++;
        }
    }}
    document.formulario.Mensaje.value = cont;
}

