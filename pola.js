let sections = document.querySelectorAll('section');
let links = document.querySelectorAll('body nav a');

let currentSection = 'Home';
window.addEventListener('scroll', () => {
    sections.forEach(sections => {
        if (window.scrollY >= (sections.offsetTop - 200)) {
            currentSection = sections.id;
        }
    })
    links.forEach(links => {
        if (links.href.includes(currentSection)) {
            document.querySelector('.active').classList.remove('active');
            links.classList.add('active')
        }
    })
})

const iconBar = document.getElementById('icon-bar');
const navBar = document.getElementById('ul-nav');

iconBar.addEventListener("click", () => {
    navBar.classList.toggle("slide");
});

// form reset

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};