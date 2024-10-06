// Scroll to the correct section when clicking dots
function scrollToSection(index) {
    const sections = document.querySelectorAll('.section');
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

// Activate the correct dot
window.addEventListener('scroll', function() {
    const dots = document.querySelectorAll('.dot');
    const sections = document.querySelectorAll('.section');
    let index = sections.length;

    while(--index && window.scrollY + 100 < sections[index].offsetTop) {}

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
});
