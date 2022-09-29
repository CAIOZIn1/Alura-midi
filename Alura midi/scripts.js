function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if (elemento && elemento.localName === "audio") {
        elemento.play()
    }
    else {
        alert('Elemento inválido.')
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (EventCounts) {
        if (EventCounts.code == 'Enter' || EventCounts.code == 'Space') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}

