const url = "config"



const construirHead = async () => {
    let peticion = await fetch(`${url}.json`)
    let peticionJson = await peticion.json()
    let domElement = document.querySelector('head')
    domElement.insertAdjacentHTML('beforeend', /* html */`
        ${peticionJson.main.head.title}
        ${peticionJson.main.head.icon}
    `)
}


const construirHeader = async () => {
    let peticion = await fetch(`${url}.json`)
    let peticionJson = await peticion.json()
    let domElement = document.querySelector('#logoHeader')
    domElement.insertAdjacentHTML('beforeend', /* html */`
        ${peticionJson.main.header.logo}
    `)
}

const construirMainHead = async () => {
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

const construirCards = async () => {
    let peticion = await fetch(`${url}.json`)
    let peticionJson = await peticion.json()
    let domElement = document.querySelector('#cardsCont')
    domElement.insertAdjacentHTML('beforeend', /* html */`
        ${peticionJson.main.sectionCard.cards.map((value) => /* html */ `
            <div class="col mb-5">
                <div class= "card mb-5 shadow-sm ${value.cardBor}">
                    <div class="card-header py-3 ${value.cardHeadBor}">
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
                    <button type="button" class="w-100 btn btn-lg ${value.btnStyle}">Get started </button>
                </div>
            </div>
        `).join(" ")
        }
    `)
}

const construirArti = async () => {
    let peticion = await fetch(`${url}.json`)
    let peticionJson = await peticion.json()
    let domElement = document.querySelector('#artiCont')
    domElement.insertAdjacentHTML('beforeend', /* html */ `
        <h2 class="display-6 text-center my-5">
            Compare plans
            ${peticionJson.main.sectionArti.title}
        </h2>
        <p class="my-5 text-center">
            ${peticionJson.main.sectionArti.parrContent}
        </p>
    `)
}

const construirTable = async () => {
    let peticion = await fetch(`${url}.json`)
    let peticionJson = await peticion.json()
    let domElement = document.querySelector('#mainTable')
    domElement.insertAdjacentHTML('beforeend', /* html */`
        <table class="table text-center align-middle">
            <thead class="table text-center align-middle">
                <tr class="align-middle">
                ${peticionJson.main.sectionTable.tableHead.map((head) => /* html */`
                <th style="width: ${head.width} ;">${head.title}</th>                
                `).join(" ")}
                </tr>
            </thead>
            <tbody>
            ${peticionJson.main.sectionTable.tableBody.map((body) => /* html */`
                <tr>
                    <th scope="row" class="text-center">${body.title}</th>
                    <td>${body.td1}</td>
                    <td>${body.td2}</td>
                    <td>${body.td3}</td>
                    <td>${body.td4}</td>
                </tr>
            `).join(" ")}
            </tbody>
        </table>
    `)
}

const construirFooter = async () => {
    let peticion = await fetch(`${url}.json`)
    let peticionJson = await peticion.json()
    let domElement = document.querySelector('#contFooter')
    console.log(peticionJson);
    domElement.insertAdjacentHTML('beforeend', /* html */`
        <div class="row">
            <div class="row my-3">
                <div class="col-md-3 ms-2 text-left">
                    <p class="text-left">${peticionJson.main.footer.infoCopy}</p>
                </div>
            </div>
            ${peticionJson.main.footer.infoCardFoo.map((footerInfo) => /* html */`
            <div class="col-md-2 ms-5">
                <ul class="list-unstyled text-small">
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#"> ${footerInfo.infoFoo1} </a></li>
                    <li class="mb-1"><a class="link-secondary text-decoration-none" href="#"> ${footerInfo.infoFoo2}  </a></li>
                </ul>
            </div>
                `).join(" ")}
            <div class="row my-3">
                <div class="col-md-3 ms-2 text-left">
                  <p>${peticionJson.main.footer.infoEnd}</p>
                </div>
            </div>
        </div>
    `)
}



construirHead()
construirHeader()
construirMainHead()
construirCards()
construirArti()
construirTable()
construirFooter()