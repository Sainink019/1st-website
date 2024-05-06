let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

function updateSlider() {
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 5000);
