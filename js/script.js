const navbar = document.getElementById('navbar');

navbar.addEventListener("click", function(){
    const menus = document.getElementsByClassName('menus')[0];
    
    for(let i = 0; i < document.getElementsByTagName('span').length; i++){
        document.getElementsByTagName('span')[i].classList.toggle('icon-' + (i + 1));
    }
    
    menus.classList.toggle('slide');

});

const heroImg = document.getElementById('heroImg');

heroImg.addEventListener("click", function(){
    let pos = Math.floor(Math.random() * 10) * 100;
    heroImg.style.transform = 'rotate(' + pos + 'deg)';    

});

heroImg.addEventListener("mouseleave", function(){
    heroImg.style.transform = 'rotate(' + 0 + ')';   

});