

window.onload=comienzo;
		function comienzo(){
            let VstResulto="";
            let contador=1;
            for(let indice=1; contador<=100; indice++)
                if(numeroPrimo(indice)){
                    VstResulto+=indice.toString() + "|";
                    contador++;}
                
            document.formulario.textarea.value=VstResulto;
        }
		function numeroPrimo(numero){
			let VboPrimo=true;
            for(let VitIndice=2; VitIndice<numero; VitIndice++)
                if (numero % VitIndice == 0){
                    VboPrimo=false;
                    break;
                }
            return VboPrimo;
		}
		