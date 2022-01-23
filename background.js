function random(max){
    return Math.floor(Math.random() * max)
}

const img = ["0.jpg", "1.jpg", "2.jpg"]

const randomImg = random(img.length)

const bgimg = document.createElement("img")
bgimg.src = `img/${randomImg}.jpg`
bgimg.classList.add("cover")
document.body.appendChild(bgimg)
