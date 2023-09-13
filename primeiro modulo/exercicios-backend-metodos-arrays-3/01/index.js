
//a

// const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

// numeros.sort((first, second)=>{
//   return first - second
// })

// console.log(numeros)


//b
// const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]
// numeros.sort((first, second)=>{
//   return second - first 
// })

// console.log(numeros)


//c

// const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2]

// numeros.sort()
// console.log(numeros)

//d

// const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

// frutas.sort((first, second) =>{
//   return first.localeCompare(second)
// })

// console.log(frutas)


//e

// const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

// frutas.sort((first, second) =>{
//   return second.localeCompare(first)
// })

// console.log(frutas)

//f
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]

frutas.sort((first, second) =>{
  let tamanhoA = first.length
  let tamanhoB = second.length
  return tamanhoA - tamanhoB
})

console.log(frutas)

