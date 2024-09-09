// Modulo Año Bisiesto
export function añoBisiesto(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

window.verifAñoBisiesto = function() {
    const year = document.getElementById('year').value;
    const resultado = document.getElementById('resultado_Bisiesto');

    if (añoBisiesto(Number(year))) {
        resultado.innerText = `${year} es un año bisiesto.`;
    } else {
        resultado.innerText = `${year} no es un año bisiesto.`;
    }
}
