document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    const sections = document.querySelectorAll('.section');
    let currentIndex = 0;

    const updateDots = () => {
        dots.forEach((dot, index) => {
            dot.style.opacity = index === currentIndex ? 1 : 0.5;
        });
    };

    const scrollToSection = (index) => {
        sections[index].scrollIntoView({ behavior: 'smooth' });
    };

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.dataset.index);
            scrollToSection(currentIndex);
            updateDots();
        });
    });

    // Sticky link functionality
    const stickyLink = document.getElementById('ido-link-sticky');
    stickyLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Add the IDO link here when you have it
        window.location.href = '#'; // Replace with actual IDO link
    });

    updateDots();
});
