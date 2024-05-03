const ageInput = document.querySelector('#ageInput');
ageInput.max = new Date().toISOString().split('T')[0];

const calculateBtn = document.querySelector('#calculateBtn');
const outputBox = document.querySelector('#outputBox');

document.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
        calculateBtn.click();
    }
} );

// calculate days in any month
function daysInAMonth (year, month) {
    return new Date(year, month, 0).getDate();
}

function calculateAge () {
    removePreviousResult();
    if(ageInput.value !== ""){
        const dob = new Date(ageInput.value);
        const birthDate = dob.getDate();
        const birthMonth = dob.getMonth() + 1;
        const birthYear = dob.getFullYear();

        const today = new Date();
        let currentDate = today.getDate();
        let currentMonth = today.getMonth() + 1;
        let currentYear = today.getFullYear();

        let diffDate, diffMonth, diffYear;
        
        // calculating date difference 
        if(currentDate >= birthDate){
            diffDate = currentDate - birthDate;
        }
        else {
            currentMonth--;
            if(currentMonth <= 0) {
                currentMonth = 11;
                currentYear--;
            }
            diffDate = (daysInAMonth(currentYear, currentMonth) + currentDate) - birthDate;
        } 

        // calculating month difference
        if(currentMonth >= birthMonth){
            diffMonth = currentMonth - birthMonth;
        }
        else {
            currentYear--;
            diffMonth = (12 + currentMonth) - birthMonth;
        }

        // calculating year difference
        diffYear = currentYear - birthYear;

        displayAge(diffYear, diffMonth, diffDate);
        resetInputValue();
    }
}

function displayAge (year, months, days) {
    const p = document.createElement('p');
    p.innerHTML = `You are <span class="text-yellow-400 font-bold">${year}</span> years, <span class="text-yellow-400 font-bold">${months}</span> months and <span class="text-yellow-400 font-bold">${days}</span> days old.`;
    outputBox.appendChild(p);
    outputBox.classList.remove('hidden');
}

function resetInputValue () {
    ageInput.value = null;
}

function removePreviousResult () {
    if(outputBox.firstElementChild !== null){
        outputBox.firstElementChild.remove();
    }
}





