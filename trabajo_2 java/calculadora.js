function mostrar() {

    var operacion = prompt("Seleccione la operación (suma=1 , resta=2, multiplicacion=3, division=4, comparacion 5)");
    
    var num1 = parseFloat(prompt("Ingrese el primer numero"));
    var num2 = parseFloat(prompt("Ingrese el segundo numero"));
    
    switch (operacion) {
    
        case "1":
            var resultado = num1 + num2;
            document.write("El resultado de la suma es: " + resultado);
            break;
    
        case "2":
            var resultado = num1 - num2;
            document.write("El resultado de la resta es: " + resultado);
            break;
    
        case "3":
            var resultado = num1 * num2;
            document.write("El resultado de la multiplicación es: " + resultado);
            break;
    
        case "4":
            if (num2 !== 0) {
            var resultado = num1 / num2;
            document.write("El resultado de la división es: " + resultado);
            } else {
            document.write("No se puede dividir por cero.");
            }
            break;
        
        case "5":
            if (num1 > num2) {
                document.write("El primer número es mayor que el segundo.");
            } else if (num2 > num1) {
                document.write("El segundo número es mayor que el primer.");
            } else {
                document.write("Los dos numero son iguales");
            }
            break;
        default:
                document.write("Operación no válida");
        }
    }