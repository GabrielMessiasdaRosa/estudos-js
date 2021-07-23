// alguns metodos sao mais simples, metodos especificos ou detalhados serao explicados separadamente.

// considere.

const pilotos = ["Vettel", "Senna", "Hamilton", "Massa"]; // esta constante nao pode ter valores sendo atribuidos diretamente por ser uma const

// alguns metodos simples .

pilotos.pop(); // massa quebrou o carro de novo ... ou seja, o metodo pop() remove o ultimo elemento de um array.
console.log(pilotos);

pilotos.push("Raikkonen"); // sabemos que o push() adiciona um novo elemento na ultima posicao de um array
console.log(pilotos);

pilotos.shift(); // semelhante ao pop, a diferença é que ele remove o primeiro elemento da lista, ao inves do ultimo.
console.log(pilotos);

pilotos.unshift("Alonso"); // adiciona elementos no inicio da lista,
console.log(pilotos);


// o splice pode adiciona, remover ou adicionar e remover elementos no array. 

//adiconar
pilotos.splice(2,0, 'Bottas', 'Massa') // Felipe Massa arrumou o carro! 
console.log(pilotos)

// remover
pilotos.splice(3, 1) // Massa quebrou o carro de novo ! 
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // esse metodo retorna um novo array ! ele pega o novo array a partir do indice que for passado no parametro.
console.log(algunsPilotos)
// basicamente o slice pega uma parte do array.

const algunsPilotos2 = pilotos.slice(1, 4) // aqui pegamos os indices 1,2 e 3, o quarto nao é considerado pois é onde nos informamos nos parametros
// para ele parar de despedaçar quando chegar naquele elemento.
console.log(algunsPilotos2)
