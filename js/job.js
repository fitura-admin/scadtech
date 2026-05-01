let btnMore = document.querySelectorAll('.job_btn__about')
for (let el of btnMore) {
   el.onclick = () => {document.querySelector('.job_modal').classList.add('active')} 
}

document.querySelector('.close_job_modal').onclick = () => {
    document.querySelector('.job_modal').classList.remove('active')
}

let btnContakt = document.querySelectorAll('.job_btn__contakt')
for (let el of btnContakt) {
   el.onclick = () => {
    document.querySelector('.job_modal_contakt').classList.add('active')
    openBlackWindow()
} 
}

document.querySelector('.close_job_modal_contakt').onclick = () => {
    document.querySelector('.job_modal_contakt').classList.remove('active')
    closeBlackWindow()
}

document.querySelector('.job_modal__name__link').onclick = () => {
    document.querySelector('.modal_job_callback').classList.add('active')
    openBlackWindow()
}
document.querySelector('.close__modal_job_callback').onclick = () => {
    document.querySelector('.modal_job_callback').classList.remove('active')
    closeBlackWindow()
}
document.querySelector('.close__modal_job_callback_mob').onclick = () => {
    document.querySelector('.modal_job_callback').classList.remove('active')
    closeBlackWindow()
}


