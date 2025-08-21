# Desafio de código

## Teste 1 - Monitorando e Classificando Empréstimos com JavaScript

 Intermediário
 Matemática
Desafio
Você está desenvolvendo uma ferramenta para o departamento de cobrança. O sistema deve ajudar a identificar quais empréstimos estão mais próximos do vencimento, para que a equipe possa agir de forma proativa na cobrança.

Seu programa deve:

Ler uma lista de empréstimos com a quantidade de dias restantes para o vencimento;
Classificar os empréstimos em uma das seguintes categorias:
Urgente: vencem em até 5 dias;
Em observação: vencem em mais de 5 dias e até 15 dias;
Sem urgência: vencem em mais de 15 dias;
Agrupar os empréstimos conforme a categoria e exibir a saída neste formato:
urgente: VALORES_SEPARADOS_POR_VÍRGULA
observacao: VALORES_SEPARADOS_POR_VÍRGULA
sem_urgencia: VALORES_SEPARADOS_POR_VÍRGULA
Entrada
A entrada do programa é composta por:

Um número inteiro N representando a quantidade de empréstimos analisados.
N linhas seguintes, cada uma contendo um número inteiro representando os dias restantes até o vencimento de um empréstimo.
Observação: o número de dias será sempre um valor positivo maior que zero.

Saída
O programa deve imprimir três linhas com os empréstimos agrupados conforme a urgência, mantendo a ordem em que foram lidos:

urgente: VALORES_SEPARADOS_POR_VÍRGULA
observacao: VALORES_SEPARADOS_POR_VÍRGULA
sem_urgencia: VALORES_SEPARADOS_POR_VÍRGULA

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
5
2
12
20
5
16	urgente: 2,5
observacao: 12
sem_urgencia: 20,16
4
8
3
17
14	urgente: 3
observacao: 8,14
sem_urgencia: 17
6
1
6
10
16
4
22	urgente: 1,4
observacao: 6,10
sem_urgencia: 16,22


TESTES
Teste #1

Teste #2

Teste #3

Teste #4

Dúvidas ?

## Teste 2 - Agrupador de Empréstimos por Faixa de Valor

 Intermediário
 Matemática
Desafio
Você está desenvolvendo um sistema de classificação de risco para empréstimos bancários. O objetivo é ler valores de empréstimos, classificá-los em faixas de risco e agrupá-los conforme a sua faixa correspondente.

Você deve implementar um programa que:

Leia uma lista de valores de empréstimos e os limites de risco;
Classifique cada valor de empréstimo em uma das seguintes faixas:
Baixo risco: empréstimos com valor menor ou igual ao limite ‘baixo’;
Médio risco: empréstimos com valor maior que o limite ‘baixo’ e menor ou igual ao limite ‘médio’;
Alto risco: empréstimos com valor maior que o limite ‘médio’;
Agrupe os empréstimos por faixa e exiba a saída neste formato:
baixo: VALORES_SEPARADOS_POR_VÍRGULA
medio: VALORES_SEPARADOS_POR_VÍRGULA
alto: VALORES_SEPARADOS_POR_VÍRGULA
Entrada
A entrada do programa é composta por:

Um número inteiro N representando a quantidade de empréstimos que serão analisados.
N linhas seguintes, cada uma contendo um número inteiro representando o valor de um empréstimo.
Uma linha no formato "baixo: X" onde X é o valor limite para a faixa de baixo risco.
Uma linha no formato "medio: Y" onde Y é o valor limite para a faixa de médio risco.
Saída
O programa deve exibir três linhas, uma para cada faixa de risco, com os valores separados por vírgula.
Exemplo:
baixo: VALORES_SEPARADOS_POR_VÍRGULA
medio: MÉDIA_ARITMÉTICA_DOS_VALORES_MÉDIOS
alto: VALORES_SEPARADOS_POR_VÍRGULA

Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

Entrada	Saída
4
2000
6000
15000
17000
baixo: 5000
medio: 15000	baixo: 2000
medio: 6000,15000
alto: 17000
3
5000
3000
6000
baixo: 3000
medio: 5000	baixo: 3000
medio: 5000
alto: 6000
6
1500
3200
800
4500
2000
1000
baixo: 1500
medio: 3000	baixo: 1500,800,1000 
medio: 2000 
alto: 3200,4500
