/*INITTAILIZATION*/
let string = "";
let buttons = document.querySelectorAll(".button");

/*LOOP ON EVERY BUTTON*/
Array.from(buttons).forEach((button) => {

    /*ADD EVENT LISTENER*/
    button.addEventListener('click',(e) => {

        /*CASE CHECKER*/
        switch (e.target.innerHTML) {
            case '=':
                if (string.endsWith("+") || string.endsWith("-") || string.endsWith("*") || string.endsWith("/")) {
                    alert("Invalid expression. Please enter a complete arithmetic expression.");
                }
                string = eval(string);
                document.querySelector('input').value = string;
                break;
            case 'x':
                string += "*";
                document.querySelector('input').value = string;
                break;
            case 'π':
                string += Math.PI;
                document.querySelector('input').value = string;
                break;
            case '√':
                let currentVal = document.querySelector('input').value;
                if (currentVal) {
                    document.querySelector('input').value = Math.sqrt(currentVal);
                }
                break;
            case 'C':
                string = "";
                document.querySelector('input').value = string;
                break;
            default:
                string = string + e.target.innerHTML;
                document.querySelector('input').value = string;
        }
        
    })
})
