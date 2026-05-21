const cart = () => {

    const cartBtn = document.querySelector('.button-cart')
    const cart = document.getElementById('modal-cart')
    const closeBtn = cart.querySelector('.modal-close')

   
    cartBtn.addEventListener('click', () => {
        cart.style.display = 'flex'
    })

    closeBtn.addEventListener('click', () => {
        cart.style.display = 'none'
    })

    cart.addEventListener('click', (event) => {
        if (event.target === cart) {
            cart.style.display = 'none'
        }
    })

}

cart()
  
//// если чтото не понятно смотри в код элемента и посмотри какое айди и все что сзади 