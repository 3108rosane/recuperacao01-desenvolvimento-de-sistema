import leia from 'readline-sync';
export default function atividade06() {
  console.log('Atividade 06');
  
    let nomeProduto : string [] = [];
    let valorProduto = leia.questionInt("INFORME O VALOR DA VENDA: ");
    for (let i = 0; i < 10; i++) {
    
    
    console.log(`O NOME DO PRODUTO É `)
    console.log(`O VALOR DO PRODUTO É R$${valorProduto.toFixed(2)}`)
    console.log(`O VALOR FINAL DO PRODUTO É R$${valorProduto.toFixed(2)}`);
}
}