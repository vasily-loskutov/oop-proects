const cart = {
    "p92779": {
        "name": "Мужские часы CASIO G-2900F-8VER",
        "image": "./images/casio-g-2900f-8ver_images_1650372917.jpg",
        "price": 1720.00
    },
    "p93039": {
        "name": "Мужские часы CASIO AE-1000W-1AVEF",
        "image": "./images/casio-ae-1000w-1avef_images_1675943357.jpg",
        "price": 872.00
    },
    "p63553250": {
        "name": "Наручные часы Casio W-800H-1AVES",
        "image": "./images/63553250_images_9154502355.jpg",
        "price": 484.00
    },
    "p93127": {
        "name": "Мужские часы CASIO EF-552-1AVEF",
        "image": "./images/casio-ef-552-1avef_images_1583730891.jpg",
        "price": 2880.00
    },
    "p79946990": {
        "name": "Мужские часы Casio EF-527D-1AVEF",
        "image": "./images/79946990_images_11571324122.jpg",
        "price": 4238.00
    },
    "p6533206": {
        "name": "Мужские часы CASIO SGW-100-2BER",
        "image": "./images/6533206_images_1657626044.jpg",
        "price": 2416.00
    },
 
}

let cards = new Cart(cart);
cards.render()

window.addEventListener('click',function(event){
     if(event.target.dataset.set == 'add'){
        let cartAll =  document.querySelector('.cart')
        const card =  event.target.closest('.card');
        let getSrc = (cart)=>{
            for(let key in cart){
                if(key == card.dataset.articul){
                    return cart[card.dataset.articul].image
                }
            }
        };
        let getArticul = ()=>{
            for(let key in cart){
                if(key == card.dataset.articul){
                    return card.dataset.articul
                }
            }
        }
        const cardParametr = {
            src: getSrc(cart),
            price: card.querySelector('.price').textContent.replace(/[a-zа-яё]/gi, '').trim(),
            articul: getArticul(cart),

        };
        //проверка сущестует ли корзина
       if(cartAll != null){
            //если корзина существует
            let itemInCart = cartAll.querySelector(`[data-articul="${cardParametr.articul}"]`)
            if(itemInCart){
                return
            }else{
                cards.renderCartElement(cardParametr)
            }
            
                
           
            //проверяем есть ли уже такой товар в корзине

            
       }else{
            //если корзины нет то создаем её
            cards.renderCart(cardParametr)
          
            
       }
      
      
        // есть ли такой товар в корзине
     }
       //отслеживаем клик по кнопке плюс
       if(event.target.textContent == '+'){
        let cartElement = event.target.closest('.cart-elem');
        let startPrice = (cart)=>{
            for(let i in cart){
               
                if(cartElement.dataset.articul == i ){
                   return Number(cart[i].price)
                }
            }
        }
       
        cards.plus(cartElement,startPrice(cart))

         
       }
       //отслеживаем клик по кнопке минус
       if(event.target.textContent == '-'){
        let cartElement = event.target.closest('.cart-elem');
        let startPrice = (cart)=>{
            for(let i in cart){
               
                if(cartElement.dataset.articul == i ){
                   return Number(cart[i].price)
                }
            }
        }
       
        cards.minus(cartElement,startPrice(cart))

         
       }

})

