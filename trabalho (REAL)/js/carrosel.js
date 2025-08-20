const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')

let idx = 0
let startX = 0
let endX = 0

let interval = setInterval(run, 5000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    const imgWidth = img[0].clientWidth
    imgs.style.transform = `translateX(${-idx * imgWidth}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 5000)
}

/* --- Suporte a Swipe (dedo) --- */
imgs.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX
})

imgs.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX
    let diff = endX - startX

    if (Math.abs(diff) > 50) { // precisa arrastar pelo menos 50px
        if (diff < 0) {
            // deslizou pra esquerda → próxima imagem
            idx++
        } else {
            // deslizou pra direita → imagem anterior
            idx--
        }
        changeImage()
        resetInterval()
    }
})
