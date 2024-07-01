"use strict";

function calcularPromedio(calificaciones) {
    
    if (calificaciones.length === 0) {
        alert("El array de calificaciones está vacío.");
        return;
    }
   
    let suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
   
    let promedio = suma / calificaciones.length;

    let parteEnteraPromedio = Math.floor(promedio);
    
    alert(`El promedio entero de las calificaciones es: ${parteEnteraPromedio}`);
}
let calificaciones = [100, 100, 100, 100, 100];
calcularPromedio(calificaciones);