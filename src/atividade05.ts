import leia from 'readline-sync';
export default function atividade05() {
  console.log('Atividade 05');
  let vetorNumeros: number[] = [];
  let soma: number[] = [];

  for (let i = 0; i < 37; i++) {
      vetorNumeros.push(leia.questionInt(`INFORME UM NUMERO ${i + 1}: `));
  }

  let j = 0;
  while (j < vetorNumeros.length) {
      soma[j] = vetorNumeros[j]  ;
      j++
  }

  console.table(vetorNumeros)
  console.table(soma)
}
