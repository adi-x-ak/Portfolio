const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const l1 = document.getElementById("l1")
const ll1 = document.getElementById('ll1')
l1.addEventListener('click',e => {
    lightbox.classList.add('active')
    var div1 = document.createElement('div')
    var div11 = document.createElement('div')
    div11 = ll1
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    div1.appendChild(div11)
    lightbox.appendChild(div1)
})

const l2 = document.getElementById("l2")
const ll2 = document.getElementById('ll2')
l2.addEventListener('click',e => {
    lightbox.classList.add('active')
    var div2 = document.createElement('div')
    var div22 = document.createElement('div')
    div22 = ll2
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    div2.appendChild(div22)
    lightbox.appendChild(div2)
})
const l3 = document.getElementById("l3")
const ll3 = document.getElementById('ll3')
l3.addEventListener('click',e => {
    lightbox.classList.add('active')
    var div3 = document.createElement('div')
    var div33 = document.createElement('div')
    div33 = ll3
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    div3.appendChild(div33)
    lightbox.appendChild(div3)
})
const l4 = document.getElementById("l4")
const ll4 = document.getElementById('ll4')
l4.addEventListener('click',e => {
    lightbox.classList.add('active')
    var div4 = document.createElement('div')
    var div44 = document.createElement('div')
    div44 = ll4
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    div4.appendChild(div44)
    lightbox.appendChild(div4)
})
const l5 = document.getElementById("l5")
const ll5 = document.getElementById('ll5')
l5.addEventListener('click',e => {
    lightbox.classList.add('active')
    var div5 = document.createElement('div')
    var div55 = document.createElement('div')
    div55 = ll5
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    div5.appendChild(div55)
    lightbox.appendChild(div5)
})
const l6 = document.getElementById("l6")
const ll6 = document.getElementById('ll6')
l6.addEventListener('click',e => {
    lightbox.classList.add('active')
    var div6 = document.createElement('div')
    var div66 = document.createElement('div')
    div66 = ll6
    while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
    }
    div6.appendChild(div66)
    lightbox.appendChild(div6)
})




lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
  })

  

