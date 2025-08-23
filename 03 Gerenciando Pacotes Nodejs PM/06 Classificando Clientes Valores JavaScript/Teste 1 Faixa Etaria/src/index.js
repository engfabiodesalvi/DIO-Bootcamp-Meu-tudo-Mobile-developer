// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//const age = gets(); // original DIO
let age = 0; // modificação para teste

// Função para classificar clientes por faixa etária
function classifyAgeForCredit(age) {
    // TODO: Classifique por faixa etária
    if (age >= 0 && age < 18)
      return "Menor de idade - sem elegibilidade";
    else if (age >= 18 && age < 36)
      return "Jovem";
    else if (age >= 36 && age < 65)
      return "Adulto";
    else 
      return "Idoso";
}

//---------------
// adicionado para teste
age = 25;
console.log(classifyAgeForCredit(age));

age = 45;
console.log(classifyAgeForCredit(age));

age = 16;
console.log(classifyAgeForCredit(age));

//---------------

/* DIO original
// Imprime o resultado
print(classifyAgeForCredit(age));
*/