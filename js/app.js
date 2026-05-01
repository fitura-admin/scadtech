let iconImgX = "../img/ui_icon/x.svg"
let iconImgGmaburger = "../img/ui_icon/gamburger.svg"
let iconImgArrRight = "../img/ui_icon/arr_right.svg"


if (page == 'top') {
    iconImgX = "img/ui_icon/x.svg"
    iconImgGmaburger = "img/ui_icon/gamburger.svg"
    iconImgArrRight = "img/ui_icon/arr_right.svg"
}


let gamburger = document.querySelector('.nav_gamburger__elem')
gamburger.onclick = () => {
    document.querySelector('.modal_nav').classList.toggle('active')
    if (document.querySelector('.modal_nav').classList.contains('active')) {
        document.querySelector('.nav_gamburger__elem img').src = iconImgX
        openBlackWindow()
    } else {
        document.querySelector('.nav_gamburger__elem img').src = iconImgGmaburger
        closeBlackWindow()
    }
}

let indexScroll = 0
function openBlackWindow() {
    document.querySelector('.black_window').classList.add('active')
    document.querySelector('body').style.overflow = 'hidden';    
    indexScroll = window.scrollY
    document.querySelector('body').style.height = 100 + 'vh';
    document.querySelector('html').style.scrollBehavior = 'auto'
}
function closeBlackWindow() {
    document.querySelector('.black_window').classList.remove('active')
    document.querySelector('body').style.overflow = 'scroll';
    document.querySelector('body').style.height = 'auto';
    window.scrollTo(0, indexScroll)
    document.querySelector('html').style.scrollBehavior = 'smooth'
}



let indexCarNav = 0
let modalLinksNav = document.querySelectorAll('.modal_nav__block__elem1')
for (let el of modalLinksNav) {
    el.onclick  = () => {
        for (let el of modalLinksNav) {
            el.classList.remove('active')
        }
        el.classList.add('active')
        let block = el.getAttribute('data-links')
        let block2 = document.querySelector('.modal_nav__block2').children
        for (let elem of block2) {
            elem.classList.remove('active')
        }
        let block3 = document.querySelector('.modal_nav__block3').children
        for (let elem of block3) {
            elem.classList.remove('active')
        }
        document.querySelector(`.modal_nav__block2__posishion${block}`).classList.add('active')
        if (window.screen.width < 960) {
            document.querySelector('.wrapper_modal_nav').style.marginLeft = -97.2 + 'vw' 
            let textLink = el.children[0].textContent
            document.querySelector('.bread_crumbs__elem2').innerHTML = `
            <img src=${iconImgArrRight} alt="">
            <p>${textLink}</p>`
            document.querySelector('.bread_crumbs__elem2').style.color = 'var(--color-red_reg)'
            document.querySelector('.bread_crumbs__article p').textContent = textLink
            indexCarNav = 1
        }
    }
}

document.querySelector('.modal_nav__block__elem_link1').onclick = () => {
    document.querySelector('.modal_nav__block3__posishion1').classList.add('active')
    document.querySelector('.modal_nav__block3__posishion2').classList.remove('active')
    document.querySelector('.modal_nav__block__elem_link1').classList.add('active')
    document.querySelector('.modal_nav__block__elem_link2').classList.remove('active')
    if (window.screen.width < 960) {
            document.querySelector('.wrapper_modal_nav').style.marginLeft = -194.4 + 'vw'
            document.querySelector('.bread_crumbs__elem3').innerHTML = `
            <img src=${iconImgArrRight} alt="">
            <p>Продукция</p>`
            document.querySelector('.bread_crumbs__elem2').style.color = 'var(--color-500grey)' 
            document.querySelector('.bread_crumbs__article p').textContent = 'Продукция'
            indexCarNav = 2
        }
}
document.querySelector('.modal_nav__block__elem_link2').onclick = () => {
    document.querySelector('.modal_nav__block3__posishion2').classList.add('active')
    document.querySelector('.modal_nav__block3__posishion1').classList.remove('active')
    document.querySelector('.modal_nav__block__elem_link2').classList.add('active')
    document.querySelector('.modal_nav__block__elem_link1').classList.remove('active')
    if (window.screen.width < 960) {
            document.querySelector('.wrapper_modal_nav').style.marginLeft = -194.4 + 'vw' 
            document.querySelector('.bread_crumbs__elem3').innerHTML = `
            <img src=${iconImgArrRight} alt="">
            <p>Cвязь и телекоммуникации</p>`
            document.querySelector('.bread_crumbs__elem2').style.color = 'var(--color-500grey)' 
            document.querySelector('.bread_crumbs__article p').textContent = 'Cвязь и телекоммуникации'
            indexCarNav = 2
        }
}
document.querySelector('.bread_crumbs__elem2').onclick = () => {
    document.querySelector('.wrapper_modal_nav').style.marginLeft = -97.2 + 'vw'
    document.querySelector('.bread_crumbs__elem2').innerHTML = `
    <img src=${iconImgArrRight} alt="">
    <p>Продукция и отрасли</p>`
    document.querySelector('.bread_crumbs__elem3').innerHTML = ``
    document.querySelector('.bread_crumbs__elem2').style.color = 'var(--color-red_reg)' 
    document.querySelector('.bread_crumbs__article p').textContent = 'Продукция и отрасли'
    indexCarNav = 1
}
document.querySelector('.bread_crumbs__elem').onclick = () => {
    document.querySelector('.wrapper_modal_nav').style.marginLeft = 0
    document.querySelector('.bread_crumbs__elem2').innerHTML = ``
    document.querySelector('.bread_crumbs__elem3').innerHTML = ``
    document.querySelector('.bread_crumbs__article p').textContent = ''
    indexCarNav = 0
}

const NavCarusel = document.querySelector('.modal_nav')
            
NavCarusel.addEventListener('swiped-right', function(e) {
    if (indexCarNav == 0) {
        return
    } else if (indexCarNav == 1) {
        document.querySelector('.bread_crumbs__elem').click()
    } else {
        document.querySelector('.bread_crumbs__elem2').click()
    }   
});

document.querySelector('.nav_gamburger__call').onclick = () => {
    openBlackWindow()
    document.querySelector('.modal_comeback_call').classList.add('active')
}

document.querySelector('.comeback_call__body__elem__select').onclick = () => {
    document.querySelector('.body__elem__select__drop').classList.toggle('active')
}
let choiseContact = document.querySelectorAll('.body__elem__select__drop p')
for (let el of choiseContact) {
    el.onclick = () => {
    document.querySelector('.body__elem__select__drop').classList.remove('active')
    let text = el.textContent
    document.querySelector('.comeback_call__body__elem__select p').textContent = text
    document.querySelector('.comeback_call__body__elem__select p').style.color = 'var(--color-text)'
}
}

document.querySelector('.close__modal_comeback_call').onclick = () => {
    closeBlackWindow()
    document.querySelector('.modal_comeback_call').classList.remove('active')
}

document.querySelector('.close__modal_comeback_call_mob').onclick = () => {
    closeBlackWindow()
    document.querySelector('.modal_comeback_call').classList.remove('active')
}



document.querySelector('.footer__top__logo').onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}



