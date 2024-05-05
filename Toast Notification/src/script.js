const toastBox = document.querySelector('#toastBox');
const successMsg = '<i class="fa-regular fa-circle-check"></i>Successfully submitted';
const errorMsg = '<i class="fa-solid fa-circle-exclamation"></i>Please fix the error!';
const invalidMsg = '<i class="fa-solid fa-triangle-exclamation"></i>Input invalid, check again';

const showToast = (msg) => {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('i-error');
    }
    else if(msg.includes('invalid')){
        toast.classList.add('i-invalid');
    }

    setTimeout( () => {
        toast.remove();
    }, 2000 );

}