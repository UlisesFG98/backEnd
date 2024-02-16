//Filtarar numeros pares

function arrayPar(arr) {
    const nuevoArray = []

    arr.forEach(elemento => {
        if ( elemento % 2 === 0) {
            nuevoArray.push(elemento)
        }
    })

    return nuevoArray
}

//const arrayOriginal = [11, 12, 13, 14]
//const arrayNuevo = arrayPar(arrayOriginal)
//console.log(arrayNuevo)
let arv = process.argv.slice(2)
console.log(arrayPar(arv))

