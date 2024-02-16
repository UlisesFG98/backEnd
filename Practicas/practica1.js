//Duplicar elementos

function duplicarArray(arr) {
    let nuevoArray = []

    arr.forEach(elemento => {
        nuevoArray.push(elemento * 2)
    })

    return nuevoArray
}

let arv = process.argv.slice(2)
let arrayNuevo = duplicarArray(arv)
console.log(arrayNuevo)