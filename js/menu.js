var btn = document.getElementById("btn-mobile");
function showMenu() {
    var menu = document.getElementById("menu-mobile");
    if(!menu.classList.contains('colapsed')){
        menu.style.maxHeight = '1000px';
        menu.classList.add('colapsed');
        btn.src = 'images/mobile_menu_icon_close.svg';
        btn.style.fill= 'black';
    }else{
        menu.style.maxHeight = '0';
        menu.classList.remove('colapsed');
        setTimeout( () =>{
            btn.src = 'images/mobile_menu_icon_open.svg'
        },800);
    }
}

function showSubMenu(el) {
    var subMenu = el.nextElementSibling;
    if (subMenu.classList.contains('sub-navbar-nav')) {
        // rozwijanie zagnieżdzonego menu
        if(!subMenu.classList.contains('sub-colapsed')){
            subMenu.style.maxHeight = '300px';
            subMenu.classList.add('sub-colapsed');
        }else{
            // Zwijanie zagniezdzonego menu
            subMenu.style.maxHeight = '0';
            subMenu.classList.remove('sub-colapsed');
        }
    }
}

// nasłuchiwanie kliknięcia na rozwijalne menu 

document.querySelector('#menu-mobile').addEventListener("click",(e) => {
    showSubMenu(e.target);
});

// nasłuhiwanie klikniecia na hamburger

btn.addEventListener("click", function(){
   showMenu();
});



