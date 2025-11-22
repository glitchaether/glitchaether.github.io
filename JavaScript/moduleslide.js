document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.grid-card, .content-left, .image-right');

    if (animatedElements.length > 0) {
        setTimeout(() => {
            animatedElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('slide-active');
                }, index * 100); 
            });
        }, 100);
    }
});