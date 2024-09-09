// Modulo Numero Primo
function numPrimo(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

export function sumPrimos(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (numPrimo(i)) {
            sum += i;
        }
    }
    return sum;
}

window.calcularSumPrimos = function() {
    const number = document.getElementById('number').value;
    const resultado = document.getElementById('resultado_primo');
    
    const primeSum = sumPrimos(Number(number));

    resultado.innerText = `La sumatoria de los números primos hasta ${number} es ${primeSum}.`;
}
