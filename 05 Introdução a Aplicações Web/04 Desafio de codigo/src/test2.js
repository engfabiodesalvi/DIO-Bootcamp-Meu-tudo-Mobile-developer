// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.


// função que simula a entrada de dados
async function gets() {
    const prompt = require('prompt-sync')();
    let input = String(prompt());
    return input;
}

// função que simula a saída de dados
async function print(value) {
    console.log(value);
}

// Chamada da função principal
// Auto invoke
(async function main() {
    
    // Lê a quantidade de empréstimos
    let loanCount = parseInt(await gets());

    // Lista para armazenar os empréstimos
    let loans = [];

    for (let i = 0; i < loanCount; i++) {
        loans.push(parseInt(await gets()));
    }

    // Lê os limites e extrai os valores
    let lowLimit = parseInt(String(String(await gets()).split(":")[1]).trim());
    let mediumLimit = parseInt(String(String(await gets()).split(":")[1]).trim());

    // Listas para classificar os empréstimos
    let lowRisk = [];
    let mediumRisk = [];
    let highRisk = [];

    // TODO: Classifique conforme os limites
    loans.forEach(loan => {
        if (loan <= lowLimit) {
            lowRisk.push(loan);
        } else if (loan <= mediumLimit) {
            mediumRisk.push(loan);
        } else {
            highRisk.push(loan);
        }
    });

    lowRisk.sort((a, b) => a < b);
    mediumRisk.sort((a, b) => a < b);
    highRisk.sort((a, b) => a < b);

    // Impressão dos resultados
    print("baixo: " + joinList(lowRisk));
    print("medio: " + joinList(mediumRisk));
    print("alto: " + joinList(highRisk));

    // Função auxiliar para juntar os elementos da lista separados por vírgula
    function joinList(list) {
        return list.join(",");
    }

})();
