let allModules = document.querySelectorAll('.modul_card')
for (let el of allModules) {
    el.onmouseover = () => {
       for (let el of allModules) {
        el.classList.remove('active')
       }
       el.classList.add('active')
    }
    el.onmouseout= () => {
        
    }
}
if (window.screen.width < 960) {
    document.querySelector('.modul_eco_sistem').onclick = () => {
        document.querySelector('.img_modul_acc1').classList.toggle('active')
        document.querySelector('.modul_accordeon').classList.toggle('active')
    }
    document.querySelector('.modul_contact__text__elem').onclick = () => {
        document.querySelector('.img_modul_acc2').classList.toggle('active')
        document.querySelector('.modul_contact__text p').classList.toggle('active')
    }
}
