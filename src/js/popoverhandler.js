import { popover } from "./popover";

window.addEventListener("DOMContentLoaded", () => {
  const popoversBtn = document.querySelectorAll(".btn-popover");
  popoversBtn.forEach((item) =>
    item.addEventListener("click", (e) => {
      const popoverBlock = document.querySelector(".popover");
      if (!popoverBlock) {
        popover(e.target);
      } else if (
        popoverBlock &&
        e.target.getAttribute("title") ===
          popoverBlock.getAttribute("data-title")
      ) {
        popoverBlock.remove();
      } else if (popoverBlock) {
        popoverBlock.remove();
        popover(e.target);
      }
    })
  );
});
