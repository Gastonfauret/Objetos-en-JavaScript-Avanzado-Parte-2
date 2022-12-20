/*Ciclo While */

var arreglo = [];
var i = 0;

console.log(arreglo);

while (i < 10) {
    arreglo.push(i);
    i++
}

console.log(arreglo); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var numbers = [2, 3, 4, 5, 6, 8, 9, 34];

while (numbers.length > 4) {
    numbers.pop();
}
console.log(numbers); // [2, 3, 4, 5]

/*Ciclo For */

var miArreglo = [];

for (var i = 0; i < 10; i++) {
    miArreglo.push(i);
}
console.log(miArreglo); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

/*Ciclo For - Numeros Impares */

var arreglo2 = [];

for (var i = 0; i < 10; i += 2) {
    arreglo2.push(i);
}
console.log(arreglo2); // [1, 3, 5, 7, 9]

/*Ciclo For - Hacia atras */

for (var i = 5; i >= 0; i--) {
    console.log(i);
}
// 5, 4, 3, 2, 1, 0

var arreglo3 = [];

for (var i = 10; i > 0; i -= 2) {
    arreglo3.push(i);
}
console.log(arreglo3); // [10, 8, 6, 4, 2]

/*Iterar sobre un Arreglo con un ciclo for*/

var arreglo4 = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i < arreglo4.length; i++) {
    total += arreglo4[i];
}
console.log(total); // 20

/*Otro Ejemplo - Con Strings*/

var lenguajes = ["JS", "Python", "Java", "TS"];

for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toLocaleUpperCase);
}
/*JS
PYTHON
JAVA
TS*/

function contarNumerosPares(arreglo) {
    var total = 0;

    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[0] % 2 == 0) {
            total++
        }
    }
    return total
}

console.log(contarNumerosPares([5, 3, 1])); // 0
console.log(contarNumerosPares([6, 2, 4])); // 3

/*Ciclos For Anidados*/

var arreglo5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (var i = 0; i < arreglo5.length; i++) {
    var arregloAnidado = arreglo5[i]; // Arreglo

    for(var j = 0; j < arregloAnidado.length; j++) {
        console.log(arregloAnidado[j]);  // Elemento
    }
}

/*Ciclos Do...While: Hacer...Mientras*/

var x = 5;

do {
    console.log(x);
    x++;
} while (x < 10);

/*
5
6
7
8
9
*/

/*Siempre se va a ejecutar por lo menos una vez*/

var x = 16;

do {
    console.log(x);
    x++;
} while (x < 10);

// 16
