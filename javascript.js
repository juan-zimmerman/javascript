// Comentario em uma linha

/* comentario em varias linhas
por exemplo assim */

 // declarando
 //var nome;
 //var idade;

 //atribuindo
 //nome = "um nome";
 //idade = 30

 //inicializando
//var aula = "Aula 02";


//contas
//var numeroA = 2
//var numeroB = 3
//var numeroC = 5

//var resultadoDaSoma = numeroA + numeroB
//var resultadoDaDivisao = nume - numeroA

//var nome = "Juan"
//var sobrenome = "Zimmermann"
//var ano = 2024
//var idade = 27

//var nomeCompleto = nome + sobrenome
//var idadeNome = idade + nome

//var nome = prompt("insira o nome aqui")
//var resultado = nome + " " + "Seja Bem-vindo";
//alert(resultado);

//var valor = prompt("insira o custo a ser calculado com icms de SP")
//var valorNumerico = 1.18;
//var resultadoNumerico = valor * valorNumerico;
//alert(resultadoNumerico);

//var custo = prompt("Com qual margem deseja vender o produto ?")
//var resultadoCusto = parseInt(custo) * resultadoNumerico ;
//alert(resultadoNomeCompleto);

//console.log(inserirNome)
//console.log("bem - vindo")


//3º Desafio

// Solicita a quantidade de parcelas
let quantidadeParcelas = prompt("Digite a quantidade de parcelas:");
let custoTotal = prompt("Digite o valor");


// Convertendo a entrada para número
quantidadeParcelas = parseInt(quantidadeParcelas);
custoTotal = parseInt(custoTotal);

// Valor fixo para exemplo
let valorTotal = custoTotal; // Valor total a ser parcelado

// Calcula o valor de cada parcela
let valorParcela = valorTotal / quantidadeParcelas;

// Loop for para exibir o valor de cada parcela
for (let i = 1; i <= quantidadeParcelas; i++) {
    console.log("Parcela " + i + ": R$" + valorParcela.toFixed(2));
    alert("Parcela " + i + ": R$" + valorParcela.toFixed(2))
}