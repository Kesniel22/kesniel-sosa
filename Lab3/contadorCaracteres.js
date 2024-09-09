// Modulo Contador Caracteres
export function contCaract(str) {
    const count = {};
    for (const char of str) {
        count[char] = (count[char] || 0) + 1;
    }
    return count;
}

window.contadorCaracteres = function() {
    const cadena = document.getElementById('cadena').value;
    const resultado = document.getElementById('resultado_conteo');
    const counts = contCaract(cadena);

    // Crear una tabla HTML para mostrar el conteo
    let resultHtml = '<table border="1"><tr><th>Carácter</th><th>Cantidad</th></tr>';
    for (const char in counts) {
        resultHtml += `<tr><td>${char}</td><td>${counts[char]}</td></tr>`;
    }
    resultHtml += '</table>';

    resultado.innerHTML = resultHtml;
}