const imgs = document.getElementById('imgs')
const img = document.querySelectorAll('#imgs img')

let idx = 0
let startX = 0
let endX = 0

let interval = setInterval(run, 2000)

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

    const screenWidth = window.innerWidth
    let deslocamento

    if (screenWidth < 480) {
        // Mobile
        deslocamento = 320
    } else if (screenWidth < 768) {
        // Tablet
        deslocamento = 500
    } else if (screenWidth < 1080) {
        // Totem
        deslocamento = 700
    } else {
        // Desktop
        deslocamento = img[0].clientWidth
    }

    imgs.style.transform = `translateX(${-idx * deslocamento}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

/* --- Suporte a Swipe --- */
imgs.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX
})

imgs.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX
    let diff = endX - startX

    if (Math.abs(diff) > 50) {
        idx += diff < 0 ? 1 : -1
        changeImage()
        resetInterval()
    }
})

/* --- Recalcular posição ao redimensionar --- */
window.addEventListener("resize", changeImage)

/* --- Corrige o posicionamento na primeira carga --- */
changeImage()
