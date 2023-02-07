/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/popover.js
function popover(el) {
  const {
    top,
    left,
    right
  } = el.getBoundingClientRect();
  const topPopover = top - 120;
  const leftPopover = left - (300 - (right - left)) / 2;
  const elTitle = el.getAttribute("title");
  const elContent = el.getAttribute("data-content");
  const popoverBlock = `
    <div class="popover" style="top: ${topPopover}px; left: ${leftPopover >= 0 ? leftPopover : 0}px" data-title="${elTitle}">
        <div class="popover-cont" >
            <div class="arrow"></div>
            <h3 class="popover-header">${elTitle}</h3>
            <div class="popover-body">
                ${elContent}
            </div>
        </div>
    </div>
    `;
  document.body.insertAdjacentHTML("beforeend", popoverBlock);
}
;// CONCATENATED MODULE: ./src/js/popoverhandler.js

window.addEventListener("DOMContentLoaded", () => {
  const popoversBtn = document.querySelectorAll(".btn-popover");
  popoversBtn.forEach(item => item.addEventListener("click", e => {
    const popoverBlock = document.querySelector(".popover");
    if (!popoverBlock) {
      popover(e.target);
    } else if (popoverBlock && e.target.getAttribute("title") === popoverBlock.getAttribute("data-title")) {
      popoverBlock.remove();
    } else if (popoverBlock) {
      popoverBlock.remove();
      popover(e.target);
    }
  }));
});
;// CONCATENATED MODULE: ./src/js/app.js

console.log("app.js included");
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;