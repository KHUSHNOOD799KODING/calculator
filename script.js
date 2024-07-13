let calc2 = document.getElementById('calc2');
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btndot = document.getElementById('btndot');
let btnClr = document.getElementById('btnClr');
let btnDvd = document.getElementById('btnDvd');
let btnPdt = document.getElementById('btnPdt');
let btnSbt = document.getElementById('btnSbt');
let btnAdd = document.getElementById('btnAdd');
let btnEql = document.getElementById('btnEql');

const display = document.getElementById('calc3');
const display2 = document.getElementById('calc4');

function updateDisplay(value) {
    if (display.innerText === '0' || display.innerText === 'Error') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
    display2.innerText = '';
}

function evaluateExpression() {
    try {
        const expression = display.innerText.replace(/×/g, '*').replace(/÷/g, '/').replace(/%/g, '/100*');
        display2.innerText = eval(expression);
    } catch {
        display2.innerText = 'Error';
    }
}

function handleBraces() {
    const currentText = display.innerText;
    const openBraces = (currentText.match(/\(/g) || []).length;
    const closeBraces = (currentText.match(/\)/g) || []).length;

    if (openBraces === closeBraces || currentText.slice(-1).match(/[+\-*/]/)) {
        updateDisplay('(');
    } else if (openBraces > closeBraces) {
        updateDisplay(')');
    }
}

document.querySelectorAll('.box').forEach(button => {
    button.addEventListener('click', function () {
        const id = this.id;
        switch (id) {
            case 'btnAclr':
                clearDisplay();
                break;
            case 'btnClr':
                display.innerText = display.innerText.slice(0, -1) || '0';
                break;
            case 'btnEql':
                evaluateExpression();
                break;
            case 'btnBraces':
                handleBraces();
                break;
            case 'btnPercent':
                updateDisplay('%');
                break;
            default:
                updateDisplay(this.innerText);
                break;
        }
    });
});
