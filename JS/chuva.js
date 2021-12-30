function rain(){
    let gotas = 20;
    let card = document.querySelector('.chuva')
    let i = 0
    let cardWidth = card.clientWidth
    while(i<gotas){
        // gera os elementos de gota
        let drop = document.createElement('i');
        // define o tamanho da gota
        let size = Math.random() * 5;
        // define a posição de cada gota aleatoriamente
        let posX = Math.random() * cardWidth;
        

        drop.style.width = 0.2 + size +'px';
        drop.style.left = posX + 'px'
        
        card.appendChild(drop)
        i++
    }
}

rain();