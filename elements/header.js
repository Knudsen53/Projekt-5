
//Header scroll event
const header = document.getElementById('headerContainer');

const event = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 0) {
        header.classList.add('slim')
    } else {
        header.classList.remove('slim')
    }
}

window.addEventListener('scroll', event);


//Burgermenu click event
const burgerMenuIcon = document.getElementById('burgerMenuIcon');
const myMobileNavBar = document.getElementById('myMobileNavBar');
const body = document.body;

const toggleOpen = () => {
    console.log("burgermenu lives matter")
    myMobileNavBar.classList.toggle('open');
    body.classList.toggle('menu-open');
}

burgerMenuIcon.addEventListener('click', toggleOpen);

//Navbar
// function updateNavbarPosition() {
//     const headerHeight = header.offsetHeight;
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     const navbarTop = headerHeight + scrollTop;
//     myMobileNavBar.style.top = `${navbarTop}px`;
// }
//
// // Call the function initially and whenever the window is resized or scrolled
// updateNavbarPosition();
// window.addEventListener('resize', updateNavbarPosition);
// window.addEventListener('scroll', updateNavbarPosition);