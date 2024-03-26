// Função que converte todas as letras de uma string para caixa alta
function converterParaCaixaAlta(str) {
    return str.toUpperCase();
}

// Função que será chamada pelo botão para converter a string
function converterString() {
    // Obter o valor do input
    var inputString = document.getElementById("inputString").value;

    // Converter para caixa alta usando a função
    var resultado = converterParaCaixaAlta(inputString);

    // Exibir o resultado na página
    document.getElementById("resultado").innerText = resultado;
}