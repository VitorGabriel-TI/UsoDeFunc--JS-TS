let scan = require('prompt-sync')(); 
import { funcFatorial, funcArea, funcExponenciacao, funcPorcentagem} from './exerciciosFuncoes';

do{
console.log('Escolha uma das opções: ');
console.log('1 - Fatorial \n2 - Exponenciação \n3 - Porcentagem \n4 - Area do triângulo \n5 - Sair')
var opcao = scan();
opcao = Number(opcao);

switch (opcao) {
    case 1:
        console.log('Você selecionou a opção 1. \nDigite o fatorial');
        let fatorial = scan();
        const resultadoFatorial = funcFatorial(fatorial);
        console.log("Resultado: ", resultadoFatorial);
      break;
    case 2:
      console.log('Você selecionou a opção 2. \nDigite a base e o expoente');
      let base = scan();
      let expoente = scan();
      const resultadoExpoente = funcExponenciacao(base, expoente);
      console.log('Resultado:', resultadoExpoente);
      break;
    case 3:
      console.log('Você selecionou a opção 3. \nDigite o valor e o percentual');
      let valor = scan();
      let porcentagem = scan()
      const resultadoPorcentagem = funcPorcentagem(valor, porcentagem);
      console.log('Percentual: ', resultadoPorcentagem);
      break;
    case 4:
        console.log('Você selecionou a opção 4. \nDigite a base e a altura');
        let baseTriangulo = scan();
        let altura = scan();
        const resultadoArea = funcArea(baseTriangulo, altura);
        console.log('A area é: ', resultadoArea);
    break;
    default:
      console.log('Opção inválida.');
      break;
  }
}
while(opcao!=5);
