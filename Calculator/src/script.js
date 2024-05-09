const result = document.querySelector('#result');
const toggleTheme = document.querySelector('#toggleTheme');

// clear all value from result field at once
const allCLear = () => {
    result.value = '';
};

// backspace numbers on the result field one by one
const backspace = () => {
    result.value = result.value.toString().slice(0, -1);
};

// calculate while pressing on "=" button
const calculate = () => {
    try{
        result.value = eval(result.value);
    }
    catch(e){
        result.value = 'Error';
    }
};

// storing theme inside localStorage to start from where we left
const storedTheme = localStorage.getItem('storedCalculatorTheme');
if(storedTheme == 'dark'){
    document.documentElement.style.setProperty("--bgColor", "#03001C");
    document.documentElement.style.setProperty('--textColor', '#B6EADA');
    document.documentElement.style.setProperty('--keypadBgColor', '#5B8FB9');
    toggleTheme.checked = false;
}
else if(storedTheme == 'light'){
    document.documentElement.style.setProperty("--bgColor", "#FFFBF5");
    document.documentElement.style.setProperty('--textColor', '#7743DB');
    document.documentElement.style.setProperty('--keypadBgColor', '#C3ACD0');
    toggleTheme.checked = true;
}

// switch Theme
toggleTheme.onchange = () => {
    // dark to light
    if(toggleTheme.checked === true){
        document.documentElement.style.setProperty("--bgColor", "#FFFBF5");
        document.documentElement.style.setProperty('--textColor', '#7743DB');
        document.documentElement.style.setProperty('--keypadBgColor', '#C3ACD0');
        localStorage.setItem('storedCalculatorTheme', 'light');
    }
    // light to dark
    else if(toggleTheme.checked === false){
        document.documentElement.style.setProperty("--bgColor", "#03001C");
        document.documentElement.style.setProperty('--textColor', '#B6EADA');
        document.documentElement.style.setProperty('--keypadBgColor', '#5B8FB9');
        localStorage.setItem('storedCalculatorTheme', 'dark');
    }
};




