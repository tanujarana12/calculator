// click event capture of button
//          digit button , action button




// calculation functions
let addition = function (a, b) {
    let c;
    c = Number(a) + Number(b);
    console.log("a", a)
    console.log("b", b)
    console.log("c", c)
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

const displayResult = document.getElementById('displayInput');
// displayResult.addEventListener("click", display)

const allCalculatorButtons = document.getElementsByClassName('clickButton');
const buttonArrayLength = allCalculatorButtons.length



let performAction
let firstValue
let secondValue = ""
for (let i = 0; i < buttonArrayLength; i++) {
    allCalculatorButtons[i].addEventListener("click", function () {
        console.log("click");
        let previousValue = displayResult.value;
        let currentValue = allCalculatorButtons[i].textContent;
        if ((performAction !== null) && (performAction !== undefined) && (currentValue !== "=")) {
            console.log("secondValue", secondValue)
            console.log("current", currentValue)
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

        else if (currentValue === "=") {
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
            return;
        }
        let concatenatedResult = previousValue + currentValue;
        displayResult.value = concatenatedResult;

    });
}




