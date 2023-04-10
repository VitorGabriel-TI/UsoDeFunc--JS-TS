export function funcExponenciacao(base: number, expoente: number): number {
  return base ** expoente;
}

export function funcFatorial(num: number): number {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * funcFatorial(num - 1);
  }
}

export function funcPorcentagem(valor: number, porcentagem: number): number {
  return (valor * porcentagem) / 100;
}

export function funcArea(base: number, altura: number): number {
  return (base * altura) / 2;
}