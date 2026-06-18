let cityOffice = document.querySelectorAll('.city_block')

if (window.screen.width > 960) {
    for (let el of cityOffice) {
        el.onmouseover = () => {
            el.classList.add('active')
        }
        el.onmouseout = () => {
            el.classList.remove('active')
        }
    }
    
}
else {
    document.querySelector('.small_city1').src = '../img/citys/3m.png'
    document.querySelector('.small_city2').src = '../img/citys/4m.png'
    document.querySelector('.small_city3').src = '../img/citys/5m.png'
    for (let el of cityOffice) {
        el.onclick = () => {
            el.classList.toggle('active')
        }
    }
}




