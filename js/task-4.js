const formElem = document.querySelector('.login-form');

formElem.addEventListener('submit', el => {
    el.preventDefault();
    if (el.target.elements.email.value.trim() == '' || el.target.elements.password.value.trim() == '') {
        alert('All form fields must be filled in');
    } else {
        const dataForm = {
            email: el.target.elements.email.value.trim(),
            password: el.target.elements.password.value.trim()
        };
        console.log(dataForm);
        el.target.reset();        
    }
});
