import { Console } from 'console';
import leia from 'readline-sync';
export default function atividade04() {  
  console.log('Atividade 04');

  var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&'
  var senha: string[] = [];
     for (let i = 0; i < 15; i++) {
        senha.push(leia.question("DIGITE UMA SENHA: "));
    }
    console.log("A SENHA DIGITADA É:");
    

}