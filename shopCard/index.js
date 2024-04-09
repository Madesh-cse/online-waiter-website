
let BtnCart = document.getElementById('card-icon');

let cart = document.querySelector('.cart');

let btnclose = document.getElementById("cart-close");

BtnCart.addEventListener("click",function(){

    remove()

    cart.classList.add('cart-active');
});

//cart remove  function
function remove(){
    btnclose.addEventListener('click',function(){
        cart.classList.remove('cart-active')
    })
}


// document load event
document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    LoadContent()
}

function LoadContent(){
    //remove a food item from cart 

    let btnRemove =  document.querySelectorAll('.cart-remove');

    btnRemove.forEach((btn) =>{

        btn.addEventListener('click',removeContent)
    });

    // product qty change event

let btnQty = document.querySelectorAll('.cart-quantity');

btnQty.forEach((input)=>{

    input.addEventListener('change',changeQty)
})

// product cart

let AddCart = document.querySelectorAll('.add-cart');

AddCart.forEach((Addproduct)=>{

    Addproduct.addEventListener('click',addCart)
})

updateTotal()

}


// remove item

function removeContent(){
    if(confirm('Are you sure to remove')){
        let title = this.parentElement.querySelector('.cart-food-title').
        innerHTML;
        itemList=itemList.filter(el=>el.title!=title);
        this.parentElement.remove()
        LoadContent()
    }
}

// change quantity

function changeQty(){

    if(isNaN(this.value) || (this.value < 1)){
        this.value = 1;
    }

    LoadContent()
}


let itemList = [];

// add cart 

function addCart(){
    let food = this.parentElement;
    let title =food.querySelector('.food-title').innerHTML;
    let price =food.querySelector('.food-prize').innerHTML;
    let Imgsrc =food.querySelector('.food-img').src;
   // console.log(title,price,Imgsrc)

   let newProduct = {
    title,price,Imgsrc
   }

   if(itemList.find((item)=>item.title == newProduct.title)){

    alert("Product alerady in the card");
    return;
   }

   else{
    itemList.push(newProduct)
   }

   let NewProductElement = CreateProductCart(title,price,Imgsrc);
   //console.log(NewProductElement);

   let element = document.createElement('div');

   element.innerHTML = NewProductElement


   let cartBasket = document.querySelector('.cart-content');

   cartBasket.append(element);
   LoadContent();


}

function CreateProductCart (title,price,Imgsrc){

    return `<div class="cart-box">
    <img src="${Imgsrc}" alt="" class="cart-img">
    <div class="detail-box">
        <div class="cart-food-title">${title}</div>
        <div class="price-box">
            <div class="cart-price">${price}</div>
            <div class="cart-amt">${price}</div>
        </div>
        <input type="number" value="1" class="cart-quantity">

    </div>
    <ion-icon name="trash-outline" class="cart-remove"></ion-icon>`
}


function updateTotal(){

    const cartItem = document.querySelectorAll('.cart-box');
    const TotalValue = document.querySelector('.total-price');

    let total = 0;

    cartItem.forEach(product =>{

        let priceElement = product.querySelector('.cart-price');

        let price =parseFloat(priceElement.innerHTML.replace('Rs.',''));
        
        let qty = product.querySelector('.cart-quantity').value;

        total+=(price*qty);

        product.querySelector('.cart-amt').innerText = "Rs." +( price*qty)
    });

    TotalValue.innerHTML = 'Rs.' + total;


    const cartCount=document.querySelector('.cart-count');
let count=itemList.length;
cartCount.innerHTML=count;

if(count==0){
  cartCount.style.display='none';
}else{
  cartCount.style.display='block';``        `   `
}
}



