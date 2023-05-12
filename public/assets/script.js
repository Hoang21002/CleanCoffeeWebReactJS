
// ----------JS CHO BUTTON MENU RESPONSIVE------------------

let navbar = document.querySelector('.header .nav-list');

document.querySelector('.menu-bnt').onclick = () => {
    navbar.classList.toggle('active');
};




// ----------JS CHO SLICK SLIDER TRANG XEP HANG------------------

$(document).ready(function () {
    $('.container-list-xephanh').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev pull-left'><img src="assets/Icons/ArrowLeft.png" alt=""></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right'><img src="assets/Icons/ArrowRight.png" alt=""></button>`,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });
});

// ----------JS SEARCH ------------------

function search() {
    let filter = document.getElementById('find').value.toUpperCase();

    let item = document.querySelectorAll('.container-xephang-from');

    let textContent = document.querySelectorAll(".container-list-xephang-from")

    let l = document.getElementsByTagName('h1') ;
    
    for(var i = 0; i <= l.length ; i++){

        let a = textContent[i].getElementsByTagName('h1')[0];



        let value = a.innerHTML || a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1 ){
            textContent[i].style.display="";
            
        }
        else{
            textContent[i].style.display="none";

        }
    }
}




