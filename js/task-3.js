const inputElem = document.querySelector('#name-input');
const changeTextElem = document.querySelector('#name-output');
inputElem.addEventListener('input', el => {
    if (el.currentTarget.value.trim() != "") {
        changeTextElem.textContent = el.currentTarget.value.trim();
    } else {
        changeTextElem.textContent = "Anonymous";
    }
});