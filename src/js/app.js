import { popover } from "./popover";

window.addEventListener('DOMContentLoaded', () => {
    console.log("app.js included");

    const popoversBtn = document.querySelectorAll('.btn-popover');
    popoversBtn.forEach(item => item.addEventListener('click', (e) => {
        const popoverBlock = document.querySelector('.popover');
        if (!popoverBlock) {            
            popover(e.target);
            console.log('1');
        } else if (popoverBlock && e.target.getAttribute('title') === popoverBlock.getAttribute('data-title')) {
            popoverBlock.remove();
        } else if (popoverBlock) {
            console.log('3');
            popoverBlock.remove();
            popover(e.target);
        }
    }));

});


