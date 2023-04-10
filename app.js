"use strict";
exports.__esModule = true;
var scan = require('prompt-sync')();
var exerciciosFuncoes_1 = require("./exerciciosFuncoes");
do {
    console.log('Escolha uma das opções: ');
    console.log('1 - Fatorial \n2 - Exponenciação \n3 - Porcentagem \n4 - Area do triângulo \n5 - Sair');
    var opcao = scan();
    opcao = Number(opcao);
    switch (opcao) {
        case 1:
            console.log('Você selecionou a opção 1. \nDigite o fatorial');
            var fatorial = scan();
            var resultadoFatorial = (0, exerciciosFuncoes_1.funcFatorial)(fatorial);
            console.log("Resultado: ", resultadoFatorial);
            break;
        case 2:
            console.log('Você selecionou a opção 2. \nDigite a base e o expoente');
            var base = scan();
            var expoente = scan();
            var resultadoExpoente = (0, exerciciosFuncoes_1.funcExponenciacao)(base, expoente);
            console.log('Resultado:', resultadoExpoente);
            break;
        case 3:
            console.log('Você selecionou a opção 3. \nDigite o valor e o percentual');
            var valor = scan();
            var porcentagem = scan();
            var resultadoPorcentagem = (0, exerciciosFuncoes_1.funcPorcentagem)(valor, porcentagem);
            console.log('Percentual: ', resultadoPorcentagem);
            break;
        case 4:
            console.log('Você selecionou a opção 4. \nDigite a base e a altura');
            var baseTriangulo = scan();
            var altura = scan();
            var resultadoArea = (0, exerciciosFuncoes_1.funcArea)(baseTriangulo, altura);
            console.log('A area é: ', resultadoArea);
            break;
        default:
            console.log('Opção inválida.');
            break;
    }
} while (opcao != 5);
