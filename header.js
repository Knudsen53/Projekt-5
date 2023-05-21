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
document.getElementById('burgerMenu').addEventListener('click', function() {
    this.classList.toggle('open');
});
