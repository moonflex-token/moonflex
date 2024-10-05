let currentSection = 0;
const sections = document.querySelectorAll('.section');
const dots = document.querySelectorAll('.dot');

function showSection(index) {
    sections.forEach((section, i) => {
        section.style.display = i === index ? 'flex' : 'none';
        dots[i].classList.toggle('active', i === index);
    });
}

function nextSection() {
    currentSection = (currentSection + 1) % sections.length;
    showSection(currentSection);
}

function previousSection() {
    currentSection = (currentSection - 1 + sections.length) % sections.length;
    showSection(currentSection);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSection = index;
        showSection(currentSection);
    });
});

// Initial display
showSection(currentSection);
