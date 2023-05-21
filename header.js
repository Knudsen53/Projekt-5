console.log("works");

const header = document.getElementById('header');

const event = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    console.log("Hejsa", scrollTop);

    if (scrollTop > 0) {
        header.style.height = '100px';
    } else {
        header.style.height = '200px';
    }
}

window.addEventListener('scroll', event);
