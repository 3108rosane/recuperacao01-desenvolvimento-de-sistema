import leia from 'readline-sync';
export default function atividade03() {
  console.log('Atividade 03');
  let number = leia.questionInt("digite um numero")
  let numerosInteiros: number[] = [];
for (let i = 0; i < 10; i++) {
    numerosInteiros[i] = Math.trunc(Math.random() * 100);
}

let maior: number[] = [];
for (var i = 0; i < numerosInteiros.length; i++) {
    if (numerosInteiros[i] % 2 === 0) {
        maior.push(numerosInteiros[i])
        
    }
}

console.log(numerosInteiros);
console.log(maior);

}
