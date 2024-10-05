// const elems = {
//     btn: document.querySelector('.button)';
// }
// elems.btn.addEventListener('clack', setStorageData);

// function setStorageData(event) {
//     localStorage.setItem('elem', event.target.className);
// }
document.addEventListener('DOMContentLoaded', () => {

    const STORAGE_KEY = 'feedback-form-state';

    let formData = { email: '', message: '' };

    const form = document.querySelector('.feedback-form');
    const textarea = form.querySelector('.text');
    // const textarea = form.querySelector('textarea');
    const emailInput = form.querySelector('input[name="email"]');

    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try { 
        formData = JSON.parse(savedData);
        emailInput.value = formData.email || '';
        textarea.value = formData.message || '';
        } catch (error) {  
        
    }
 }
    textarea.addEventListener('input', handleMessageInput);
    emailInput.addEventListener('input', handleEmailInput);
    form.addEventListener('submit', handleFormSubmit);


    function handleFormSubmit(event) {
        event.preventDefault();

        // formData[event.target.name] = event.target.value.trim();
        formData.email = emailInput.value.trim();
        formData.message = textarea.value.trim();

        if (formData.email === "" || formData.message === "") {
            alert('Fill please all fields');
            return;
        };
        
 localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
       console.log(formData);
       
        // const form = event.currentTarget;
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
        event.target.reset();
        
    };


    function handleMessageInput(event) {
        formData.message = event.target.value;

        console.log(event.target.value);

        //   formData.message = event.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
        console.log(formData.message);
        

        // let data;
        // if (typeof event.target.value !== "string") {
        //     data = JSON.stringify(event.target.value);
        // }
        // data = event.target.value;

        // localStorage.setItem(STORAGE_KEY, data)
        
    };

     function handleEmailInput(event) {
        
          formData.email = event.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
        console.log(event.target.value); 
    }

});