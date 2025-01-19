// click event capture of button
//          digit button , action button

//Get HTML Elements
const displayResult = document.getElementById('displayInput');
const allCalculatorButtons = document.getElementsByClassName('clickButton');
const buttonArrayLength = allCalculatorButtons.length

//Define Variables
let performAction;
let firstValue;
let secondValue = "";

// calculation functions
let addition = function (a, b) {
    let c;
    c = Number(a) + Number(b);
    return c;
}

let substraction = function (a, b) {
    let c;
    c = a - b;
    return c;
}
let multiply = function (a, b) {
    let c;
    c = a * b;
    return c;
}

let division = function (a, b) {
    let c;
    c = a / b;
    return c;
}

let resetCalculator = function () {
    performAction = null;
    firstValue = '';
    secondValue = '';
    displayResult.value = '';
}

let evaluateResult = function () {
    let result;
    if (performAction === "+") {
        result = addition(firstValue, secondValue);
    }
    else if (performAction === "-") {
        result = substraction(firstValue, secondValue);
    }
    else if (performAction === "*") {
        result = multiply(firstValue, secondValue);
    }
    else if (performAction === "/") {
        result = division(firstValue, secondValue);
    }
    displayResult.value = result;
    performAction = null;
    secondValue = '';
    firstValue = displayResult.value;
    return;
}

document.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.key === 'c') {
        resetCalculator();
    }
        
    else if (event.key === "r") {
        console.log("keyboard event function call");
            evaluateResult();
        }
    }
)

for (let i = 0; i < buttonArrayLength; i++) {
    allCalculatorButtons[i].addEventListener("click", function () {
        console.log("buttoneventfunctioncall");
        let previousValue = displayResult.value;
        let currentValue = allCalculatorButtons[i].textContent;
        // if ((performAction !== null) && (performAction !== undefined) && (currentValue !== "=")) {
        //     secondValue = secondValue + currentValue
        // }
        if ((performAction && currentValue !== "=")) {
            secondValue = secondValue + currentValue
        }

        if (currentValue === "+") {
            performAction = "+";
            firstValue = displayResult.value;
        }

        else if (currentValue === "-") {
            performAction = "-";
            firstValue = displayResult.value;
        }
        else if (currentValue === "*") {
            performAction = "*";
            firstValue = displayResult.value;
        }
        else if (currentValue === "/") {
            performAction = "/";
            firstValue = displayResult.value;
        }

        else if (currentValue === "AC") {
            // performAction = "AC";
            // reset the variables
            resetCalculator();
            return;
        }

        else if (currentValue === "=") {
            evaluateResult();
            return;
        }
        
        let concatenatedResult = previousValue + currentValue;
        displayResult.value = concatenatedResult;
    });
}




