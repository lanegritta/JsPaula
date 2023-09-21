var nombre = prompt("Ingrese tu nombre");
var nacimiento = parseInt(prompt("Ingresa el año de nacimiento"));

const fecha = new Date();
const añoActual = fecha.getFullYear();
let edad = añoActual - nacimiento;

    if (edad <= 8) {
    document.write("Bienvenido niño " + nombre + ", usted tiene " + edad + " años de edad.");}

    else if (edad >= 9 && edad <= 17) {
    document.write("Bienvenido joven " + nombre + ", usted tiene " + edad + " años de edad.");}

     else {
    document.write("Bienvenido señor(a) " + nombre + ", usted tiene " + edad + " años de edad.");}