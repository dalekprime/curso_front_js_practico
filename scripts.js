const fraseEmail = document.querySelector(".navbar-email");
const menuEmail = document.querySelector(".desktop-menu");
const menuMobileButton = document.querySelector("#mobilebutton");
const menuMobile = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const menuCart = document.querySelector(".product-detail");
const productList = [];
const productCardsContainer = document.querySelector(".cards-container");
const productDetailExpanded = document.querySelector(".product-detail-Expanded");
const productDetailCloseButton = document.querySelector(".product-detail-close");

fraseEmail.addEventListener("click", function(){
    toggle(menuEmail);
    menuCart.classList.add("inactive");
    productDetailExpanded.classList.add("inactive");
});
menuMobileButton.addEventListener("click", function(){
    toggle(menuMobile);
    menuCart.classList.add("inactive");
    productDetailExpanded.classList.add("inactive");
});
shoppingCart.addEventListener("click", function(){
    toggle(menuCart);
    menuMobile.classList.add("inactive");
    menuEmail.classList.add("inactive");
    productDetailExpanded.classList.add("inactive");
});
document.addEventListener("keyup", function(event){
    console.log(event);
})
productDetailCloseButton.addEventListener("click", function(){
    productDetailExpanded.classList.add("inactive");
});
//document.addEventListener("contextmenu", noMenu);

function toggle(menu){
  /*  if(menuEmail.className != "desktop-menu"){
        menuEmail.classList.remove("inactive");
    }else{
        menuEmail.classList.add("inactive");
    }*/
    menu.classList.toggle("inactive");
};

function noMenu(event){
    event.preventDefault();
};

productList.push({
    name: "Bike",
    price: 186,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Computer",
    price: 596,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: "Tv HD",
    price: 297,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
function toggleProductDetail(product){
    const productDetailName = document.querySelector("#product_detail_name");
    const productDetailPrice = document.querySelector("#product_detail_price");
    const productDetailImage = document.querySelector("#product_detail_image");
    productDetailName.innerText = product.name;
    productDetailPrice.innerText = product.price;
    productDetailImage.src = product.image;
    productDetailExpanded.classList.remove("inactive");
    menuEmail.classList.add("inactive");
    menuCart.classList.add("inactive");
    menuMobile.classList.add("inactive");
};
function renderProducts(arr){
    let a = 0;
    for(product of arr){   
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.setAttribute("id", a);
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        const productInfDiv = document.createElement("div");
        const productprice = document.createElement("p");
        productprice.innerText = "$" + parseFloat( product.price);
        const productname = document.createElement("p");
        productname.innerText = product.name;
        const buyButton = document.createElement("figure");
        const buyButtonImg = document.createElement("img");
        buyButtonImg.setAttribute("src", "./icons/bt_add_to_cart.svg");
        a = a + 1;
        buyButton.appendChild(buyButtonImg);
        productInfDiv.append(productprice, productname);
        productInfo.append(productInfDiv, buyButton,);
        productCard.append(productImg, productInfo);
        productCardsContainer.append(productCard);
        productImg.addEventListener("click", function(){
            toggleProductDetail(arr[productCard.id]);
            
        });
        
    };
};
renderProducts(productList);