
        function esPrimo(numero) {
            if (numero <= 1) return false;
            if (numero <= 3) return true;
            if (numero % 2 === 0 || numero % 3 === 0) return false;
            let i = 5;
            while (i * i <= numero) {
                if (numero % i === 0 || numero % (i + 2) === 0) return false;
                i += 6;
            }
            return true;
        }

        function calcularPrimos() {
            const numeroInicial = parseInt(document.getElementById("numeroInicial").value);
            const numeroFinal = parseInt(document.getElementById("numeroFinal").value);
            let numerosPrimos = "";

            for (let i = numeroInicial; i <= numeroFinal; i++) {
                if (esPrimo(i)) {
                    if (numerosPrimos === "") {
                        numerosPrimos += i;
                    } else {
                        numerosPrimos += " | " + i;
                    }
                }
            }

            document.getElementById("numerosPrimos").value = numerosPrimos;
        }
