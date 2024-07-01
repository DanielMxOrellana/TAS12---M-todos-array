"use strict";

let nums = [13.676767, 3.123432, 5.34543543, 10.3452345];

function filtrarYRedondear(numeros) {
    let filtrados = numeros.filter(num => num > 10.00);
    
    let redondeados = filtrados.map(num => num.toFixed(2).toString());
    
    return redondeados;
}

let resultado = filtrarYRedondear(nums);
alert(resultado);