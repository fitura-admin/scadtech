let carArtIndex = 0
let indexLengsArt = document.querySelector('.carusel_line').children.length - 2

function movecarArt(num) {

    if (num == 'plus') {
        if (carArtIndex == indexLengsArt) {
            return
        }
            carArtIndex++
        } else {
            if (carArtIndex == 0) {
                return
            }
            carArtIndex--
        }
            
            if (window.screen.width < 960) {
                document.querySelector('.carusel_line').style.marginLeft = -97.6*carArtIndex + 'vw'
            } else {
                document.querySelector('.carusel_line').style.marginLeft = -49.75*carArtIndex + 'vw'
            }
            let widthBar = 100 / indexLengsArt
            document.querySelector('.slaid_bar__elem').style.width = widthBar*carArtIndex  + '%'
          
}

document.querySelector('.carusel_nav__left').onclick = () => {movecarArt('minus')}
document.querySelector('.carusel_nav__right').onclick = () => {movecarArt('plus')} 

const imgShow2 = document.querySelector('.carusel_line')
            
imgShow2.addEventListener('swiped-left', function(e) {
        movecarArt("plus")
    });
            
imgShow2.addEventListener('swiped-right', function(e) {
        movecarArt('minus')
});


if (window.screen.width < 960) {
document.querySelector('.table_mobile_block').onclick = () => {
    document.querySelector('.complectation__text').classList.toggle('active')
}
document.querySelector('.acc_mobile_block').onclick = () => {
    document.querySelector('.wrapper_accordeons').classList.toggle('active')
}
}

let accords = document.querySelectorAll('.accordeon_elem')
for (let el of accords) {
    el.onclick = () => {
        el.classList.toggle('active')
    } 
}
