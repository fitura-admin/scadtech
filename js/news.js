let news =  document.querySelectorAll('.news_block') 
if (window.screen.width < 960) {
    news =  document.querySelectorAll('.news_block__link__text')    
} 
for (let el of news) {
        el.onclick = () => {
            document.querySelector('.news_modal').classList.add('active')
        }
    }
document.querySelector('.close_news_modal').onclick = () => {
    document.querySelector('.news_modal').classList.remove('active')
}