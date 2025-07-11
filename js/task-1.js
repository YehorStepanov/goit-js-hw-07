const liElem = document.querySelectorAll('li.item');
console.log("Number of categories:", liElem.length);
const arrLiElem = [...liElem];
arrLiElem.forEach(logFirstElementAndCount);
function logFirstElementAndCount(item){
    console.log("Category:", item.firstElementChild.textContent); 
    const elElem = item.querySelectorAll('li');
    console.log("Elements:",elElem.length);
}

