// na versao do ES6, foi introduzido um novo tipo de funçao que é a funçao Arrow. 
// tem 2 principais objetivos : 
// 1 ser mais curta, com sintaxe mais reduzida. 
// 2 Outro ponto forte é o fato de ter um "this" associado no contexto no qual a funçao foi escrita

// vamos focar na sintaxe reduzida da Arrow function e recaptular o que ja foi aprendido. 

// uma funçao simples 
let dobro = function (a) {
    return 2 * a;
}

// se reescrevermos essa funçao com arrow, fica assim. 

// a funçao arrow sempre é uma funçao anonima, se quisermos usar essa arrow function depois, temos que armazenar
// ela em uma variavel ou constante. 
const triplo = (a) => {
    return 3 * a
}
console.log(triplo(2))

// com arrow func podemos reduzir mais um pouco. 
// se tivermos um unico parametro, que é o nosso caso, podemos tirar os parenteses do paramentro
dobro = a => { 
    return 2 * a;
}

// podemos reduzir ainda mais
// quando temos um unico objetivo para a funçao, podemos deixar o retorno implicito, excluindo a nesce-
// cidade de um corpo na funçao. Basta retirar as Chaves " {} "
// a sintaxe fica assim. 
dobro = a => 2 * a // return implicito
// é bem comum usarmos esse tipo de sintaxe quando a funçao só executa um trabalho e ja retorna o resultado
// para o parametro;

// no dia a dia fazemos funçoes tao especialistas e pequenas que fazem coisas interessantes. Assim, podemos 
// usar arrow functions sem mesmo definir um corpo e isso te ajuda a ter um codigo mais funcional, fazendo 
// composiçoes de funçoes e te força a ter fuçoes especificas e muito reutilizadas 

// outro exemplo 

let hello = function ({/* sem parametros */}){
    return "Ola"
}

// podemos refatorar essa funçao para uma arrow function com retorno implicito 

hello = () => "Ola"
// aqui temos o mesmo resultado. porem com uma sintaxe mais enxuta. 



// agora vamos trabalhar o conceito de que o this, dentro da arrow func, é um this fixo, baseado no contexto no qual 
// a funçao foi escrita e nao é influenciado o valor do this. 

// exemplo. 

const Pessoa = () => {
    this.idade = 0
    setInterval(()=>{
        this.idade++ // dentro deste contexto lexico o this nao varia, nao é nescessario bind
        console.log(this.idade)
    }, 10000)
}
new Pessoa

// %% keep learning %% //