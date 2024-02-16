function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false
      }
    }
    return numero !== 1
}

console.log(esPrimo(proces.argv[2])) // true
console.log(esPrimo(3)) // true
console.log(esPrimo(4)) // false
console.log(esPrimo(17)) // true
console.log(esPrimo(100)) // false