// arrays

// seguindo nos estudos de fundamentos de js. Veremos, metodos importantes, sumulaçao de array com objeto, 
// foreach, map, filter, reduce, imperativo vs declarativo, concat e FlatMap. 

///// O array em js na verdade é um objeto especial com caracteristicas proprias, nao existe um tipo de dados
// array, na verdade ele organiza seus atributos a partir de chaves, organizando seus dados a partir de uma 
//estrutura indexada a partir do 0, apesar das particularidades ele funciona da mesma forma que em outras linguagens.

// se voce nao acredita em mim, teste esse console.log e tenha a prova cabal. 
console.log(typeof Array, typeof new Array, typeof [])

// array em js é uma estrutura dinamica, que cresce e diminui dinamicamente, diferente de outras linguagens, alem de ser 
// dinamico, pelo js ser uma linguagem fracamente tipada, os tipos de dados que voce pode colocar em um array sao os mais
// variados, ou seja, o array é um aestrutura eterogenea, voce pode colocar, int, bool, objeto, outro array, etc. Sem restriçoes.
// Porém, as boas praticas dizem que devemos trabalhar com dados omogeneos dentro de um array. Nao é interessante ter um array com tipos
// diferentes. Fica dificil trabalhar com uma coleçao de dados de tipos diferenciados um do outro. Todos do mesmo tipo se possivel ! 

// exemplos.

// esta nao é a forma recomendada de criar arrays
let aprovados = new Array('bia', 'carlos', 'ana')
console.log(aprovados)

// a forma mais recomendada é a forma literal, que é esta abaixo
aprovados = ['Bia', 'Carlos', 'Ana'] // reatribuiçao usando notaçao literal, a recomendada usar no dia a dia. 
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // nao pertence a este array. geralmente vemos uma mensagem de erro, mas em js ele declara como 'undefined' 
// vide fundamentos

// podemos resolver isso de algumas maneiras. 

// 1 - forma valida de adicionar um novo elemento em um array. 
aprovados[3] = 'Paulo'
console.log(aprovados[3]) // agora o 'Paulo' existe 


// 2 - outra forma de adicionar um novo elemento na ultima posicao do array, tambem a mais usual, usado tambem para substituir um elemento 
// que ja existe a partir do indice. 

// chama-se metodo push. 
aprovados.push('Gabriel')
console.log(aprovados.length) // podemos ver aqui o quanto o nosso array esta crescendo. começamos com 3 aprovados e adicionamos 2 novos 
// elementos,

// e se adicionarmos um elemento no indice 9 ? 
aprovados[9] = 'Mario'
console.log(aprovados.length)
// funciona, o que acontece é que todos os elementos entre os que contem dados, vao exsitir porem todos undefined.
console.log(aprovados[8] === undefined) // true
// ou seja, os indices existem, os elementos estao disponiveis dentro do array, mas todos setados como undefined.
console.log(aprovados)
// sobram 4 elementos vazios entre Gabriel e Mario. 
aprovados.sort()
console.log(aprovados) // essa funçao vai causar uma alteraçao dentro do array ordenando ele.
// execuando percebe-se que foram ordenados em ordem alfabetica com os elementos vazios por ultimo. 
// alguns metodos ao inves de causar alteraçoes diretamente no array ele retorna um novo array, ou seja voce chama o metodos 
// e ele nao altera o array original.  // muitas vezes é mais interessante que alterar o array original.
// o metodo sort() altera o array no qual voce chama a funçao sort. 


// formas de realizar exclusao em um array.

delete aprovados[1] // aqui excluimos o dado do indice [1] mas isso nao reorganiza o array
// o indice ainda ira existir porem undefined, ou seja, o elemento de indice 2 continuara sendo o elemento de indice 2; e assim por diante.
console.log(aprovados[1]) // undefined
console.log(aprovados[2]) // constinua sendo a 'Bia'.
console.log(aprovados[3]) // constinua sendo 'Paulo'



// vamos tentar outra funçao. vamos reatribuir os valores do nosso array de aprovados. 
aprovados = ['José', 'Marcio', 'Marta']
aprovados.splice(1, 1) // serve para adicionar elementos em um determinado indice, como tambem serve para remover elementos de um array, 
// e consegue ainda faz essas duas coisas ao mesmo tempo. 
console.log(aprovados) // aqui excluimos o Marcio;
// é, tem coisa q é mais facil entender do que explicar.

//exemplo
aprovados.splice(indice, quantidadeDeElementos, 'elemento1', 'elemento2')




















