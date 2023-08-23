/* -------------------------------------------- */
/* ------------- Tipos de Datos --------------- */
/* -------------------------------------------- */

let newArray = ["miguel", "william", "natalia"]
let newDic = {
    nombre : 'william',
    apellido : 'villamizar'
}

function saludar(name1, name2, name3) {
    console.log(`Hola ${name1}`)
    console.log(`Hola ${name2}`)
    console.log(`Hola ${name3}`)
}

function saludarDic({nombre, apellido}) {
    console.log(`Bienvenido ${nombre} ${apellido}`)
}

/* Desestructurar */
saludar(...newArray)
saludarDic({...newDic})