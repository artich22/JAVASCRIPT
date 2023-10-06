

window.onload=comienzo;
		function comienzo(){
            let VstResulto="";
            for(let indice=1; indice<=100; indice++)
                if(numeroPrimo(indice))
                    VstResulto+=indice.toString() + "|";
            document.formulario.textarea.value=VstResulto;
        }
		function numeroPrimo(numero){
			let VboPrimo=true;
            for(let VitIndice=2; VitIndice<numero; VitIndice++)
                if (numero % VitIndice == 0)
                    VboPrimo=false;
            return VboPrimo;
		}
		