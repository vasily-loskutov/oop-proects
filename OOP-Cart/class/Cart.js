class Cart{
    constructor(
        cards
        ){
        this.cards = cards
        this.currency = 'РУБ'
        this.totalPrice = 0;
    }
     delElement(cartElement){
        let cart = document.querySelector('.cart')
        let cartTotal = document.querySelector('.cart-total')
        let cartTotalText = document.querySelector('.cart-total-text')
    
        let cartElementPrice = cartElement.querySelector('.cart-elem-price-product').textContent.replace(/\D/g, '').trim();
        this.totalPrice -= Number(cartElementPrice)
        cartTotalText.innerHTML =  `Общая цена : ${this.totalPrice} ${this.currency}`
        cartElement.remove()
        if(Array.from(cart.children).length == 0){
            cart.remove()
            cartTotal.remove()
            this.totalPrice = 0
            
        }

    }
     plus(cartElement,startPrice){
        
       let counter = cartElement.querySelector('.counter')
       let cartTotalText = document.querySelector('.cart-total-text')
       let cartPrice = cartElement.querySelector('.cart-elem-price-product')
       let newPrice = Number(cartPrice.textContent.replace(/[a-zа-яё]/gi, '').trim()) + startPrice;
       cartPrice.innerHTML =`${newPrice} ${this.currency}`
       counter.textContent++
       this.totalPrice += startPrice
       
       cartTotalText.textContent = `Общая цена : ${this.totalPrice} ${this.currency}`
     
     }
     minus(cartElement,startPrice){
        let counter = cartElement.querySelector('.counter')
        let cartTotalText = document.querySelector('.cart-total-text')
        let cartPrice = cartElement.querySelector('.cart-elem-price-product')
       
        let newPrice = Number(cartPrice.textContent.replace(/[a-zа-яё]/gi, '').trim()) - startPrice;
        if(newPrice <= 0){
            cartElement.remove()
         
        }
        counter.textContent -= 1
        this.totalPrice -= startPrice
        cartTotalText.textContent = `Общая цена : ${this.totalPrice} ${this.currency}`
        cartPrice.innerHTML =`${newPrice} ${this.currency}`
      
      }
     renderCart(cardParametr){
        let body = document.querySelector('body')
        let container = document.createElement('div');
        container.classList.add('container');
        let cart = document.createElement('div');
        cart.classList.add('cart');
        let cartTotal = document.createElement('div');
        cartTotal.classList.add('cart-total');
        let cartTotalText = document.createElement('h1');
        cartTotalText.textContent = `Общая цена : ${cardParametr.price} ${this.currency}`

        cartTotalText.classList.add('cart-total-text')
        let cartElement = document.createElement('div');
        cartElement.classList.add('cart-elem');
        cartElement.setAttribute('data-articul',cardParametr.articul)
        let cartElementProduct = document.createElement('div');
        cartElementProduct.classList.add('cart-elem-product');
        let btnMinus = document.createElement('button');
        btnMinus.classList.add('minus', 'btn', 'cart-btn');
        btnMinus.textContent = '-'
        let cartImg = document.createElement('img');
        cartImg.classList.add('cart-elem-images')
        cartImg.src = cardParametr.src   
        let btnPlus = document.createElement('button');
        btnPlus.classList.add('plus', 'btn', 'cart-btn');
        btnPlus.textContent = '+'
        let cartElemPrice = document.createElement('div');
        cartElemPrice.classList.add('cart-elem-price')
        let cartElemPriceProduct = document.createElement('h1');
        cartElemPriceProduct.classList.add('cart-elem-price-product');
        this.totalPrice += Number(cardParametr.price)
        let DelBtn = document.createElement('button');
        DelBtn.classList.add('del-btn');
        let counter = document.createElement('h1');
        counter.classList.add("counter");
        counter.textContent = '1'
        cartElemPriceProduct.textContent =`${cardParametr.price} ${this.currency}`
        cartElementProduct.append(btnMinus);
        
        cartElementProduct.append(cartImg);
        cartElementProduct.append(btnPlus);
        cartElementProduct.append(counter);
        cartElementProduct.append(DelBtn)
        cartElement.append(cartElementProduct);
        cartElement.append(cartElemPrice);
       
        cartElemPrice.append(cartElemPriceProduct)
        cart.append(cartElement);
        cartTotal.appendChild(cartTotalText)
        container.append(cart)
        container.append(cartTotal)
        body.append(container);

    }
     renderCartElement(cardParametr){
        let cartTotalText = document.querySelector('.cart-total-text')
        let cart = document.querySelector('.cart');
        let cartElement = document.createElement('div');
        cartElement.classList.add('cart-elem');
        cartElement.setAttribute('data-articul',cardParametr.articul)
        let cartElementProduct = document.createElement('div');
        cartElementProduct.classList.add('cart-elem-product');
        let btnMinus = document.createElement('button');
        btnMinus.classList.add('minus', 'btn', 'cart-btn');
        btnMinus.textContent = '-'
        let cartImg = document.createElement('img');
        cartImg.classList.add('cart-elem-images')
        cartImg.src = cardParametr.src   
        let btnPlus = document.createElement('button');
        btnPlus.classList.add('plus', 'btn', 'cart-btn');
        btnPlus.textContent = '+'
        let cartElemPrice = document.createElement('div');
        cartElemPrice.classList.add('cart-elem-price')
        let cartElemPriceProduct = document.createElement('h1');
        cartElemPriceProduct.classList.add('cart-elem-price-product');
        cartElemPriceProduct.textContent = `${cardParametr.price} ${this.currency}`
        cartElementProduct.append(btnMinus);
        let DelBtn = document.createElement('button');
        DelBtn.classList.add('del-btn');
        this.totalPrice += Number(cardParametr.price)
        cartTotalText.textContent = `Общая цена : ${this.totalPrice} ${this.currency}`
        let counter = document.createElement('h1');
        counter.textContent = '1'
        counter.classList.add("counter");
        cartElementProduct.append(cartImg);
        cartElementProduct.append(btnPlus);
        cartElementProduct.append(counter);
        cartElement.append(cartElementProduct);
        cartElementProduct.append(DelBtn)
        cartElement.append(cartElemPrice);

        cartElemPrice.append(cartElemPriceProduct)
        cart.appendChild(cartElement);

        
    
        
    }
    
    render(){
        let body = document.querySelector('body')
       let container = document.createElement('div');
       container.classList.add('container');
       let cardsBlock = document.createElement('div');
       cardsBlock.classList.add('cards');
       container.append(cardsBlock)
       body.append(container);
       for(let i in this.cards){
         let card = document.createElement('div');
         card.classList.add('card');
         card.setAttribute('data-articul',i);
         let textWrap = document.createElement('div');
         textWrap.classList.add('text-wrap');
         let name = document.createElement('h1');
         name.classList.add('title','base-font')
         name.textContent = this.cards[i].name;
         let img = document.createElement('img');
         img.classList.add('img');
         img.src = this.cards[i].image;
         let price = document.createElement('h1');
         price.classList.add('price','base-font')
         price.textContent = `${this.cards[i].price} ${this.currency}`;
         let btn = document.createElement('button')
         btn.classList.add('add-to-cart','base-font','btn')
         btn.setAttribute('data-set','add');
         btn.textContent = 'в корзину'
         textWrap.append(name)
         textWrap.append(img)
         textWrap.append(price)
         textWrap.append(btn)
         card.append(textWrap);
         cardsBlock.append(card);
       }
    }
}

