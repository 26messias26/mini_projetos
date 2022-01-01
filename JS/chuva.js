// MENU 2 - DROPDAWN MENU

 function showMenuDrop1(valueItem){
     document.querySelector('.textBox').value = valueItem
 }

 let dropDown = document.querySelector('.dropdawn');
 dropDown.onclick = function(){
     dropDown.classList.toggle('active');
 }

// CHUVA

function rain() {
    let gotas = 30;
    let card = document.querySelector('.chuva')
    let i = 0
    let cardWidth = card.clientWidth
    while (i < gotas) {
        // gera os elementos de gota
        let drop = document.createElement('i');
        // define o tamanho da gota
        let size = Math.random() * 5;
        // define a posição de cada gota aleatoriamente
        let posX = Math.random() * cardWidth;

        let delay = Math.random() * -20
        let velocidade = Math.random() * 5;


        drop.style.width = 0.2 + size + 'px';
        drop.style.left = posX + 'px'
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + velocidade + 's';

        card.appendChild(drop)
        i++
    }
}


const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach(item => {
        item.classList.remove('active');
        this.classList.add('active');
    })
}
list.forEach((item)=>{
    item.addEventListener('click',activeLink);
})


rain();