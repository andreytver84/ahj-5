export function popover(el) {
    const elTitle = el.getAttribute('title');
    const elContent = el.getAttribute('data-content');
    const popoverBlock = `
    <div class="popover" data-title="${elTitle}">
        <div class="popover-cont" >
            <div class="arrow"></div>
            <h3 class="popover-header">${elTitle}</h3>
            <div class="popover-body">
                ${elContent}
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popoverBlock);
}