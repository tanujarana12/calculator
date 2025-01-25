// Bugs and functionality sheet
// 1) After concluding result using "r" or "=" if i again press "r" or "=" then undefined is coming in display        ///////   done
// 2) % is not working -- please add this functionality    //////done
// 3) 00 please make this like real calculator functionality
// 4) If i directly write something on display textbox and click "=" is should work or not  //// prevented the keys to not perform apart from r and c////////// done
// 5) if i have added 4 by click then + then 3 -- (means 4+3) now after that if i click +,-,* or other perform action then -- handle these conditions   //alert 
// 6) Requirement : i want to see the result in display box with green border on display box. and if user is adding something new again using buttons then again show display in normal state////////////   done


// click event capture of button
//          digit button , action button

//Get HTML Elements
const displayResult = document.getElementById('displayInput');
console.log(displayResult);
const allCalculatorButtons = document.getElementsByClassName('clickButton');
const buttonArrayLength = allCalculatorButtons.length
// const resultborder = document.getElementsByClassName('resultBorder');
// console.log(resultborder);
// const resultborder = document.getElementsByClassName('resultBorder');
//Define Variables

let performAction;
let firstValue;
let secondValue = "";
let lastResult = null;


// calculation functions
let addition = function (a, b) {
    let c;
    c = Number(a) + Number(b);
    console.log("a,b,c" , a,b,c);
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

let percentage = function (a,b){
    let c;
    c = (a/100)*b;
    return c;
}

// if (currentValue === "=") {
//     evaluateResult();
//     borderColor();
// }

let resetCalculator = function () {
    performAction = null;
    firstValue = '';
    secondValue = '';
    displayResult.value = '';
}

let borderColor = function () {
    displayInput.classList.add('resultBorder');
 }

 function resetBorder() {
    displayInput.classList.remove('resultBorder');
}

let evaluateResult = function () {
    let result;
    // let lastResult;
    
    if (lastResult !== null) {
        result = lastResult;
        // return;
    }
    else {
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
         else if (performAction === "%") {
        result = percentage(firstValue, secondValue) ;
          }
          }

    displayResult.value = result;
    performAction = null;
    secondValue = '';
    firstValue = displayResult.value;
    lastResult = result; 
    return;
}

document.addEventListener('keydown', function (event) {
    console.log(event);
    if (event.key === 'c') {
        resetCalculator();
        resetBorder();
    }
        
    else if (event.key === "r") {
        console.log("keyboard event function call");
            evaluateResult();
            borderColor();
        }
    else {
        event.preventDefault(); //built in JS function to prevent not to perform the default action
    } 
    }
)

for (let i = 0; i < buttonArrayLength; i++) {
    resetBorder(); 
    allCalculatorButtons[i].addEventListener("click", function () {
        resetBorder();
        console.log("buttoneventfunctioncall");
        let previousValue = displayResult.value;
        console.log("previousvalue", previousValue);
        let currentValue = allCalculatorButtons[i].textContent;
        console.log("currentValue", currentValue );
        // if ((performAction !== null) && (performAction !== undefined) && (currentValue !== "=")) {
        //     secondValue = secondValue + currentValue
        // }
        if (currentValue !== "=") {
            lastResult = null;
        }
        if ((performAction && currentValue !== "=")) {
            secondValue = secondValue + currentValue
        }
        // if (currentValue==="+" && performAction==="+"){
        //     performAction =" " ;
        // }
       

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
        else if (currentValue === "/") {  
            performAction = "/";
            firstValue = displayResult.value;
        }
        else if (currentValue === "%") {  
            performAction = "%";
            firstValue = displayResult.value;
        }

        else if (currentValue === "AC") {
            // performAction = "AC";
            // reset the variables
            resetCalculator();
            return;
        }

        // else if ( previousValue === displayResult.value && currentValue === "=" ) {
        //     borderColor();
        //     return;

        // }
        else if ( currentValue === "=" ) {
            evaluateResult();
            console.log(evaluateResult)
            borderColor();
            return;

        }

        // if ( displayResult.value !== null && currentValue ==="="){
        //     evaluateResult(); 
        // }

        let concatenatedResult = previousValue + currentValue;
        displayResult.value = concatenatedResult;
    });
}




