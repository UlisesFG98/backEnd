//Encontrar el numero mayor

function arrayMayor(arr) {
    return Math.max(...arr)
}

let arv = process.argv.slice(2)
console.log(arrayMayor(arv))