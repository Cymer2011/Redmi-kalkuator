let signButton = document.getElementById('sign');
let clearButton = document.getElementById('clear');
let percentButton = document.getElementById('percent');
let divideButton = document.getElementById('divide');
let button7 = document.getElementById('7');
let button8 = document.getElementById('8');
let button9 = document.getElementById('9');
let multiplyButton = document.getElementById('multiply');
let button4 = document.getElementById('4');
let button5 = document.getElementById('5');
let button6 = document.getElementById('6');
let subtractButton = document.getElementById('subtract');
let button1 = document.getElementById('1');
let button2 = document.getElementById('2');
let button3 = document.getElementById('3');
let addButton = document.getElementById('add');
let button0 = document.getElementById('0');
let decimalButton = document.getElementById('decimal');
let equalsButton = document.getElementById('equals');
let display = document.getElementById("display");

let buttons = [
    signButton,
    clearButton,
    percentButton,
    divideButton,
    button7,
    button8,
    button9,
    multiplyButton,
    button4,
    button5,
    button6,
    subtractButton,
    button1,
    button2,
    button3,
    addButton,
    button0,
    decimalButton,
    equalsButton,
];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button === clearButton) {
            display.innerText = "0";
        } else if (button === equalsButton) {
            try {
                display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
            } catch {
                display.innerText = "Error";
            }
        } else {
            if (display.innerText === "0" && button !== decimalButton) {
                display.innerText = button.innerText;
            } else {
                display.innerText += button.innerText;
            }
        }
    });
});
