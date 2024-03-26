// Função que retorna a soma de dois números
function somarNumeros(num1, num2) {
    return num1 + num2;
}

// Função que será chamada pelo botão para realizar a soma
function realizarSoma() {
    // Obter os valores dos inputs
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Verificar se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
        // Se um dos valores não for um número válido, exibir mensagem de erro
        document.getElementById("resultadoSoma").innerText = "Por favor, insira números válidos.";
    } else {
        // Caso contrário, chamar a função somarNumeros e exibir o resultado
        var resultado = somarNumeros(num1, num2);
        document.getElementById("resultadoSoma").innerText = "A soma é: " + resultado;
    }
}