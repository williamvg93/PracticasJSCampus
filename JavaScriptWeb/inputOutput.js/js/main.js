/* -------------------------------------------- */
/* ------------- Tipos de Datos --------------- */
/* -------------------------------------------- */

let num = 1;
let fullName = "William";
let isActivate = true;
let id = 514654646846464646848668646n;
const listName = ["carlos", "william", "juan"]
const undefinedVar = undefined

console.log(`el dato : (${num}) es de tipo: "${typeof num}" ` )
console.log(`el dato : (${fullName}) es de tipo: "${typeof fullName}" ` )
console.log(`el dato : (${isActivate}) es de tipo: "${typeof isActivate}" ` )
console.log(`el dato : (${id}) es de tipo: "${typeof id}" ` )
console.log(`el dato : (${listName}) es de tipo: "${typeof listName}" ` )
console.log(`el dato : (${undefinedVar}) es de tipo: "${typeof undefinedVar}" ` )

let parrafo = document.getElementById('mensaje')
parrafo.innerHTML = 'Esto es un cambio'

const elem2 = document.querySelector("#mensaje");

console.log(document.getElementById("mensaje"))
console.log(parrafo)
console.log(elem2)