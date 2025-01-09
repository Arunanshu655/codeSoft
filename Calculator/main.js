let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let inner = e.target.innerHTML
        if (inner == '=') {
            string = eval(string);
            // console.log(string);
            document.querySelector('input').value = string;
        } else {
            console.log(inner)
            if (inner == 'x') string += '*';
            else if (inner == 'del') string = string.substring(0, string.length - 1);
            else if (inner == 'AC') string = "";
            else if (inner == '+/-') {
                if (string == "") string = string;
                else if (string[0] == '-') string = string.substring(1, string.length);
                else string = '-' + string;
            }
            else string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})