const divisor = (a, b) => (1, 1);
const array = [1, 2, 3, 4, 5];
const primeiro = array[0];
const ultimo = array[array.length - 1];

console.log(primeiro);
console.log(ultimo);

const adiciona = (...numeros) => numeros.reduce((acc, num) => acc + num, 0);
console.log(adiciona(0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 994));

module.exports = { getPrimeiro, getUltimo };
module.exports = { divisor };
module.exports = { adiciona };