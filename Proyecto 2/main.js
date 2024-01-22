const productsList = [
  {
    name: 'Xiaomi 13T Pro',
    description: 'La esencia maestra',
    price: 799,
    stars: 4,
    reviews: 250,
    series: 'Xiaomi',
    image:
      'https://i05.appmifile.com/744_item_es/14/09/2023/260f2ae9938a345a1467f5d9392d100f.png?f=webp&thumb=1&w=500&q=85'
  },
  {
    name: 'Xiaomi 13T ',
    description: 'MediaTek Dimensity 8200-Ultra',
    price: 499,
    stars: 4,
    reviews: 351,
    series: 'Xiaomi',
    image:
      'https://i05.appmifile.com/533_item_es/14/09/2023/939042dc075a6913fa2ae6104ff01a4b.png?f=webp&thumb=1&w=500&q=85'
  },
  {
    name: 'Xiaomi 13 Pro ',
    description: 'Potencia total: Snapdragon® 8 Gen 2',
    price: 899,
    stars: 3,
    reviews: 107,
    series: 'Xiaomi',
    image:
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1675394664.62421710.png?f=webp&thumb=1&w=500&q=85'
  },
  {
    name: 'Xiaomi 13',
    description: 'Sistema de cámara profesional de Leica',
    price: 999,
    stars: 4,
    reviews: 621,
    series: 'Classic',
    image:
      'https://i05.appmifile.com/536_operator_es/12/06/2023/852642e40465574ac21c3200179782f3.png?f=webp&thumb=1&w=500&q=85'
  },
  {
    name: 'Xiaomi 13 Lite',
    description: 'Snapdragon 7 Gen 1',
    price: 479,
    stars: 5,
    reviews: 91,
    series: 'Classic',
    image:
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1655459507.24461386.png?f=webp&thumb=1&w=500&q=85'
  },
  {
    name: 'Redmi Note 12 Pro+ 5G',
    description: 'Cámara de 200 MP líder con OIS',
    price: 369,
    stars: 5,
    reviews: 901,
    series: 'Redmi',
    image:
      'https://i05.appmifile.com/827_operator_es/24/03/2023/2e3fd836f47f4587ad939560b7a6034d.png?f=webp&thumb=1&w=500&q=85'
  },
  {
    name: 'Redmi Note 12 5G',
    description: '6 nm Snapdragon® 4 Gen 1',
    price: 691,
    stars: 3,
    reviews: 301,
    series: 'Redmi',
    image:
      'https://i05.appmifile.com/346_operator_es/24/03/2023/01b05fc5d8239a6375988abc25d0a399.png?f=webp&thumb=1&w=500&q=85'
  },
  {
    name: 'Redmi Note 12',
    description: 'Cámara flagship IMX766 con OIS',
    price: 291,
    stars: 2,
    reviews: 106,
    series: 'Redmi',
    image:
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1679368695.00499717.png?f=webp&thumb=1&w=500&q=85'
  },
  {
    name: 'Poco F5 Pro',
    description: 'Flow AMOLED de 120 Hz',
    price: 379,
    stars: 5,
    reviews: 15,
    series: 'Poco',
    image:
      'https://i05.appmifile.com/389_item_es/24/04/2023/f36efeb8112ec05fa99480d20941f5d7.png?f=webp&thumb=1&w=500&q=85'
  },
  {
    name: 'Poco F5',
    description: 'Flow AMOLED de 120 Hz',
    price: 379,
    stars: 5,
    reviews: 15,
    series: 'Poco',
    image:
      'https://i05.appmifile.com/389_item_es/24/04/2023/f36efeb8112ec05fa99480d20941f5d7.png?f=webp&thumb=1&w=500&q=85'
  },
  {
    name: 'Poco X5 Pro 5G',
    description: 'Cámara principal pro de 108 MP',
    price: 579,
    stars: 5,
    reviews: 215,
    series: 'Poco',
    image:
      'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1675395011.75184110.png?f=webp&thumb=1&w=500&q=85'
  }
]

// ELEMENTOS ITERABLES
const headerProducts = ['Tienda', 'Smartphone', 'Smart Home', 'Estilo de vida']
const smartphoneList = [
  ['Xiaomi', 'Redmi', 'Poco'],
  [
    'TV & Media',
    'Electrodomésticos de limpieza',
    'Electrodomesticos de cocina',
    'Electrodomesticos de ambiente',
    'Dispositivos inteligentes'
  ],
  [
    'Wearables',
    'Vehículos y viaje',
    'Oficina',
    'Cuidado personal',
    'Deportes',
    'Accesorios'
  ]
]

const items = ['Explorar', 'Ayuda']
const headerButtons = [
  './assets/user-regular (1).svg',
  './assets/cart-shopping-solid.svg',
  './assets/magnifying-glass-solid (1).svg'
]

const HeroObject = {
  title: 'Comparar smartphones',
  parrafo: 'Encuentra el modelo adecuado para ti',
  button: 'Más información'
}

const dividerObject = {
  title: 'Serie Xiaomi',
  parrafo: 'Los smartphone premium Xiaomi',
  button: 'Descúbrelos'
}

const selectOption = ['Todos', 'Xiaomi', 'Redmi', 'Poco']
const soporte = [
  'Asistencia de Xiaomi',
  'Seguimiento del orden de servicio',
  'Términos y Condiciones',
  'Canjear el cupón',
  'Aviso de Garantía de Xiaomi',
  'Aviso de seguridad del scooter'
]
const compra = [
  'Teléfonos Reacondicionados',
  'DECLARACIÓN DE CONFORMIDAD DE LA UE',
  'Partner',
  'Xiaomi para empresas'
]
const nosotros = [
  'Xiaomi',
  'Cultura',
  'Términos y Condiciones',
  'Política de privacidad',
  'Integridad y cumplimiento',
  'Trust Center'
]
const contacto = ['Correo electrónico', 'Equipo líder']
const final = [
  'Copyright © 2010 - 2024 Xiaomi. All Rights Reserved',
  'Ajustes de Cookies',
  'Política de cookies',
  'Mapa del sitio'
]

// ELEMENTOS PARA CREAR
const header = document.createElement('header')
const filter = document.querySelector('.filter')
const products = document.querySelector('.products')
// FUNCIÓN PARA LA LISTA PRINCIPAL DEL NAV

function createList(array, parentElement) {
  const nav = document.createElement('nav')
  nav.classList.add('off')
  const toggle = document.createElement('img')
  toggle.src = './assets/bars-solid (1).svg'
  toggle.id = 'toggle'
  toggle.classList.add('closed')

  const logo = document.createElement('img')
  logo.src = './assets/logo.png'
  logo.classList.add('logo')

  document.body.insertBefore(header, filter)
  header.append(logo, nav, toggle)
  const navContainer = document.createElement('div')
  navContainer.classList.add('nav-container')
  const leftDiv = document.createElement('div')
  leftDiv.classList.add('headerDiv', 'leftDiv')
  const rigtDiv = document.createElement('div')
  rigtDiv.classList.add('headerDiv', 'rigthDiv')
  navContainer.append(leftDiv, rigtDiv)
  nav.append(navContainer)

  const ul = document.createElement('ul')
  ul.classList.add('menu-horizontal')

  array.forEach((item) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    li.textContent = item

    if (item === 'Smartphone') {
      const sublist = document.createElement('ul')
      sublist.classList.add('menu-vertical')

      smartphoneList[0].forEach((smartphone) => {
        const subli = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = smartphone
        subli.append(a)
        sublist.appendChild(subli)
      })

      li.appendChild(sublist)
      li.classList.add('parent')
    } else if (item === 'Smart Home') {
      const sublist = document.createElement('ul')
      sublist.classList.add('menu-vertical')

      smartphoneList[1].forEach((smarthome) => {
        const subli = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = smarthome
        subli.append(a)
        sublist.appendChild(subli)
      })

      li.appendChild(sublist)
      li.classList.add('parent')
    } else if (item === 'Estilo de vida') {
      const sublist = document.createElement('ul')
      sublist.classList.add('menu-vertical')

      smartphoneList[2].forEach((estilo) => {
        const subli = document.createElement('li')
        const a = document.createElement('a')
        a.textContent = estilo
        subli.append(a)
        sublist.appendChild(subli)
      })

      li.appendChild(sublist)
      li.classList.add('parent')
    }

    ul.appendChild(li)
  })

  parentElement.appendChild(ul)
  leftDiv.append(ul)

  const itemsList = () => {
    const ul = document.createElement('ul')
    const buttons = document.createElement('ul')
    buttons.classList.add('navButtonsList')
    for (const item of items) {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.textContent = item
      li.append(a)
      ul.append(li)
    }

    for (const icon of headerButtons) {
      const li = document.createElement('li')
      const button = document.createElement('button')
      button.classList.add('navButtons')
      const img = document.createElement('img')
      img.src = icon
      button.append(img)
      li.append(button)
      buttons.append(li)
    }
    rigtDiv.append(ul, buttons)
  }

  itemsList(items)
}

const container = document.body

//FUNCION PARA LA LISTA SECUNDARIA DEL NAV

createList(headerProducts, container)

const parentItems = document.querySelectorAll('.parent')

parentItems.forEach((parentItem) => {
  parentItem.addEventListener('mouseover', () => {
    const sublist = parentItem.querySelector('.sublist')
    if (sublist) {
      sublist.style.display = 'block'
    }
  })

  parentItem.addEventListener('mouseout', () => {
    const sublist = parentItem.querySelector('.sublist')
    if (sublist) {
      sublist.style.display = 'none'
    }
  })
})

// TOGGLE
const toggleMenu = document.querySelector('#toggle')
const ToggleNav = document.querySelector('nav')

toggleMenu.addEventListener('click', () => ToggleNav.classList.toggle('off'))

const crearHero = () => {
  const heroSection = document.createElement('section')
  heroSection.classList.add('hero')
  const heroArticle = document.createElement('article')
  heroArticle.classList.add('hero-content')
  const divHeroOne = document.createElement('div')
  divHeroOne.classList.add('hero-text')
  const divHeroTwo = document.createElement('div')
  divHeroTwo.classList.add('hero-img')
  const h2 = document.createElement('h2')
  h2.textContent = HeroObject.title
  const p = document.createElement('p')
  p.textContent = HeroObject.parrafo
  const bodyButton = document.createElement('button')
  bodyButton.classList.add('bodyButton')
  bodyButton.textContent = HeroObject.button
  const heroImg = document.createElement('img')
  heroImg.src = './assets/xiaomi hero.webp'

  divHeroOne.append(h2, p, bodyButton)
  divHeroTwo.append(heroImg)
  heroArticle.append(divHeroOne, divHeroTwo)
  heroSection.append(heroArticle)
  document.body.insertBefore(heroSection, filter)
}
crearHero()
// DIVIDER

const crearDivider = () => {
  const dividerSection = document.createElement('section')
  dividerSection.classList.add('divider')
  const dividerArticle = document.createElement('article')
  dividerArticle.classList.add('divider-content')
  const h2Divider = document.createElement('h2')
  h2Divider.textContent = dividerObject.title
  const pdivider = document.createElement('p')
  pdivider.textContent = dividerObject.parrafo
  const dividerButton = document.createElement('button')
  dividerButton.classList.add('bodyButton')
  dividerButton.textContent = dividerObject.button

  dividerArticle.append(h2Divider, pdivider, dividerButton)
  dividerSection.append(dividerArticle)

  document.body.insertBefore(dividerSection, filter)
}

crearDivider()

const alinear = () => {
  const filter = document.querySelector('.filter')
  const elements = document.querySelector('.products')
  const main = document.createElement('main')
  main.append(filter, elements)
  document.body.append(main)
}
alinear()
// FILTRO

const crearFiltro = (productsList) => {
  const filterContainer = document.querySelector('.filter')
  const title = document.createElement('h3')
  title.textContent = 'Filtro'
  const filterDiv = document.createElement('div')
  filterDiv.classList.add('filterDiv')
  const seriesDiv = document.createElement('div')
  const seriesLabel = document.createElement('label')
  seriesLabel.textContent = 'Seleccionar Serie '
  const seriesSelect = document.createElement('select')
  seriesDiv.append(seriesLabel, seriesSelect)
  const value = []

  for (const product of selectOption) {
    if (!value.includes(product)) {
      value.push(product)
      const option = document.createElement('option')
      option.value = product
      option.textContent = product
      seriesSelect.appendChild(option)
    }
  }

  const priceDiv = document.createElement('div')
  const priceLabel = document.createElement('label')
  priceLabel.textContent = 'Precio '

  const priceInput = document.createElement('input')

  priceInput.classList.add('card-filter')
  priceInput.type = 'number'
  priceInput.placeholder = 'Buscar'
  priceDiv.append(priceLabel, priceInput)
  const clearButton = document.createElement('button')
  clearButton.classList.add('bodyButton')
  clearButton.classList.add('filterButton')
  clearButton.textContent = 'Limpiar'
  clearButton.addEventListener('click', () => {
    seriesSelect.value = selectOption[0]

    priceInput.value = ''

    aplicarFiltros()
  })

  filterDiv.append(seriesDiv, priceDiv, clearButton)

  filterContainer.append(title, filterDiv)
}

crearFiltro(productsList)

const crearProductos = (lista) => {
  const productContainer = document.querySelector('.products')
  const divProducts = document.createElement('div')
  divProducts.classList.add('moviles')
  let divMoviles = ''
  const divXiaomi = document.createElement('div')
  divXiaomi.classList.add('xiaomi')
  const divClassic = document.createElement('div')
  divClassic.classList.add('classic')
  const divRedmi = document.createElement('div')
  divRedmi.classList.add('redmi')
  const divPoco = document.createElement('div')
  divPoco.classList.add('poco')

  productContainer.append(divProducts)

  for (const product of lista) {
    let carta = `
    <div class="carta ${divMoviles}">
      <h3 class="title">${product.name}</h3>
      <img src="${product.image}" alt="Img product">
      <div class="info">
      <p>${product.stars}⭐</p>
        <p>${product.price} €</p>

        <p>${product.reviews}💬 </p>
      </div>
      <button class="bodyButton">Comprar</button>
    </div>
`
    if (product.series === 'Xiaomi') {
      divMoviles = 'Xiaomi'
    } else if (product.series === 'Classic') {
      divMoviles = 'Classic'
    } else if (product.series === 'Redmi') {
      divMoviles = 'Redmi'
    } else if (product.series === 'Poco') {
      divMoviles = 'Poco'
    }
    divProducts.innerHTML += carta
  }
}

crearProductos(productsList)

// FUNCION BÚSCADOR
const aplicarFiltros = () => {
  const filterContainer = document.querySelector('.filter')
  const seriesSelect = filterContainer.querySelector('select')
  const inputValue = document.querySelector('input')

  const selectedSerie = seriesSelect.value

  const productContainer = document.querySelector('.products .moviles')
  productContainer.innerHTML = ''

  for (const product of productsList) {
    const filtroPorSerie =
      selectedSerie === 'Todos' || product.series === selectedSerie

    const filtroPorPrecio =
      inputValue.value === '' || inputValue.value >= product.price

    if (filtroPorSerie && filtroPorPrecio) {
      let carta = `
        <div class="carta ${product.series}">
          <h3 class="title">${product.name}</h3>
          <img src="${product.image}" alt="Img product">
          <div class="info">
            <p>${product.stars}⭐</p>
            <p>${product.price} €</p>
            <p>${product.reviews}💬 </p>
          </div>
          <button class="bodyButton">Comprar</button>
        </div>
      `
      productContainer.innerHTML += carta
    }
  }
}

const filterContainer = document.querySelector('.filter')
filterContainer.addEventListener('change', aplicarFiltros)

const priceInput = document.querySelector('input')
priceInput.addEventListener('input', aplicarFiltros)

// CARGAR LA PAGINA
document.addEventListener('DOMContentLoaded', function () {
  aplicarFiltros()
})

const crearfooter = () => {
  const footer = document.createElement('footer')

  const footerContainer = document.createElement('div')
  footerContainer.classList.add('footerContainer')
  const footerEnd = document.createElement('div')
  footerEnd.classList.add('footerEnd')
  const soporteDiv = document.createElement('div')
  const compraDiv = document.createElement('div')
  const nosotrosDiv = document.createElement('div')
  const contactoDiv = document.createElement('div')

  const footerList = (list, div) => {
    const ul = document.createElement('ul')

    for (const item of list) {
      const li = document.createElement('li')
      li.classList.add('footerList')
      const a = document.createElement('a')
      a.textContent = item
      li.append(a)
      ul.append(li)
    }
    div.appendChild(ul)
  }

  footerList(soporte, soporteDiv)
  footerList(compra, compraDiv)
  footerList(nosotros, nosotrosDiv)
  footerList(contacto, contactoDiv)
  footerList(final, footerEnd)

  footerContainer.append(soporteDiv, compraDiv, nosotrosDiv, contactoDiv)
  footer.append(footerContainer, footerEnd)
  document.body.append(footer)
}
crearfooter()
