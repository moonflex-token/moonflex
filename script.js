function scrollToSection(index) {
    const sections = document.querySelectorAll('.section');
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

window.onscroll = function () {
    const sections = document.querySelectorAll('.section');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - window.innerHeight / 3;
        if (window.scrollY >= sectionTop) {
            currentIndex = index;
        }
    });

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
};
