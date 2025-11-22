document.addEventListener('DOMContentLoaded', () => {
    const leftBox = document.querySelector('.content-left');
    const rightBox = document.querySelector('.image-right');

    if (leftBox && rightBox) {
        setTimeout(() => {
            leftBox.classList.add('slide-active');
            rightBox.classList.add('slide-active');
        }, 100);
    }
});