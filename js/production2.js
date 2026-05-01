let accordeonElem = document.querySelectorAll('.accordeon')
for (let elem of accordeonElem) {
    elem.onclick = () => {
        elem.children[1].classList.toggle('active')
        let blocks = elem.getAttribute('data-acc')
        if (blocks < 6) {
            let paragrafs = document.querySelectorAll(`.accordeon${blocks}__elem p`)
            for (let el of paragrafs) {
                el.classList.toggle('active')
            }
        } else {
            document.querySelector(`.accordeon${blocks}__elem`).classList.toggle('active')
        }
    }
}

let allLinksBlock = document.querySelectorAll('.sticky_block__elem')
for (let el of allLinksBlock) {
    el.onclick = () => {
        for (let el of allLinksBlock) {
            el.classList.remove('active')
        }
         el.classList.add('active')
    }
}

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        //const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 100; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', function() {
    var element1 = document.querySelector('#sec1');
	var position1 = element1.getBoundingClientRect();

    if (position1.bottom  < window.innerHeight && position1.bottom >= 0) {
        for (let el of allLinksBlock) {
            el.classList.remove('active')
        }
        document.querySelector('.sticky_block__elem1').classList.add('active')
    }

    var element2 = document.querySelector('#sec2');
	var position2 = element2.getBoundingClientRect();

    if (position2.bottom  < window.innerHeight && position2.bottom >= 0) {
        for (let el of allLinksBlock) {
            el.classList.remove('active')
        }
        document.querySelector('.sticky_block__elem2').classList.add('active')
    }

    var element3 = document.querySelector('#sec3');
	var position3 = element3.getBoundingClientRect();

    if (position3.bottom  < window.innerHeight && position3.bottom >= 0) {
        for (let el of allLinksBlock) {
            el.classList.remove('active')
        }
        document.querySelector('.sticky_block__elem3').classList.add('active')
    }

    var element4 = document.querySelector('#sec4');
	var position4 = element4.getBoundingClientRect();

    if (position4.bottom  < window.innerHeight && position4.bottom >= 0) {
        for (let el of allLinksBlock) {
            el.classList.remove('active')
        }
        document.querySelector('.sticky_block__elem4').classList.add('active')
    }

    var element5 = document.querySelector('#sec5');
	var position5 = element5.getBoundingClientRect();

    if (position5.bottom  < window.innerHeight && position5.bottom >= 0) {
        for (let el of allLinksBlock) {
            el.classList.remove('active')
        }
        document.querySelector('.sticky_block__elem5').classList.add('active')
    }
})


let mobileAccardeon = document.querySelectorAll('.production3__content__img__block')
for (let el of mobileAccardeon) {
    el.onclick = () => {
        let block = el.getAttribute('data-mobile_acc')
        document.querySelector(`.mob_acc_img${block}`).classList.toggle('active')
        document.querySelector(`.mob_text${block}`).classList.toggle('active')
        el.children[2].classList.toggle('active')
        if (block == 5 && window.screen.width < 960) {
            document.querySelector('.download_block').classList.toggle('active')
        }
    }
}