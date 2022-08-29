const fraseEmail = document.querySelector(".navbar-email");
const menuEmail = document.querySelector(".desktop-menu");
const menuMobileButton = document.querySelector("#mobilebutton");
const menuMobile = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const menuCart = document.querySelector(".product-detail");

fraseEmail.addEventListener("click", function(){
    toggle(menuEmail);
    menuCart.classList.add("inactive");
});
menuMobileButton.addEventListener("click", function(){
    toggle(menuMobile);
    menuCart.classList.add("inactive");
});
shoppingCart.addEventListener("click", function(){
    toggle(menuCart);
    menuMobile.classList.add("inactive");
    menuEmail.classList.add("inactive");
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
