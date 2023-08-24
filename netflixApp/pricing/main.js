const url = "config"

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
}


const ConstruirCards = async () => {
    let peticion = await fetch(`${url}.json`)
    let peticionJson = await peticion.json()
    let domElement = document.querySelector('#cardsCont')
    domElement.insertAdjacentHTML('beforeend', /* html */`
        ${peticionJson.main.sectionCard.cards.map((value) => /* html */ `
            <div class="col">
                <div class= "${value.cardBor}">
                    <div class="${value.cardHeadBor}">
                        <h4 class="my-0 fw-normal">${value.tituloCard}</h4>
                    </div>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">${value.price}</h1>
                    <ul class="list-unstyled mt-3 mb-4">
                        <li>${value.infoCard1}</li>
                        <li>${value.infoCard2}</li>
                        <li>${value.infoCard3}</li>
                        <li>${value.infoCard4}</li>
                    </ul>
                    <button type="button" class="${value.btnStyle}">Get started </button>
                </div>
            </div>
        `).join(" ")
        }
    `)
    console.log(peticionJson.main.sectionCard);
}


 
ConstruirHead()
ConstruirCards()