import leia from 'readline-sync';
export default function atividade01() {
  console.log('Atividade 01');
  
  
let dias = leia.keyInSelect(['R$100,00', 'R$90,00', 'R$80,00']) + 1;

if (dias <= 5) {
    console.log("VOCÊ VAI PAGAR 100,00 A DIARIA")
} else if (dias === 6 || dias === 10) {
    console.log("VOCÊ VAI PAGAR 90,00 REAIS A DIARIA")
} else if (dias > 11) {
    console.log("VOCÊ VAI PAGAR 80,00 REAIS A DIARIA")
} else {
    let dias = leia.questionFloat("INFORME O NUMERO DE DIAS QUE VOCÊ PRETENDE FICAR: ")
    console.log(`VOCÊ VAI FICAR `)
}
}