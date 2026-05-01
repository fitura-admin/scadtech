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
            openAccordBlock(block,pic)
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
        if (img.classList.contains('active')){
            return
        } else {
            let hoverImg =  img.getAttribute('data-img_hover')
            img.src = `img/page1/piramid/${hoverImg}`
        }

    }
    el.onmouseout= () => {      
        el.classList.remove('hover')
        let imgNeiro = el.getAttribute('data-hover')
        let img = document.querySelector(`.piramid_img${imgNeiro}`)
        if (img.classList.contains('active')){
            let hoverImg =  img.getAttribute('data-img_open')
            img.src = `img/page1/piramid/${hoverImg}`
        } else {
            let hoverImg =  img.getAttribute('data-img_close')
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
            openAccordBlock(block,pic)
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
        if (el.classList.contains('active')) {return}
        let hoverImg =  el.getAttribute('data-img_hover')
        el.src = `img/page1/piramid/${hoverImg}`
        let blockNeiro = el.getAttribute('data-elem_p')
        document.querySelector(`.piramid_acc${blockNeiro}`).classList.add('hover')
    }
    el.onmouseout= () => {
        if (el.classList.contains('active')) {return}
        let closeImg = el.getAttribute('data-img_close')
        el.src = `img/page1/piramid/${closeImg}`
        let blockNeiro = el.getAttribute('data-elem_p')
        document.querySelector(`.piramid_acc${blockNeiro}`).classList.remove('hover')
    }
}




function openAccordBlock(block,pic) {
    for (let block of accordeon) {block.classList.remove('active')}
    block.classList.add('active')

    for (let pic of accordeon__img) {
        let closeImg = pic.getAttribute('data-img_close')
        pic.src = `img/page1/piramid/${closeImg}`
        pic.classList.remove('active')
    }
    let openImg = pic.getAttribute('data-img_open')
    pic.src = `img/page1/piramid/${openImg}`
    pic.classList.add('active')
    for (let block of accordeon) {block.classList.remove('hover')}
}
function closeAccordBlock(pic) {
    for (let block of accordeon) {block.classList.remove('active')}
    for (let el of accordeon__img) {
        let closeImg = el.getAttribute('data-img_close')
        el.src = `img/page1/piramid/${closeImg}`
        el.classList.remove('active')
    }
    let hoverImg = pic.getAttribute('data-img_hover')
    pic.src = `img/page1/piramid/${hoverImg}`
    pic.classList.remove('active')
}

let MapCitys = [
    {id:1 ,city:'<span>Главный офис</span> в Москве',phone:'+7 495 374-80-32',adres:'129110, Москва, Олимпийский проспект, д. 16, стр. 5'},
    {id:2 ,city:'Офис в Санкт-Петербурге',phone:'+7 812 389-44-86',adres:'194017, Санкт-Петербург, д 124 литера А, пом. 58-Н'},
    {id:3 ,city:'Офис в Уфе',phone:'+7 347 200-80-23',adres:'450022, Республика Башкортостан, Уфа, ул. Менделеева, д. 134/7'},
    {id:4 ,city:'Офис в Томске',phone:'+7 382 290-45-25',adres:'634041, Томск, Кирова проспект, д. 51а, стр. 5, оф. 528–530'},
    {id:5 ,city:'Офис в Нижнем Новгороде',phone:'+7 831 262-18-34, доб. 5400',adres:'603073, Нижний Новгород, ул. Композиторская дом 20А'},
    {id:6 ,city:'Офис в Тольятти',phone:'+7 848 265-03-27',adres:'445004, Тольятти, ул. Базовая, д. 28'},
    {id:7 ,city:'Офис в Самаре',phone:'не беспокоить',adres:'443068, Самара, ул. Скляренко, 26, БЦ "Панорама"'}
]

let allCity = document.querySelectorAll('.city_mini_change')
for (let el of allCity) {
    el.onclick = () => {
        for (let el of allCity) {
            el.classList.remove('active')
        }
        el.classList.add('active')
        let city = el.getAttribute('data-city')
        let cityContent = MapCitys[city]

        document.querySelector('.map_city p').textContent = cityContent.id
        document.querySelector('.map_city article').innerHTML = cityContent.city
        document.querySelector('.city_phone').textContent = cityContent.phone
        document.querySelector('.city_adres').textContent = cityContent.adres
    }
}

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