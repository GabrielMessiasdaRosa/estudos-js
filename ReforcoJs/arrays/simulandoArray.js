// off topic !!!

// como seria a partir de um objeto, gerar um array.

// vamos a simulaçao.

const quaseArray = { 0: "Gabriel", 1: "Juan", 2: "Leonardo", 3: "Mario" };
console.log(quaseArray); // note que a saida é de fato um objeto e nao um array.

// agora vamos criar o metodo tostring

Object.defineProperty(quaseArray, "toString", {
  value: () => Object.values(this),
  enumerable: false,
});
console.log(quaseArray[0]);

const array = ["Rafael", "Leandro", "Henrique"];

console.log(quaseArray.toString)
