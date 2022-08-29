const fraseEmail = document.querySelector(".navbar-email");
const menuEmail = document.querySelector(".desktop-menu");

fraseEmail.addEventListener("click", togglemenu);
document.addEventListener("contextmenu", noMenu);

function togglemenu(){
  /*  if(menuEmail.className != "desktop-menu"){
        menuEmail.classList.remove("inactive");
    }else{
        menuEmail.classList.add("inactive");
    }*/
    menuEmail.classList.toggle("inactive");
};

function noMenu(event){
    event.preventDefault();
};
