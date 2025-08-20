// Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//const monthlyMovement = gets() // original DIO

let monthlyMovement = 0;

// Função para classificar clientes fintech por movimentação mensal
function classifyFintechClient(monthlyMovement) {
    // TODO: Verifique se o valor é válido e classifique por faixa de movimentação    
    
    const newMonthlyMovement = parseFloat(monthlyMovement);
    
    if (typeof newMonthlyMovement == "number" && newMonthlyMovement >= 0.01) {
      if (newMonthlyMovement < 2000.01)
        return "Basic";
      else if (newMonthlyMovement >= 2000.01 && newMonthlyMovement < 8000.01)
        return "Plus";
      else if (newMonthlyMovement >= 8000.01 && newMonthlyMovement < 25000.01)
        return "Premium";
      else
        return "Private";
    } else {
      return "Valor invalido";
    }
}

//------------------------------
// Adding for test

function testValue(monthlyMovement) {
  console.log(`${monthlyMovement} - ${typeof monthlyMovement} - ${classifyFintechClient(monthlyMovement)}`);
};

testValue(1500.00);
testValue(15000.00);
testValue(5005.50);
testValue("1500.00");
testValue("15000.00");
testValue("5005.50");
testValue(0);
testValue(-100);
testValue('ola');
testValue(true);
testValue(false);

//------------------------------


/* Original DIO
// Imprime o Resultado
print(classifyFintechClient(monthlyMovement));
*/