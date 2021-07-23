// vamos ver agora uma funçao interessante, a funçao map.

// associado ao map, existe dentro dele, um laço que vai ser executado, e o map serve para fazer uma transformaçao no array.
// entao a ideia é mapear um array pra um outro array do mesmo tamanho só que com os dados transformados;
// por exemplo podemos ter um array com 3 elementos [1,2,3], se quisermos transformar esse array de 3 elementos em outro array,
// tambem com 3 elementos, só que com os valores alterados, usamos o map.
// Vamos percorrer cada um dos elementos, e o resultado final dessa transformaçao usando o map é um outro array de mesmo tamanho
// com os dados transformados.

// por exemplo;
// podemos ter um map que pega um objeto e transforma em um numero, um objeto e transforma em uma String, um array com varios json's
// e transforma-los em um array de objetos.
// Ou seja, o map serve para transformar um array em outro. mas há algumas regras.
// se o array original tem 6 elementos, o resultado final do map sera um array de 6 elementos, só q com os dados transformados.
// simplificando mais ainda, o map serve para mapear elementos de um array com tamanho x para outro array tambem com tamanho x;

// Vamos praticar.

// vamos começar definindo um array de numeros.

const numeros = [1, 2, 3, 4, 5, 6, 7];

// basicamente o map é um for com um proposito. dentro do map temos um for que vai pegar os dados do array original, alterar seus
// valores e retornar um array de mesmo tamanho só que com seus valores alterados.

// se quisermos gerar um array em que todos os elementos de 'numeros' sejam o dobro?
// para isso usamos o map.
// vamos armazenar o resultado em uma variavel.

let dobro = numeros.map((elemento) => {
  // podemos receber nessa callback, 3 parametros, o proprio valor atual, pode receber o indice
  // e tambem o array completo. Por enquanto vamos ficar apenas com o elemento atual.
  return elemento * 2;
});
console.log(
  `Criamos um novo array de mesmo tamanho do original só que com \nos valores alterados: \n${dobro}\n`
);

// note que nao alteramos o array original 'numeros', ele continua tendo os mesmos valores
console.log(
  `Nao alteramos os valores do array original usando map: \n${numeros}\n`
);
// ja a const dobro nos traz numeros * 2.
console.log(`Array mapeado com o dobro dos valores originais: \n${dobro}\n`);
// ou seja, mapeamos os numeros para serem agora o dobro do seu valor atual. muito poderoso.

// e se nao retornarmos nada no map dobro ? Teremos ainda um array com o mesmo numero de posiçoes só que com valores undefined.

// vamos treinar mais.
// somaremos 10
const soma10 = (elemento) => elemento + 10;
// triplicaremos o valor
const triplo = (elemento) => elemento * 3;
// Converteremos os valores para a moeda Real
const converteParaReal = (elemento) =>
  `R$${parseFloat(elemento).toFixed(2).replace(".", ",")}`;
// essas tres funçoes iremos passar como callback para o map

// chamando o map de forma encadeada
// como podemos fazer isso ?
// muito simples
const resultado = numeros.map(soma10).map(triplo).map(converteParaReal);
console.log(
  `Valores transformados com sucesso, sem nenhum erro:  \n${resultado}\n `
);
const usuarios = {
  user1: "Gabriel",
  user2: "Leonardo",
  user3: "Mario",
};
const nomes = numeros
  .map((numerosParaNomes) => (numerosParaNomes = [usuarios]))
  .slice(6, 8);

console.log(`Transformamos o array de numeros para nomes de usuarios \n ${nomes.user1} \n`);
