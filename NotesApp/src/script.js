const editBtn = document.querySelector('#editBtn');
const notesField = document.querySelector('#notesField');


function getStorage () {
    notesField.innerHTML = localStorage.getItem('notes');
};
getStorage();

function updateStorage () {
    localStorage.setItem('notes', notesField.innerHTML);
};

editBtn.addEventListener('click', () => {
    createNote();
    updateStorage();
});

function createNote () {
    const note = document.createElement('div');
    note.classList.add('relative');
    note.innerHTML = `
    <p 
        contenteditable="true"
        class="nts bg-white overflow-y-scroll focus:outline-none text-xl p-2 w-[500px] mxs:w-[380px] xs:w-[300px] xxs:w-[170px] h-[150px] rounded-lg"
    >
    </p>
    <button type="button" class="deleteBtns size-14 px-2 py-3 rounded-full bg-slate-400 hover:bg-slate-600 absolute bottom-[5px] left-[510px] mxs:left-[390px] xs:left-[310px] xxs:left-[180px]">
        <img
            alt="deleteIcon"
            src="../assets/images/delete.png"
        />
    </button>`;
    notesField.appendChild(note);  
}

notesField.addEventListener('click', (e)=>updateNotes(e), false );

function updateNotes (e) {
    e.stopPropagation();
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === 'P') {
        document.querySelectorAll('.nts')
        .forEach( nt => {
            nt.onkeydown = function () {
                updateStorage();
            }
        })
    }
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
})








