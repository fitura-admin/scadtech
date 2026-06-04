//black_header
let userHeight = window.innerHeight
window.addEventListener('scroll', () => {
    let userScroll = window.scrollY
    if (userScroll > userHeight) {
        document.querySelector('.black_header').style.opacity = 1
        document.querySelector('.black_header').style.backgroundColor = '#fff'
    } else {
        let index = userScroll / userHeight
        document.querySelector('.black_header').style.opacity = index
        document.querySelector('.black_header').style.backgroundColor = '#000'
    }
});



//accordeon

let accordeon = document.querySelectorAll('.section3__accordeon__elem')
for (let el of accordeon) {
    el.onclick = () => {
        el.classList.toggle('active')
        if (el.classList.contains('active')) {
            let block = el
            let numberPic = el.getAttribute('data-hover')
            pic = document.querySelector(`.piramid_img${numberPic}`)
            openAccordBlock(block, pic)
        } else {
            let numberPic = el.getAttribute('data-hover')
            pic = document.querySelector(`.piramid_img${numberPic}`)
            closeAccordBlock(pic)
        }

    }
}
for (let el of accordeon) {
    el.onmouseover = () => {
        el.classList.add('hover')
        let imgNeiro = el.getAttribute('data-hover')
        let img = document.querySelector(`.piramid_img${imgNeiro}`)
        if (img.classList.contains('active')) {
            return
        } else {
            let hoverImg = img.getAttribute('data-img_hover')
            img.src = `img/page1/piramid/${hoverImg}`
        }

    }
    el.onmouseout = () => {
        el.classList.remove('hover')
        let imgNeiro = el.getAttribute('data-hover')
        let img = document.querySelector(`.piramid_img${imgNeiro}`)
        if (img.classList.contains('active')) {
            let hoverImg = img.getAttribute('data-img_open')
            img.src = `img/page1/piramid/${hoverImg}`
        } else {
            let hoverImg = img.getAttribute('data-img_close')
            img.src = `img/page1/piramid/${hoverImg}`
        }

    }
}


let accordeon__img = document.querySelectorAll('.section3__piramid img')
for (let el of accordeon__img) {
    el.onclick = () => {
        el.classList.toggle('active')
        if (el.classList.contains('active')) {
            let blockNumber = el.getAttribute('data-elem_p')
            block = document.querySelector(`.piramid_acc${blockNumber}`)
            pic = el
            openAccordBlock(block, pic)
        } else {
            let blockNumber = el.getAttribute('data-elem_p')
            block = document.querySelector(`.piramid_acc${blockNumber}`)
            pic = el
            closeAccordBlock(pic)
        }
    }

}
for (let el of accordeon__img) {
    el.onmouseover = () => {
        if (el.classList.contains('active')) { return }
        let hoverImg = el.getAttribute('data-img_hover')
        el.src = `img/page1/piramid/${hoverImg}`
        let blockNeiro = el.getAttribute('data-elem_p')
        document.querySelector(`.piramid_acc${blockNeiro}`).classList.add('hover')
    }
    el.onmouseout = () => {
        if (el.classList.contains('active')) { return }
        let closeImg = el.getAttribute('data-img_close')
        el.src = `img/page1/piramid/${closeImg}`
        let blockNeiro = el.getAttribute('data-elem_p')
        document.querySelector(`.piramid_acc${blockNeiro}`).classList.remove('hover')
    }
}

function openAccordBlock(block, pic) {
    for (let block of accordeon) { block.classList.remove('active') }
    block.classList.add('active')

    for (let pic of accordeon__img) {
        let closeImg = pic.getAttribute('data-img_close')
        pic.src = `img/page1/piramid/${closeImg}`
        pic.classList.remove('active')
    }
    let openImg = pic.getAttribute('data-img_open')
    pic.src = `img/page1/piramid/${openImg}`
    pic.classList.add('active')
    for (let block of accordeon) { block.classList.remove('hover') }
}
function closeAccordBlock(pic) {
    for (let block of accordeon) { block.classList.remove('active') }
    for (let el of accordeon__img) {
        let closeImg = el.getAttribute('data-img_close')
        el.src = `img/page1/piramid/${closeImg}`
        el.classList.remove('active')
    }
    let hoverImg = pic.getAttribute('data-img_hover')
    pic.src = `img/page1/piramid/${hoverImg}`
    pic.classList.remove('active')
}

const mapTooltips = [
    { id: 1, tip: 'Объекты нефтедобычи' },
    { id: 2, tip: 'Объекты нефтедобычи и подготовки нефти' },
    { id: 3, tip: 'Нефтебаза' },
    { id: 4, tip: 'Нефтебаза' },
    { id: 5, tip: 'Объекты транспортировки газа' },
    { id: 6, tip: 'Нефтехимические предприятия' },
    { id: 7, tip: 'Горно-металлургические предприятия' },
    { id: 8, tip: 'Объекты атомной отрасли' },
    { id: 9, tip: 'Проекты “Умный город”' },
    { id: 10, tip: 'Объекты трубопроводного транспорта нефти' },
    { id: 11, tip: 'Объекты транспортировки нефти и нефтепродуктов' },
    { id: 12, tip: 'Нефтебаза' },

    // Объекты транспортировки нефти и нефтепродуктов
    { id: 13, tip: 'Объекты транспортировки нефти и нефтепродуктов' },
    { id: 15, tip: 'Объекты транспортировки нефти и нефтепродуктов' },
    { id: 16, tip: 'Объекты транспортировки нефти и нефтепродуктов' },
    { id: 19, tip: 'Объекты транспортировки нефти и нефтепродуктов' },
    { id: 33, tip: 'Объекты транспортировки нефти и нефтепродуктов' },
    { id: 25, tip: 'Объекты транспортировки нефти и нефтепродуктов' },

    // Объекты СПГ и транспортировки газа
    { id: 2, tip: 'Объекты СПГ и транспортировки газа' },
    { id: 14, tip: 'Объекты СПГ и транспортировки газа' },
    { id: 22, tip: 'Объекты СПГ и транспортировки газа' },
    { id: 34, tip: 'Объекты СПГ и транспортировки газа' },

    // Объекты атомной отрасли 
    { id: 18, tip: 'Объекты СПГ и транспортировки газа' },
    { id: 23, tip: 'Объекты СПГ и транспортировки газа' },
    
    // Объекты нефтедобычи
    { id: 24, tip: 'Объекты нефтедобычи' },
    { id: 26, tip: 'Объекты нефтедобычи' },
    { id: 27, tip: 'Объекты нефтедобычи' },

    // Нефтехимические предприятия
    { id: 28, tip: 'Нефтехимические предприятия' },
    { id: 29, tip: 'Нефтехимические предприятия' },

    // Нефтебаза
    { id: 31, tip: 'Нефтебаза' },
    { id: 35, tip: 'Нефтебаза' },

    // Горно-металлургические предприятия
    { id: 17, tip: 'Горно-металлургические предприятия' },
    { id: 30, tip: 'Горно-металлургические предприятия' },

    // Морская платформа
    { id: 36, tip: 'Морская платформа' },

    // Инфраструктурные цифровые проекты
    { id: 20, tip: 'Инфраструктурные цифровые проекты' },

    // Объекты энергетики / ГЭС
    { id: 21, tip: 'Инфраструктурные цифровые проекты' },
    { id: 32, tip: 'Инфраструктурные цифровые проекты' },
]

const achievementPoinst = document.querySelectorAll(".achievement__point");
const officesPoints = document.querySelectorAll('.map_point');
const allPoints = [...achievementPoinst, ...officesPoints];
allPoints.forEach((el) => {
    let hoveredId = 0;
    el.addEventListener('mouseover', () => {
        const pointId = el.getAttribute('data-tip-id');
        hoveredId = pointId;

        const pointTooltip = mapTooltips.find(el => el.id === Number(pointId));
        if (!pointTooltip) return;

        const tooltipText = document.getElementById('map-tooltip-text');
        if (!tooltipText) return;
        tooltipText.textContent = pointTooltip.tip;

        const tooltipWrapper = document.getElementById('map-tooltip');
        const anchorX = el.getBoundingClientRect().left;
        const anchorY = el.getBoundingClientRect().top;
        if (!anchorX || !anchorY || !tooltipWrapper) return;

        const tooltipLeft = anchorX + el.offsetWidth / 2;
        tooltipWrapper.style.left = `${tooltipLeft}px`;

        const tooltipTop = anchorY - el.offsetHeight / 2 - 15;
        tooltipWrapper.style.top = `${tooltipTop}px`;

        tooltipWrapper.classList.add('active');
    });

    el.addEventListener('mouseout', () => {
        const pointId = el.getAttribute('data-tip-id');
        if (hoveredId !== pointId) return;

        const tooltipWrapper = document.getElementById('map-tooltip');
        tooltipWrapper.classList.remove('active');
    });
})

let indexCityMap = 0
document.querySelector('.map_city__img').onclick = () => {
    // indexCityMap++
    // if (indexCityMap == 7) {
    //     indexCityMap = 0
    // }
    // let cityContent = MapCitys[indexCityMap]
    // document.querySelector('.map_city p').textContent = cityContent.id
    // document.querySelector('.map_city article').innerHTML = cityContent.city
    // document.querySelector('.city_phone').textContent = cityContent.phone
    // document.querySelector('.city_adres').textContent = cityContent.adres

    // for (let el of allCity) {
    //         el.classList.remove('active')
    //     }
    // document.querySelector(`.map_city_img${indexCityMap}`).classList.add('active')
    window.location = 'pages/contact.html';
}

//mobile
if (window.screen.width < 960) {
    document.querySelector('.section1 > img').src = 'img/page1/section1_mob.png'
}