const display = document.getElementById('display');
const button = document.querySelectorAll('.numbers button');



button.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;
        if (value ==='AC'){
            display.value= '';
        } else if(value ==='=') {
            try{
                display.value = eval(display.value);
            } catch{
                display.value = 'error';
            };
        }
        else if(value ==='DEL'){
            display.value = display.value.slice(0,-1);
        }
        else{
            display.value += value;
        };
    });
});