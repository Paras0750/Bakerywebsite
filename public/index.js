
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    /*Adding class active to menu-btn from navbar and removing class active
    from other two buttons*/
    navbar.classList.toggle('active');
    searchBar.classList.remove('active');
    cartButton.classList.remove('active');
}

let searchBar = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchBar.classList.toggle('active');
    navbar.classList.remove('active');
    cartButton.classList.remove('active');
}

let cartButton = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick=()=>{
    cartButton.classList.toggle('active');
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
}


window.onscroll = ()=>{
    navbar.classList.remove('active');
    searchBar.classList.remove('active');
    cartButton.classList.remove('active');
}


// Test Section
var productBox = document.getElementById('productBox');
        var frontImg = document.getElementById('frontImg');
        var backImg = document.getElementById('backImg');
        function flipRight(){
            productBox.style.transform = "rotateY(180deg)";
            frontImg.style.left = "650px";
            backImg.style.left = "20px";
            frontImg.style.transform = "rotate(-30deg)";
            backImg.style.transform = "rotate(0deg)";
        }
        function flipLeft(){
            productBox.style.transform = "rotateY(0deg)";
            frontImg.style.left = "20px";
            backImg.style.left = "-650px";
            frontImg.style.transform = "rotate(0deg)";
            backImg.style.transform = "rotate(-30deg)";
        }
