const profils = document.getElementById("profils")
const loader = document.getElementById("loader")
const login = document.getElementById("login")
let cats
let printProfil = []

profils.style.display = "none"
loader.style.display = "none"



document.getElementById("formLogin").addEventListener('submit', function (event) {
  event.preventDefault()
    login.style.display = "none"
    loader.style.display = "block"
    fetch("http://4graphik.com/lab/tincat/api/cats/")
        .then(res => res.json())
        .then(res => {
            profils.style.display = "block"
            loader.style.display = "none"
            cats = res
            showProfil()
        })
})

document.getElementById('like').addEventListener('click', function () {
    showProfil()
})
document.getElementById('run').addEventListener('click', function () {
    showProfil()
})

function showProfil() {
    let randomNumber = Math.floor(Math.random() * 11)
    let include = false

    if (printProfil.length < cats.length) {
        if (!printProfil.includes(randomNumber)) {
            printProfil.push(randomNumber)
            include = true;
        }else {
            while (printProfil.includes(randomNumber) && include == false) {
                randomNumber = Math.floor(Math.random() * cats.length)
                if (!printProfil.includes(randomNumber)) {
                    printProfil.push(randomNumber)
                    include = true;
                }
            }
        }

    }else {
        document.getElementById('card').innerHTML = `<h2> Il n'y a plus de profils </h2>`
    }



                if (include ===  true) {
                let div = document.createElement('div')
                div.classList.add('imgProfil')
                div.style.backgroundImage = `url(${cats[randomNumber].path})`
                let h2 = document.createElement('h2')
                h2.innerHTML = cats[randomNumber].name
                document.getElementById('card').innerHTML = ""
                document.getElementById('card').append(div)
                document.getElementById('card').append(h2)
            }



}
