// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

async function monitor() {        
    let loanCount = parseInt(await gets());    
    //console.log(loanCount);

    let urgent = [];
    let observation = [];
    let noUrgency = [];

    // TODO: Leia os valores dos dias restantes para cada empréstimo
    let loan = 0;
    for(let i = 0; i < loanCount; i++ )    {
            loan = parseInt(await gets()); 
        if (loan <= 5) {
            urgent.push(loan);
        } else if (loan > 5 && loan <= 15) {
            observation.push(loan);
        } else {
            noUrgency.push(loan);
        }
    }

    urgent.sort((a, b) => a < b);
    observation.sort((a, b) => a < b);
    noUrgency.sort((a, b) => a < b);

    // Formata uma lista como string separada por vírgulas
    function formatList(list) {
        return list.join(',');
    }

    // Exibe os resultados agrupados
    print("urgente: " + formatList(urgent));
    print("observacao: " + formatList(observation));
    print("sem_urgencia: " + formatList(noUrgency));
}


// função que simula a entrada de dados
async function gets() {
    const prompt = require('prompt-sync')();
    return prompt();
}

// função que simula a saída de dados
async function print(value) {
    console.log(value);
}

// Chamada da função principal
// Auto invoke
(async function main() {
    monitor();
})();
