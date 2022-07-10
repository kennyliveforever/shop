class Item {
    constructor(id, brand, model, color, type, year, photo, bit) {
        this.id = id
        this.brand = brand
        this.model = model
        this.color = color
        this.type = type
        this.year = year
        this.photo = photo
        this.bit = bit
    }
}

let path = 'img/'

let megaDrive = new Item(0,'Sega', 'Mega Drive', 'black', 'home', 1988, 'md.jpg', 16)
let ps2 = new Item(1,'Sony', 'PlayStation 2', 'black', 'home', 2000, 'ps2.jpeg', 64)
let nes = new Item(2, 'Nintendo', 'NES', 'gray', 'home', 1983, 'nes.jpg', 8)
let dc = new Item(3, 'Sega', 'Dreamcast', 'white', 'home',1998, 'dc.jpg', 32)
let psp = new Item(4, 'Sony', 'PSP', 'black', 'portable', 2004, 'psp.jpg', 32)
let ds = new Item(5, 'Nintendo', '3DS', 'black', 'portable', 2011, '3ds.png', 32)
let snes = new Item(6, 'Nintendo', 'SNES', 'gray', 'home', 1990, 'snes.jpg', 16)
let gb = new Item(7, 'Nintendo', 'GameBoy', 'gray', 'portable', 1989, 'gb.jpg', 8)
let one = new Item(8, 'Sony', 'PS One', 'white', 'home', 1997, 'psone.jpg', 32)
let gg = new Item(9, 'Sega', 'Game Gear', 'black', 'portable',1990, 'gg.jpg', 16)
let strn = new Item(10, 'Sega', 'Saturn', 'white', 'home',1994, 'saturn.webp', 32)
let go = new Item(11, 'Sony', 'PSP Go', 'white', 'portable', 2009, 'go.jpg', 32)

let items = [megaDrive, ps2, nes, dc, psp, ds, snes, gb, one, gg, strn, go]

let array = items

function loadItems(array) {
    let grid = document.querySelector('.grid')
    let id = 0
    for (let i = 0; i < array.length; i++) {
        grid.appendChild(document.createElement('div')).className = 'item'
    }
    let itemSet = document.querySelectorAll('.item')
    for (let i of itemSet) {
        let id = array[Array.from(itemSet).indexOf(i)].id
        i.setAttribute('id', `${id}`)
        i.appendChild(document.createElement('div')).className = 'photo'
        i.appendChild(document.createElement('div')).className = 'name'
        i.appendChild(document.createElement('div')).className = 'type'
        i.appendChild(document.createElement('div')).className = 'color'
        i.appendChild(document.createElement('div')).className = 'bit'
        i.appendChild(document.createElement('div')).className = 'year'
    }

    let names = document.querySelectorAll('.name')
    let types = document.querySelectorAll('.type')
    let years = document.querySelectorAll('.year')
    let colors = document.querySelectorAll('.color')
    let photos = document.querySelectorAll('.photo')
    let bit = document.querySelectorAll('.bit')

    for (let i of names) {
        i.innerHTML = (`${array.find(e => e.id == i.parentNode.getAttribute('id')).brand + ' ' 
        + array.find(e => e.id == i.parentNode.getAttribute('id')).model}`)
    }

    for (let i of types) {
        i.innerHTML = ('Type: ' + `${array.find(e => e.id == i.parentNode.getAttribute('id')).type}`)
    }

    for (let i of years) {
        i.innerHTML = ('Release year: ' + `${array.find(e => e.id == i.parentNode.getAttribute('id')).year}`)
    }

    for (let i of colors) {
        i.style.backgroundColor = (`${array.find(e => e.id == i.parentNode.getAttribute('id')).color}`)
    }

    for (let i of photos) {
        i.style.backgroundImage = `url(` + `${path}` + `${array.find(e => e.id == i.parentNode.getAttribute('id')).photo}` + ')'
    }

    for (let i of bit) {
        i.innerHTML = ('Architecture: ' + `${array.find(e => e.id == i.parentNode.getAttribute('id')).bit}` + '-Bit')
    }
}

function clear() {
    let grid = document.querySelector('.grid')
    let itemSet = document.querySelectorAll('.item')
    for (let i of itemSet) {
        grid.removeChild(i)
    }
}

window.onload = function () {
    loadItems(array)
}

function spoiler(open) {

}

function filterColor(...color) {
    array = array.filter(e => e.color == color[0] || e.color == color[1] || e.color == color[2])
    console.log(array)
    clear()
    loadItems(array)
}

function brandSort(...brand) {
    array = array.filter(e => e.brand == brand[0] || e.brand == brand[1] || e.brand == brand[2])
    clear()
    loadItems(array)
}

function yearSort() {
   array = array.sort((a, b) => a.year - b.year)
    clear()
    loadItems(array)
}




