export function isValid(value) {
    return value.length >= 8 ? true : false
}

export function createModal(title, content) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const htmlContent = `
        <h1>${title}</h1>
        <div class="modal-content">${content}</div>
    `
    modal.innerHTML = htmlContent;
    mui.overlay('on', modal);
}