/*   Clase 24/agosto/23 Promises(promesas)    */

console.log('Hola1')

setTimeout(() => {
    console.log('Hola2')
}, 1000)

/* Repetir un codigo función cada cierto intervalo */
setInterval(() => {
    console.log('Hola3')
}, 1000);

let promise = new Promise((resolve, reject) => {
    resolve('todo ok, continue...')
})

promise.then(res => {
    console.log(res)
}).catch(res => {
    console.error(res)
})

let obtener = async(url) => {
    let peticion = await((fetch(`${url}.json`)))
    console.log(peticion)
}

obtener("config.json")

/* Probar despues */
const url = "config"

const ConstruirHead = async () => await (await fetch(`${url}.json`)).json().then(res=>res)
 

console.log(ConstruirHead());