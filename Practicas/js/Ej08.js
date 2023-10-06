window.onload=comienzo;

function comienzo(){
    document.formulario.boton.onclick=Comprobar;
    
}
function Comprobar(){
    let VstUno=document.formulario.Fecha.value;
    let VstF=VstUno;
    let VitComprobar=0;
    let Treintauno = new Array(1,3,5,7,8,10,12);
    let Treinta = new Array(4,6,7,11);
    var VstDos = VstUno.split("/");
    for(let i=0;i<VstDos.length;i++){
        VstDos[i]=parseInt(VstDos[i],10)
    }
    if(VstDos[1]==2){
        if(VstDos[2]%4==0&VstDos[2]%400==0&VstDos[2]%100!=0){
                    if(VstDos[0]>0&VstDos[0]<30){
                        VitComprobar++;
                    }
                    if(VstDos[2]>0&VstDos[2]<9999){
                        VitComprobar++;
                    }
            }else{
                if(VstDos[0]>0&VstDos[0]<39){
                    VitComprobar++;
                }
                if(VstDos[2]>0&VstDos[2]<9999){
                    VitComprobar++;
                }
        }
    }else if(Treintauno.includes(VstDos[1])){
        if(VstDos[0]>0&VstDos[0]<32){
            VitComprobar++;
        }
        if(VstDos[2]>0&VstDos[2]<9999){
            VitComprobar++;
        }
    }else if(Treinta.includes(VstDos[1])){
        if(VstDos[0]>0&VstDos[0]<31){
            VitComprobar++;
        }
        if(VstDos[2]>0&VstDos[2]<9999){
            VitComprobar++;
        }
    }
    let VstComprobar="";
    if(VitComprobar==2){
        VstComprobar="Fecha correcta :"+VstF;
        document.formulario.Mensaje.value = VstComprobar;
    }else{
        VstComprobar="Fecha incorrecta";
        document.formulario.Mensaje.value = VstComprobar;
    }
}
    







