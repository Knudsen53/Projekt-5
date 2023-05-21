console.log("works");

//Header scroll event
const header = document.getElementById('header');

const event = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    console.log("Hejsa", scrollTop);

    if (scrollTop > 0) {
        header.classList.add('slim')
    } else {
        header.classList.remove('slim')
    }
}

window.addEventListener('scroll', event);


//Burgermenu click event
const burger_menu_icon = document.getElementById('burgerMenuIcon');
const my_mobile_navbar = document.getElementById('navbararrarar');

const toggleOpen = () => {
    console.log("burgermenu lives matter")
       .classList.toggle('open');
}

burger_menu_icon.addEventListener('click', toggleOpen);
