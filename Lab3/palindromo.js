// Modulo Palindormo
export function verifPalindromo(str) {
    return str === str.split('').reverse().join('');
}

export function palindromoDobleBase(num) {
    const decimalStr = num.toString();
    const binaryStr = num.toString(2);

    return verifPalindromo(decimalStr) && verifPalindromo(binaryStr);
}

window.revisarPalindromo = function() {
    const num = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado_palindromo');

    if (palindromoDobleBase(Number(num))) {
        resultado.innerText = `${num} es un palíndromo en base 10 y en base 2.`;
    } else {
        resultado.innerText = `${num} no es un palíndromo de doble base.`;
    }
}
