// Função que conta o número de cliques
function contarCliques() {
    // Verifica se a variável de contagem de cliques já existe
    if (typeof contarCliques.contador == 'undefined') {
        // Se não existir, define a variável contador e inicializa com 0
        contarCliques.contador = 0;
    }
    // Incrementa o contador de cliques
    contarCliques.contador++;
    // Exibe o número de cliques
    alert("Você clicou " + contarCliques.contador + " vezes.");
}

// Adiciona um evento de clique ao botão
document.getElementById("botaoContador").addEventListener("click", contarCliques);