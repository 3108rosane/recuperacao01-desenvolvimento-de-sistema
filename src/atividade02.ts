import leia from 'readline-sync';

export default function atividade02() {
  console.log('Atividade 02');

    var celcius = leia.questionFloat("INFORME A TEMPERATURA EM GRAUS CELCIUS: ");

    var far = celcius * 1.8 + 32;
    var kelvin = celcius + 273;

    console.log(`${celcius}ºC EM FAHRENHEIT É ${far}ºF E EM KELVIN É ${kelvin}K`);
}
