let temp1 = 0;
let temp2 = 0;
let operater = "";

function add(a, b){
    operater = "";
    let c = parseInt(a) + parseInt(b);
    return screen.innerText = c;
}

function multiply(a, b){
    operater = "";
    return screen.innerText = a * b;
}

function subtract(a, b){
    operater = "";
    return screen.innerText = a - b;
}

function divide(a, b){
    if (b == "0"){
        operater = "";
        temp1 = "";
        temp2 = "";
        return alert("you cant divide by Zero");
    }
    
    operater = "";
    return screen.innerText = a / b;
}

function operate(a,b,operater){
    if (operater === '/'){
        return divide(a, b);
    } else if (operater === '*'){
        return multiply(a, b);
    } else if (operater === '+'){
        return add(a, b);
    } else if (operater === '-'){
        return subtract(a, b);
    } else {
        return alert("operator invalid");
    }
    
}

let screen = document.getElementById("screen");

function clear(){
    screen.innerText = "0";
    temp1 = "";
    temp2 = "";
    operater = "";
}

function pressNumber(a){
    console.log(screen.innerText)
    if (screen.innerText == "0"){
        screen.innerText = ""; //delete the zero in the beginning on the screen when entering numbers
    }
    if (screen.innerText.length >= 12){
        return alert("to many numbers")
    }
    
    screen.innerText += a;
}

function operation(c){
    if  (screen.innerText == "0"){
        return
    }
    temp1 = screen.innerText;
    screen.innerText = "0";
    operater = c;
}

function calculateSolution(){
    
    temp2 = screen.innerText;
    console.log(temp2);
    operate(temp1, temp2, operater);
}

function removeLast(){
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1);
}

function pressPoint(){
    if (screen.innerText.includes(".")){
        return
    } else {pressNumber(".")};
}

function solution(solution){
    // TODO
}

document.getElementById("clear").addEventListener("click", () => clear());
document.getElementById("one").addEventListener("click", ()=> pressNumber(1));
document.getElementById("two").addEventListener("click", ()=> pressNumber(2));
document.getElementById("three").addEventListener("click", ()=> pressNumber(3));
document.getElementById("four").addEventListener("click", ()=> pressNumber(4));
document.getElementById("five").addEventListener("click", ()=> pressNumber(5));
document.getElementById("six").addEventListener("click", ()=> pressNumber(6));
document.getElementById("seven").addEventListener("click", ()=> pressNumber(7));
document.getElementById("eight").addEventListener("click", ()=> pressNumber(8));
document.getElementById("nine").addEventListener("click", ()=> pressNumber(9));
document.getElementById("zero").addEventListener("click", ()=> pressNumber(0));
document.getElementById("zerozero").addEventListener("click", ()=> pressNumber("00"));
document.getElementById("add").addEventListener("click", ()=> operation("+"));
document.getElementById("subtract").addEventListener("click", ()=> operation("-"));
document.getElementById("multiply").addEventListener("click", ()=> operation("*"));
document.getElementById("divide").addEventListener("click", ()=> operation("/"));
document.getElementById("point").addEventListener("click", ()=> pressPoint());
document.getElementById("equal").addEventListener("click", ()=> calculateSolution());
document.getElementById("delete").addEventListener("click", ()=> removeLast());


// save first numbers in one value temp
// save operater in second value 
// save second numbers in third value temp2

document.addEventListener('keydown', function (e){
    console.log(e.key);
    if (e.key == "Backspace"){
        removeLast();
    }
    let digit = /[0-9]/;
    if (digit.test(e.key)){
        pressNumber(e.key);
    }
    let regExOperators = /[+|*|/]|[-]/;
    if (regExOperators.test(e.key)){
        operation(e.key);
    }
    if (e.key == "."){
        pressPoint();
    }
    if (e.key == "=" || e.key == "Enter"){
        calculateSolution();
    }
    if (e.key == "Escape"){
        clear();
    }
    

});