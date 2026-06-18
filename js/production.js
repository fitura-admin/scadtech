document.querySelector('.production__text__accordeon__top').onclick = () => {
    document.querySelector('.production__text__accordeon__top img').classList.toggle('active')
    let blocks = document.querySelectorAll('.production__text__accordeon__elem')
    for (let el of blocks) {
        el.classList.toggle('active')
    }
}