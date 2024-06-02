const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número para buscar na lista: ', (numeroDigitado) => {

  const lista = [3, 5, 2, 8, 10, 4];


  const indice = buscaLinear(lista, parseInt(numeroDigitado));

  
  if (indice !== -1) {
      console.log(`O número ${numeroDigitado} foi encontrado no índice ${indice} da lista.`);
  } else {
      console.log(`O número ${numeroDigitado} não foi encontrado na lista.`);
  }

  rl.close();
});

function buscaLinear(arr, elemento) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elemento) {
            return i; 
        }
    }
    return -1; 
}

