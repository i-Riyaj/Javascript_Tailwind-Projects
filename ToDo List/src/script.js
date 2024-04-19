const userInput = document.querySelector('#userInput');
const addBtn = document.querySelector('#addBtn');
const taskSection = document.querySelector('.taskSection');

addBtn.addEventListener('click', checkUserInput)

function checkUserInput () {
    if(userInput.value !== ''){
        createList(userInput.value);
        userInput.value = '';
    }
    else {
        alert('Please enter a task first to proceed!');
    }
};

function createList (userInput) {
    const list = document.createElement('li');
    list.innerText = `${userInput}`;
    list.classList.add("taskLists", "relative", "py-3", "pl-12", "pr-10", "before:content-['']", "before:absolute", "before:top-[18.5px]", "before:left-2", "before:size-6", "before:rounded-full", "before:bg-[url('../assets/images/unchecked.png')]", "before:bg-cover", "before:bg-center");
    taskSection.appendChild(list);

    createDeleteBtn(list);
    saveData();
    
};

function createDeleteBtn (list) {
    const span = document.createElement('span');
    span.innerHTML = "\u00d7";
    span.classList.add('hover:bg-slate-400', 'absolute', 'size-12', 'px-2', 'rounded-full', 'top-5', 'right-[0px]', 'text-[22px]', 'leading-10', 'text-center')
    list.appendChild(span);
}

taskSection.addEventListener('click', (e) => customizeLI(e), false);

function customizeLI (e) { 
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        e.target.classList.toggle('before:checked');
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }     
}

function saveData () {
    localStorage.setItem("data", taskSection.innerHTML);
}

function showTaskAfterRefresh () {
    taskSection.innerHTML = localStorage.getItem("data");
}
showTaskAfterRefresh();

