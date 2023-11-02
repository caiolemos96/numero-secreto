/*
Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.*/

let desafio2 = document.querySelector('h1');
desafio2.innerHTML = 'Hora do Desafio';


function botaoConsole() {
    console.log('O botão foi clicado');
}

function mostraAlerta() {
    alert('Eu amo JS');
}

function botaoPrompt() {
    let cidade = prompt ('Qual o nome da cidade?');
    alert(`estive em ${cidade} e lembrei de você!`);
}

function botaoSoma() {
    let num1 = parseInt(prompt('Digite um numero'));
    let num2 = parseInt(prompt('Digite outro numero'));
    let resultado = num1 + num2;
    alert(`a soma entre ${num1} e ${num2} é igual a ${resultado}`);
}


//Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ['JavaScript', 'C', 'c++', 'Kotlin', 'Python'];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang')

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let nomes = ['Caio', 'Juliana', 'Karina'];

console.log(nomes[0])

//Crie uma lista com 3 nomes e exiba no console apenas o segund elemento.
let nomes2 = ['Caio', 'Juliana', 'Karina'];

console.log(nomes[1])

//Crie uma lista com 3 nomes e exiba no console apenas o ultim elemento.
let nomes3 = ['Caio', 'Juliana', 'Karina'];

console.log(nomes[2])
