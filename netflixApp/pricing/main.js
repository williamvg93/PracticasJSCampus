const url = "config"


/*     let peticion = await fetch(`${url}.json`)
    let peticionJson = await peticion.json()
    let domElement = document.querySelector('#contTitle')
    console.log(peticionJson.main.sectionHead.titulo); */

const ConstruirHead = async () => {
    let peticion = await fetch(`${url}.json`)
    let peticionJson = await peticion.json()
    let domElement = document.querySelector('#contTitle')
    domElement.insertAdjacentHTML('beforeend', /* html */`
        <h1 class="display-6 fw-normal text-body-emphasis">${peticionJson.main.sectionHead.titulo}</h1>
        ${peticionJson.main.sectionHead.parrafo.map((value) => /* html */`
                <img src=" ${value.imagen} " class="me-2" style="width: 2vh; filter: invert(100%) sepia(0%) saturate(1%) hue-rotate(72deg) brightness(104%) contrast(101%);" alt=""> ${value.texto} <br>
            `).join(" ")
        }
    `)
    console.log(peticionJson.main.sectionHead.titulo);

}
 

ConstruirHead()