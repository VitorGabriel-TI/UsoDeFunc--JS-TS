"use strict";
exports.__esModule = true;
exports.funcArea = exports.funcPorcentagem = exports.funcFatorial = exports.funcExponenciacao = void 0;
function funcExponenciacao(base, expoente) {
    return Math.pow(base, expoente);
}
exports.funcExponenciacao = funcExponenciacao;
function funcFatorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * funcFatorial(num - 1);
    }
}
exports.funcFatorial = funcFatorial;
function funcPorcentagem(valor, porcentagem) {
    return (valor * porcentagem) / 100;
}
exports.funcPorcentagem = funcPorcentagem;
function funcArea(base, altura) {
    return (base * altura) / 2;
}
exports.funcArea = funcArea;
