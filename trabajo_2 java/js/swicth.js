function mostrarSt() {
    var opc = prompt("Selecciona la figura (cuadrado, rectangulo, triangulo)");
    var area;

    switch (opc) {
        case "cuadrado":
            var lado = parseFloat(prompt("Inserte la longitud del lado del cuadrado"));
            area = lado * lado;
            break;
        case "rectangulo":
            var base = parseFloat(prompt("Inserte la base del rectangulo"));
            var altura = parseFloat(prompt("Inserte la altura del rectangulo"));
            area = base * altura;
            break;
        case "triangulo":
            var base = parseFloat(prompt("Inserte la base del triángulo"));
            var altura = parseFloat(prompt("Inserte la altura del triángulo"));
            area = (base * altura) / 2;
            break;
        default:
            alert("Figura no válida");
    }

    if (area) {
        alert("El área de la figura seleccionada es: " + area);
    }
}