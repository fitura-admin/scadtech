let year = [
    { id: 1, year: '1999', title: 'Создание ООО «РОССКАТавто»', p: 'Производство каталитических нейтрализаторов, каталитических коллекторов, систем выпуска отработавших газов, глушителей-нейтрализаторов', img: '../img/about/year/1999.png', article: 'Первый офис группы компаний (Апрель 1999)' },
    {
        id: 2, year: '2010', title: 'Основание компании «СКАД тех»', p: `Представительство западных компаний: Continental Emitec GmbH, FEV GmbH, Eldor Corporation, Siemens
AG. Основная цель продвижение продукции этих компаний на российском рынке.
`, img: '../img/about/year/1999.png', article: ''
    },
    { id: 3, year: '2012', title: 'Запуск нового направления - Нефтегаз', p: 'Автоматизированные системы управления технологическими процессами (АСУТП) и автоматические\nсистемы пожаротушения (АС ПТ) для предприятий нефтегазовой отрасли.', img: '../img/about/year/1999.png', article: '' },
    { id: 4, year: '2013', title: 'Создание компании ООО «АСК Инжиниринг»', p: 'Проекты автоматизированных систем управления и телемеханики (МПСА, АСУ ПТ, СЛТМ) в сфере трубопроводного транспорта нефти и нефтепродуктов, SCADA системы.', img: '../img/about/year/1999.png', article: '' },
    { id: 5, year: '2014', title: 'Создание ООО «РОССКАТавто»', p: 'Производство каталитических нейтрализаторов, каталитических коллекторов, систем выпуска отработавших газов, глушителей-нейтрализаторов', img: '../img/about/year/1999.png', article: '' },
    {
        id: 6, year: '2015', title: 'Создание обособленных подразделений «СКАД тех»', p: `
Производство блок-контейнеров.
Производство приборных стоек.
Производство шкафов телемеханики
Автоматизированные системы управления технологическими процессами, АСТУЭ, АСКУЭ, SCADA системы)
Открытие ОП «СКАД тех» в г. Томск`, img: '../img/about/year/1999.png', article: ''
    },
    {
        id: 7, year: '2016', title: 'Открытие ОП «СКАД тех» в г. Самара', p: `Начало масштабной реконструкции
производственных площадок
`, img: '../img/about/year/1999.png', article: ''
    },
    {
        id: 8, year: '2017', title: `Реструктуризация бизнеса направления «автопром», сосредоточение в
одной структуре - ООО «Техноком»
`, p: 'Открытие ОП «СКАД тех» в г. Тюмень', img: '../img/about/year/1999.png', article: ''
    },
    {
        id: 9, year: '2018', title: `Создание обособленных подразделений «СКАД тех»
`, p: `Открытие обособленного подразделения «СКАД тех» в г. Хабаровск.
Открытие обособленного подразделения «АСК Инжиниринг» в г. Санкт-Петербурге`, img: '../img/about/year/1999.png', article: ''
    },
    {
        id: 10, year: '2019', title: 'Запуск нового направления', p: `производство умных остановок.
Завершение строительства и ввод в эксплуатацию нового производственного
комплекса ГK «СКАД тех» в Нижнем Новгороде
`, img: '../img/about/year/1999.png', article: ''
    },
    {
        id: 11, year: '2021', title: 'Запуск нового направления', p: `начало производства модульных мобильных
домов для глэмпингов и частного использования на производственной площадке ГK в Тольятти
`, img: '../img/about/year/1999.png', article: ''
    },
]


let yearCheng = document.querySelectorAll('.history__year p')
for (let el of yearCheng) {
    el.onclick = () => {
        for (let el of yearCheng) {
            el.classList.remove('active')
        }
        el.classList.add('active')
        let choiseYear = el.getAttribute('data-year')
        let yearContent = year[choiseYear]

        document.querySelector('.history__content__block__year p').textContent = yearContent.title
        document.querySelector('.history__content__block__year h3').textContent = yearContent.year
        document.querySelector('.history__content__block__year article').textContent = yearContent.p
        document.querySelector('.history__content__block__img p').textContent = yearContent.article
        document.querySelector('.history__content__block__img img').src = yearContent.img
    }
}

let accardeon = document.querySelectorAll('.mobile_accordeon__elem')
for (let el of accardeon) {
    el.onclick = () => {
        if (el.classList.contains('active')) {
            el.classList.remove('active')
            el.children[0].children[1].src = '../img/ui_icon/plus.svg'
        }
        else {
            for (let el of accardeon) {
                el.classList.remove('active')
                el.children[0].children[1].src = '../img/ui_icon/plus.svg'
            }
            el.classList.add('active')
            el.children[0].children[1].src = '../img/ui_icon/drop1.svg'
        }

    }
}