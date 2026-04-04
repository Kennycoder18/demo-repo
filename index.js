// DOM Elements
const mobileNav = document.getElementById('mobileNav');
const closeMobileNav = document.getElementById('closeMobileNav');

// Mobile Navigation
mobileToggle.addEventListener('click', () => {
    mobileNav.classList.add('active');
});

closeMobileNav.addEventListener('click', () => {
    mobileNav.classList.remove('active');
});

// Close mobile nav when clicking on a link
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});








document.addEventListener('DOMContentLoaded', function() {
// Get all slides and progress dots
const slides = document.querySelectorAll('.slide');
const progressDots = document.querySelectorAll('.progress-dot');
const totalSlides = slides.length;

// Configuration
let currentSlide = 0;
const slideInterval = 6000; // 6 seconds per slide
let slideTimer;

// Initialize slideshow
function initSlideshow() {
    // Set initial state
    updateProgressDots();
    
    // Start the automatic slideshow
    startAutoSlideshow();
    
    // Optional: Add pause on hover (can be removed if not needed)
    const slideshowContainer = document.getElementById('slideshow');
    slideshowContainer.addEventListener('mouseenter', pauseSlideshow);
    slideshowContainer.addEventListener('mouseleave', resumeSlideshow);
}

// Move to next slide
function nextSlide() {
    // Hide current slide
    slides[currentSlide].classList.remove('active');
    progressDots[currentSlide].classList.remove('active');
    
    // Calculate next slide index
    currentSlide = (currentSlide + 1) % totalSlides;
    
    // Show next slide
    slides[currentSlide].classList.add('active');
    progressDots[currentSlide].classList.add('active');
}

// Update progress dots
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Start automatic slideshow
function startAutoSlideshow() {
    slideTimer = setInterval(nextSlide, slideInterval);
}

// Pause slideshow on hover (optional feature)
function pauseSlideshow() {
    clearInterval(slideTimer);
}

// Resume slideshow
function resumeSlideshow() {
    startAutoSlideshow();
}

// Start the slideshow
initSlideshow();

// Optional: Keyboard navigation (can be removed for completely control-free experience)
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft' || event.key === ' ') {
        // Prevent default space bar behavior (scrolling)
        if (event.key === ' ') event.preventDefault();
        
        // Manually trigger next slide
        clearInterval(slideTimer);
        nextSlide();
        startAutoSlideshow();
    }
});

// Optional: Touch swipe for mobile (can be removed)
let touchStartX = 0;
const slideshowContainer = document.getElementById('slideshow');

slideshowContainer.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

slideshowContainer.addEventListener('touchend', function(event) {
    const touchEndX = event.changedTouches[0].screenX;
    const swipeThreshold = 50;
    
    // Swipe left - next slide
    if (touchStartX - touchEndX > swipeThreshold) {
        clearInterval(slideTimer);
        nextSlide();
        startAutoSlideshow();
    }
});
});