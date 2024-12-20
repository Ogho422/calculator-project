const display = document.getElementById('display');
function clearDisplay() {
    display.textContent = '0';
}

function appendValue(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }

}

function backspace() {
    display.textContent = display.slice(0, -1) || '0;'
}

function calculateResult() {
    try {
        display.textContent = eval(display.textContent.replace('x', '*').replace('÷', '/'));
    } catch (e) {
        display.textContent = 'Error'
    }
}

