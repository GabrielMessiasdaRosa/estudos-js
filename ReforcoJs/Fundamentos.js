// ####################### var, let e const ######################### // 
 
// processamento e dados, temos dados que sao processados e geram mais 
// dados. Algoritimos, os dados sao organizados em estruturas de dados. 
// A estrutura e dados nao é o dado em si mas é algo que define as regras que os dados vao seguir, 

var umInteiro = 1; // evitar o uso de var,

let umaString = "Ola mundo"; // usar let no lugar do var. // nao é possivel redeclarar let,
// alguns casos é possivel

// priorize const.
const naoMuda = "const, tecnicamente nao era para ser possivel alterar, em React o state consegue fazer isso. nao sei como, Estudar isso"

{
    // em outras linguagens isso nao acontece, agora estou entendo o conceito de que JS é V1D4 L0K4
    {
      {
        {
          var naoVaiFuncionar = "Vai sim !";
        }
      }
    }
  }// js é meio estranho. mas ja estou acostumando, e ate gostando. Programaçao funcional pae ! 
  
  // vida loka ate onde a function deixa,
  console.log(naoVaiFuncionar);
  //deve-se evitar escopo global, qualquer sobrescrita pode quebrar a aplicaçao;
  
  //entendendo melhor let, var e const
  
  var numeroaleatorio = 1; // tem escopo GLOBAL e FUNÇAO
  {
    let numero = 2; // tem escpo GLOBAL, de FUNÇAO e de BLOCO
    console.log("dentro", numero);
  }
  console.log("Fora", numeroaleatorio);
  
  // usando var em loop
  //eca
  for (var i = 0; i <= 10; i++) {
    console.log(i);
  }
  console.log("i=", i);
  
  const funcs = [];
  for (let index = 0; index < 10; index++) {
    funcs.push(() => {
      console.log(index);
    });
  }
  console.log(funcs);
  funcs[5]();
  funcs[8]();
// ####################### TEMPLATE STRINGS ######################### // 

  // pode acabar ficando um codigo meio "sujo" se usarmos concatenaçoes simples usando "+"
  const nomeAleatorio = "Rebeca"
  const concatenaçao = "Ola" + nomeAleatorio + ". Tenha um otimo dia!"

  // se extrapolarmos demais isso fica feio. 
  // o Template String vai considerar algumas coisas que a string nao pode fazer.
  // nao posso em uma string, quebrar a linha. isso gera um erro no codigo. 
  // ja no Template string eu posso sim quebrar a linha no meio e vai considerar todas as quebras de linhas,
  // espaçoes em branco, TAB's que for colocado dentro da string. Ele tambem pode "INTERPOLAR" 
  //( Converter a variavel dentro do proprio texto)
  // sintaxe da TEMPLATE STRING. 
  // usa-se o back chick( nao sei escrever ) a fomosa Crase ` template string aqui `
  //EXEMPLO: 
  const templateString = `Ola ${nomeAleatorio}.
                          Tenha um otimo dia!`// aqui, a interpolaçao é feita com o &{variavel, objeto, array, 
                          // ou seja la o que for}
  // é possivel interpolar valores e expreçoes
  const interpolandoExpressoes = `1 + 1= ${1 + 1}`
  // interpolaçao com funçoes 
  const toUper = text => text.toUperCase()
  console.log(`Atenção ... ${toUper("CUIDADO")} !!!`)

// ####################### BOOLEAN  ######################### // 


// ####################### TIPAGEM  ######################### // 

// Js tem uma tipagem fraca, sua tipagem dinamica a deixa meio confusa para quem
// vem de fora do mundo js. Com a tipagem dinamica temos uma maior flexibilidade,
// alguns erros podem ocorrer por isso. Deve haver alguma maneira de arrumar isso.

let qualquer = "show de bola" // string. texto livre. nao faz parte do formalismo
// da linguagem;
console.log(qualquer)
console.log(typeof qualquer); // saida, String

qualquer = 5000;
console.log(typeof qualquer)// saida, number


// tips. evitar nomes genericos e siglas. 
let valor = "Valor do que ? em um contexto limitado pode ate fazer sentido, prefira codigos claros a comentarios"
let numero = 1 // numero ? pra que serve isso ? 
let pqp = false // Sigla, Produto Quimico Perigoso // evitar siglas, Prefira nomes longos
// e declarativos do que abreviaçoes e nomes genericos demais.

// Desafio de vida !!!!  >>>>> Ler Clean Code


// ####################### array, objetos ######################### // 

const randomArray = [];

randomArray.push({ objeto: 1 }, false, null, "String");
console.log(randomArray);
 
//randomArray.pop()
//delete randomArray[3] // funciona no contexto de objeto, retira atributo do objeto.
//anotaçoes literais de objetos

const brands = {
  bmw: "bmw",
  ford: "ford",
};
const car = {
  brand: brands.bmw,
  color: "black",
  plate: "",
};

//car.brand = "ford"
car.color = "White";
car.plate = "xxx-1234";

console.log(car);

// ####################### null e undefined ######################### // 

let value;
console.log(value);
//undefined, deixar para a linguagem decidir o que é undefined, Tarefa = tirar do
//defaultProps os undefined's, perguntar se precisa colocar.

value = null;
// auxencia de valor, pode-se usar para zerar o valor de uma variavel.
console.log(value);

//console.log(value.toString()) // erro ! TypeError: Cannot read property 'toString' of null, cuidado
//ao acessar algo com valor null, sempre ter um valor padrao associado

const tShirt = {};

console.log(tShirt.price); // price neste caso é undefined

tShirt.price = 14.99; //simples atribuiçao de valor a um atributo
tShirt.colors = ["White", "Orange", "Grey"]; // objeto aceita bem array's
tShirt.brand = "Dong";
tShirt.materials = [
  {
    cotton: "75%",
  },
  { poliester: "20%" },
];

//array de objeto é MUITA EMOÇÃO! nao dominei ainda estudar mais !

tShirt.materials.push({ nylon: "5%" });
console.log(tShirt);


// ####################### functions & mais objetos ######################### // 

//function é o verbo, ação, executa um processo

function doIt(a, b) {
  //parametros sem tipagem, meio estranho no inicio mas se mostra bem dinamico e agil
  //corpo
  console.log(a + b);
}

const soma = doIt(2, 3);
console.log(soma);

// aqui podemos passar um valor padrao quando o valor nao é passado na chamada da funçao
function hello(saudacao = "Ola") {
  return saudacao;
}

const response = hello();
console.log(response);

//funçao anonima, uma quimera que mistura constante com metodo
const calculaImc = function (peso, altura) {
  const imc = peso / (altura * altura);
  return console.log("seu imc é ", imc.toFixed(1)); // aqui, virgula pode ser usado em concatenaçao
};
calculaImc(80, 1.7);


//arrow function, outra maravilhosa aberraçao
const calculaCircunferencia = (raio) => {
  const circunferencia = 2 * (Math.PI * raio);
  console.log(
    "A circunferencia de um raio de",
    raio,
    " é ",
    circunferencia.toFixed(2)
  );
};
calculaCircunferencia(80);

const alunos = {
  aluno: {
    name: "Gabriel",
    idade: 23,
    materiasCadastradas: {
      biologia: {
        notas: {
          bim1: 8,
        },
      },
      matematica: {
        notas: {
          bim1: 7,
        },
      },
      portugues: {
        notas: {
          bim1: 9,
        },
      },
    },
  },
};

const calculaMedia = (nota1, nota2, nota3) => {
  const media = (nota1 + nota2 + nota3) / 3;
  media >= 7
    ? console.log(
        alunos.aluno.name,
        "sua media é: ",
        media.toFixed(2),
        "\nAPROVADO"
      ) // ternarios sao uma mao na roda, mas deve-se usar com moderaçao,
        // pode acabar ficando meio feio muitos ternarios aninhados
    : console.log(
        alunos.aluno.name,
        "sua media é: ",
        media.toFixed(2),
        "\nREPROVADO"
      );
};

calculaMedia(
  alunos.aluno.materiasCadastradas.biologia.notas.bim1,
  alunos.aluno.materiasCadastradas.matematica.notas.bim1,
  alunos.aluno.materiasCadastradas.portugues.notas.bim1
);

// entendendo ternarios
const pressedOnLikeButton = false; // para testar o ternario mude para false aqui
// o operador ternario é composto por 3 partes

//            1º abaixo: expressao que retorna um bool (verdadeiro || falso)
const liked = pressedOnLikeButton 
  ? //2º : uma especie de if acredito eu
    "retorna status de curtido e altera o state"
  : //3º : uma especie de else acredito eu
    "retorna status de NAO curtido e nao altera o state\n ( acho que poderia ser null tambem)";

// a sensaçao que da é que estamos fazendo literalmente uma pergunta const a = true ? y : n
console.log(liked);

// arrow function com retorno implicito

const subtracao = (a, b) => a - b;
console.log(subtracao(5, 2));

//diminuindo ainda mais a sintaxe de uma funçao,
const imprimirMensagem = (mensagem) => console.log("MENSAGEM>>>", mensagem);

imprimirMensagem(
  " Ola mundo, esta é a menor funçao que eu ja fiz na minha vida, bem loco."
);

// ### variaveis var e let diferencas e particularidades

{
  // em outras linguagens isso nao acontece, agora estou entendo o conceito de que JS é V1D4 L0K4
  {
    {
      {
        var naoVaiFuncionar = "Vai sim !";
      }
    }
  }
}

// vida loka ate onde a function deixa,
console.log(naoVaiFuncionar);
//deve-se evitar escopo global, qualquer sobrescrita pode quebrar a aplicaçao;

//let

var numeroaleatorio = 1; // tem escopo GLOBAL e FUNÇAO
{
  let numero = 2; // tem escpo GLOBAL, de FUNÇAO e de BLOCO
  console.log("dentro", numero);
}
console.log("Fora", numeroaleatorio);

// usando var em loop
//eca
for (var i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("i=", i);

const funcs = [];
for (let index = 0; index < 10; index++) {
  funcs.push(() => {
    console.log(index);
  });
}
console.log(funcs);
funcs[5]();
funcs[8]();

// mais objetos
console.log(typeof Object);
console.log(typeof new Object()); //parece java

// objetos sao grupos aninhados de pares nome/valor
const cliente = { // aqui 'cliente' é o identificador da variavel, a sua atribuiçao se chama valor.
  //definimos uma variavel ou constante no contexto lexico
  // constexto lexico; è o contexto no qual a sua variavel foi definida fisicamente no codigo. 
  // notaçao literal de objetos
  nome: "Gabriel",
  peso: 87,
  altura: 1.7, // aqui temos outro contexto lexico. Definida dentro do contexto do objeto 'cliente' nao atinge
  // o codigo fora do contexto/escopo
  endereco: {
    logradouro: "Rua fulano de tal", // aqui é outro objeto, outra coleçao de par chave/valor
    numero: 773, // aqui é o contexto do atributo endereço. 
  },
};
console.log(cliente);

// map
const numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map((e) => {
  // map é um for com um proposito, se usarmos
  // forEach temos os elementos exatamente como o array original,
  //No .map() temos que passar um callback function. esta funçao pode receber 3
  //paramentros, o proprio valor, um indice e um valor completo
  //o map nao tranforma o array atual, ele gera um novo array com seus conteudos modificados
  //
  return e * 2;
});
console.log(resultado);

console.log(numeros);




//////// PAUSA PRO CAFÉ /////////




// ####################### DESTRUCTURING ######################### // 

// tira algo de uma estrutura, (um objeto, um array),
// recurso ES2015 (ES6)

const cadeira = {
  pernas: 4,
  acento: 1,
  encosto: 1,
  cores: {
    primaria: "azul",
    secundaria: "branco",
  },
};

// comum penssarem usar a notaçao ponto para acessar atributos de um objeto,
console.log(cadeira.cores.primaria);

// uma forma mais simplificada de fazer isso é usando destructuring ( ou seja la como se escreve isso )

// começando simples
// destructuring com chaves extrai de um objeto, por exemplo, suas propriedades
const { pernas, encosto } = cadeira;
console.log("Uma cadeira tem ", pernas, "pernas e ", encosto, "encosto");

// com destructuring, ao que parece, passa para uma variavel uma propriedade, valor, etc
// podemos renomear estas "variaveis" // nao entendi direito como funciona ainda

const { pernas: pernocas, encosto: minhaCunhada } = cadeira;
console.log(pernocas, minhaCunhada); 
// note que neste caso o valor nao se altera, apenas renomeamos a propriedade, pernocas continua tendo o valor de pernas
//, e com o encosto acontece o mesmo (odeio minha cunhada)

// Fazendo testo com atributos que nao existem dentro do objeto.

//const {material, preco} = cadeira

//console.log(material, preco)

// obviamente retornara "undefined", variaveis declaradas mas sem valor atribuido. logo, elas existem. Podemos fazer um testo curiosos

const { materiaPrima = "madeira", preco = 59 } = cadeira;
console.log(cadeira, materiaPrima, preco);

//com notaçao ponto ate pode dar certo, mas se temos objetos dentro de objetos fica muito grande referenciar
//pela notaçao ponto
console.log(alunos.aluno.materiasCadastradas.biologia.notas.bim1);
console.log(alunos.aluno.materiasCadastradas.matematica.notas.bim1);
console.log(alunos.aluno.materiasCadastradas.portugues.notas.bim1);
// estas linhas podem ser desestruturadas apenas uma vez, assim podemos armazenar o valor de um atributo do objeto,
// em uma variavel podendo ser usada de forma mais simplificada no futuro, evitando codigos extenos assim:
const { bim1: notaBiologia } = alunos.aluno.materiasCadastradas.biologia.notas;
const { bim1: notaMatematica } = alunos.aluno.materiasCadastradas.matematica.notas;
const { bim1: notaPortugues } = alunos.aluno.materiasCadastradas.portugues.notas;
console.log(
  "Suas notas no primeiro bimestre ",
  "\nBiologia:",
  notaBiologia.toFixed(2),
  "\nMatematica:",
  notaMatematica.toFixed(2),
  "\nPortugues:",
  notaPortugues.toFixed(2)
);
calculaMedia(notaBiologia, notaMatematica, notaPortugues);

// com notaçao ponto teriamos algo como >>> alunos.aluno.materiasCadastradas.biologia.notas.bim1 <<<
//, e teriamos que ficar repetindo esta linha enorme no codigo, o que nao é uma boa pratica
// quando usamos destructing podemos tirar de dentro de uma estrutura seus atributos. Podemos armazenar
// o valor do "caminho da orientaçao" em uma variavel, podendo-se ser reaproveitada.

// Acredito que se seguirmos a logica das funçoes, devem existir maneiras mais simples de seguir esta logica.
// preciso aprender mais sobre isso


// ### MAIS DESTRUCTING's desta vez com array's

// o exemplo mais basico possivel 
const [dezena] = [10]
console.log(dezena)
// podemos tambem marmazenar mais variaveis e atribui-las 
// no caso abaixo, os valores serao atribuidos as variaveis de acordo com sua ordem e posiçao no array, exemplo.

const [duzia,duasDuzias, tresDezenas, quatroDezenas, cincoDezenas = 50 ] = [12,24,30]
console.log(duzia,duasDuzias,tresDezenas, quatroDezenas, cincoDezenas)


/// ### MAIS DESTRICTING's, usando no ambito de uma function 

const senhaAleatoria = ({minimo = 1000, maximo = 9999 }) => {
  const senha = Math.random() * (maximo - minimo) + minimo
  return Math.floor(senha)

} 

//sintaxes possiveis com destricturing 
//1 // aqui ele executa a funçao com seus valores padroes, caso algum parametro/objeto ou seja la o 
//que isso for, nao tem o valor pradrao o resultado é NaN
console.log(senhaAleatoria({}))

//2 // podemos definir um objeto novo com atributos de mesmo nome e usar a funçao a nosso favor

const senhaLimitada = {minimo:5000, maximo:6000}
console.log(senhaAleatoria(senhaLimitada))

const senhaLimitadissima = { minimo: 1000, maximo: 1200}
console.log(senhaAleatoria(senhaLimitadissima))

//3 outra possibilidade é passar apenas um valor 

const senhaApartirDe = {minimo: 9900}//poderia ser o contrario 
console.log(senhaAleatoria(senhaApartirDe))
//mesmo vale para todos os parametros em quaisquer posiçao, bem flexivel

/// ###### DESTRUCTING, usando array dentro dos parametros de uma funçao; 

const numeroSecreto = ([min=0, max = 1000]) => {
  if (min > max ) [min,max] = [max, min]
  const numero = Math.random() * (max - min) + min
  return Math.floor(numero)
}
console.log(numeroSecreto([50,20]))

// operadores aritimeticos, sempre bom recapitular, 

const [a,b,c,d] = [3,6,9,12]
const someIsto = a + b + c + d
console.log(someIsto)

//sintaxe postFix
// > g++

// sintaxe preFix
// > ++g

// sintaxe infix
// ope1 + ope2

// operador unario, que opera em cima de um unico operando
// -g

const opSoma = a + b + c + d
const opSubtracao = d - b
const opMultiplicacao = a * b
const opDivisao = c / a
const opModulo = a % 2 // resto

console.log("Operadores >$ ", opSoma,opSubtracao, opMultiplicacao, opDivisao)

// operadores relacionais, tambem binarios, Sempre bom relembrar, nada de outro planeta, coisa simples 
// js é uma linguagem fracamente tipada, tornando algumas coisas diferetentes em relaçao opradores relacionais
// na hora de comparar, temos que saber se queremos comparar os valores ou os valores e os tipos, existe uma diferença bem grande 

// bateria de testes 

console.log('1º->', '1' == 1) // operador binario, aqui comparamos apenas o valor, nao nos importamos com 
// o tipo. resultado TRUE


//priorizar este >
console.log("2º->", '2' === 2) // operador binario, aqui comparamos valor e tipo, '1' é uma string e 1 é um int,
// se sao tipos e ou valores diferentes o resultado é FALSE

console.log("3º->", '3' != 3) // mesmo acontece quando comparamos diferenças, aqui int 3 nao é diferente de String '3'
// resultado FALSE, sao iguais

//priorizar este >
console.log("4º->", '4' !== 4) // mesma coisa, '4' É diferentede int 4, entao resultado TRUE, sao diferentes;



// operadores logicos. 

const compras = ( job1, job2) => {
  //operadores de curto circuito 
  const comprarSorvete = job1 || job2 
  const comprarTv50 = job1 && job2
  //const comprarTv32 = !!(job1 ^ job2) // operador bitwise xor ou exclusivo, esse eu nao via faz tempo
  const comprarTv32 = job1 != job2
  const manterSaudavel = !comprarSorvete //operador UNARIO! 
  return {comprarSorvete,
     comprarTv50,
      comprarTv32,
       manterSaudavel} // desta forma podemos retornar mais constantes ao mesmo tempo.
  // jogando tudo dentro de um objeto  
  // a maneira antiga de se fazer isso era assim : 
//  return {comprarSorvete: comprarSorvete,
//          comprarTv50:comprarTv50,
//          comprarTv32:comprarTv32,
//         manterSaudavel:manterSaudavel}
//
//acaba ficando redundante e nem é mais permitido fazer, a ide grita erro. 

}
console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(true, false))
console.log(compras(false, false))


// ## MAIS SOBRE UNARIOS 

{
  let numero1 = 1 
  let numero2 = 2
  numero1++
  console.log(numero1)
  --numero1
  console.log(++numero1 === numero2--) // resultado true, parece gambiarra, coisa horrivel ,nao gostei.
}


/// ### TERNARIOS !!

const ternariando = (event) => event === true ? "verdadeiro" : "false" // este é um operador ternario 
console.log(ternariando(false))


// uma maneira de fugir do escopo global é usar const e objetos 

let pessoa = 
{
 nome: "Gabriel",
 fala: function() { return `Ola mundo, me chamo ${this.nome}`}/// aqui usamos teamplate string this. 
 //Esta no escopo deste objeto "pessoa{}"
}

console.log(pessoa.fala())

// ### FUNÇOES ! 

// first class object 
// higher order function 

// Declaraçao de funçao de forma literal 

function funcaoLiteral (parametro) { //pode receber parametros e pode retornar um valor 

  return parametro// retorno é opcional, caso nao haja retorno, a funçao retorna undefined
  
}

// recapitulando, podemos armazenar funçoes em uma variavel 

const funcaoNaVariavel = function () { 
  // aqui temos uma funcao anonima, atribuimos ela para uma const,
  // podemos utilizar essa funçao, chamando o nome da constante ou podemos executala apenas adiconando um ( ),
  // exemplos > funcaoNaVariavel e funcaoNaVariavel( ) ( nada de tao extraordinario )

}

// outro exemplo de uso de funçoes. 

function funcaoDentroDeOuraFuncao(a,b) {
  return (c) => {
    console.log(a+b+c)
  }
}


funcaoDentroDeOuraFuncao(1,1)(2)






// #######################  ######################### // 




// #######################  ######################### // 