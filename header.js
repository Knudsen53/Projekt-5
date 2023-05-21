console.log("works");

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
