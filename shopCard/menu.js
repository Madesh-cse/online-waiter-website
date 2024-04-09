
//cart-box toggle
let cartBtn = document.getElementById('cart-icon');

let cart = document.querySelector('.cart');

let CloseBtn = document.getElementById('cart-close');

cartBtn.addEventListener('click',()=>{

    Remove()

    cart.classList.add('cart-active');
})

function Remove(){

    CloseBtn.addEventListener('click', ()=>{

        cart.classList.remove('cart-active');
    })
}


// scrollable menu items
const Rarrow = document.getElementById("right-arrow");

const Bscroll = document.getElementById("scroll-box");

const Larrow = document.getElementById("left-arrow")


Rarrow.addEventListener("click", () =>{
    Bscroll.scrollLeft +=300;
})

Larrow.addEventListener("click", () => {
    Bscroll.scrollLeft -=300
})

// tabs recipes content

let tabs = document.querySelectorAll('[data-tab-target]');

let FoodItemContent = document.querySelectorAll('[data-tab-content]');

tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{

        const target = document.querySelector(tab.dataset.tabTarget);

        FoodItemContent.forEach((Fooditem) =>{
            Fooditem.classList.remove('active');
        })

        tabs.forEach((tab) =>{
            tab.classList.remove('active')
        })

        tab.classList.add('active');

        target.classList.add('active')
    })

})





