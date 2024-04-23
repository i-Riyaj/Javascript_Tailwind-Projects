const showPasswordField = document.querySelector('#showPasswordField');
const copyBtn = document.querySelector('#copyBtn');
const generatePassBtn = document.querySelector('.generatePassBtn');
const passLength = document.querySelector('#passLength');

generatePassBtn.addEventListener('click', createPassword);

function createPassword () {
    document.querySelector('.copyText').innerText = "Copy";
    let password = "";
    const passCharecters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()|';
    for(let i=0; i<passLength.value; i++){
        const index = Math.floor(Math.random()*(passCharecters.length - 1));
        password += passCharecters.charAt(index);
    }
    showPasswordField.value = password;
};

copyBtn.addEventListener('click', selectAndCopyPassword);

function selectAndCopyPassword () {
    if(showPasswordField.value !== ""){
        // select text
        showPasswordField.select();

        //copy to clipboard
        navigator.clipboard.writeText(showPasswordField.value);
        document.querySelector('.copyText').innerText = `copied "${showPasswordField.value}"`;
    }
}