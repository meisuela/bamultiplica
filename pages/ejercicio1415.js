// ejercicio 14
        // let numeroIngresado = prompt("Ingrese un número")
        // if (numeroIngresado > 10){
        //     document.write("Tu número es mayor a 10")
        // } else if (numeroIngresado<=10){
        //     document.write("tu número es menor o igual a 10") 
        // } else{
        //     document.write("no es un número")
        // }

// ejercicio 15
        function esNumeroDeLaSuerte(num1){
            if((num1 > 0) && (num1 % 2 == 0 || num1 % 3 ==  0) && (num1 != 15)){
                console.log("Es un número de la suerte");
            }
            else{
                console.log("No es un número de la suerte")
            };
        }
        