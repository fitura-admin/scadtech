if (window.screen.width < 960) {
    document.querySelector('.mobile_drop1').onclick = () => {
        document.querySelector('.mobile_drop1').children[2].classList.toggle('active')
        document.querySelector('.section2_dop1').classList.toggle('active')
    }
    document.querySelector('.mobile_drop2').onclick = () => {
        document.querySelector('.mobile_drop2').children[2].classList.toggle('active')
        document.querySelector('.section2_dop2').classList.toggle('active')
    }
    document.querySelector('.mobile_drop3').onclick = () => {
        document.querySelector('.mobile_drop3').children[2].classList.toggle('active')
        document.querySelector('.section_red').classList.toggle('active')
        document.querySelector('.section_white').classList.toggle('active')
    }





}